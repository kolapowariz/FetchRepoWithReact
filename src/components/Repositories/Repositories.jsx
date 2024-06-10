import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Repositories.module.css';
import NewRepo from '../NewRepo/NewRepo';

function Repositories() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const itemPerPage = 10;

  useEffect(() => {
    fetch(`https://api.github.com/users/kolapowariz/repos?page=${page}&per_page=${itemPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data)
          if (data.length < itemPerPage) {
            setLastPage(true)
          } else {
            setLastPage(false)
          }
        } else {
          console.log('Data is not an array:', data);
        }
      })
      .catch((error) => console.error(error));
  }, [page]);

  const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={`${styles.container}`}>

      <div className={`${styles.repos}`}>
        <h1>Repositories</h1>
      </div>
      <div className={`${styles.element}`}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
          {filteredRepos.map(repo => (
            <li key={repo.id}>
              <Link to={`/repos/${repo.name}`} className={`${styles.link}`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className={`${styles['repo-button']}`}>Previous</button>
        <button onClick={() => setPage(page + 1)} disabled={lastPage} className={`${styles['repo-button']}`}>Next</button>

      </div>
      <div>
        <NewRepo />
      </div>
    </div>
  );
}

export default Repositories;