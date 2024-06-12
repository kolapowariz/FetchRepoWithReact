import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Repositories.module.css';
import NewRepo from '../NewRepo/NewRepo';
import { useContext } from 'react';
import { DataContext } from '../Data';

function Repositories() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemPerPage = 10;
  const context = useContext(DataContext)
  
  const filteredRepos = context.filter(repo => repo.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const startIndex = (page - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const currentRepos = filteredRepos.slice(startIndex, endIndex)

  const totalPages = Math.ceil(filteredRepos.length / itemPerPage)

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  return (
    <div className={`${styles.container}`}>

      <div className={`${styles.repos}`}>
        <h1>Repositories</h1>
      </div>
      <div className={`${styles.element}`}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
          {currentRepos.map(repo => (
            <li key={repo.id}>
              <Link to={`/rep/${repo.name}`} className={`${styles.link}`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={() => handlePageChange(page - 1)} className={`${styles['repo-button']}`}>Previous</button>
        <div>{page}</div>
        <button onClick={() => handlePageChange(page + 1)} className={`${styles['repo-button']}`}>Next</button>

      </div>
      <div>
        <NewRepo />
      </div>
    </div>
  );
}

export default Repositories;