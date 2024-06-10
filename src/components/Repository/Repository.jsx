import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Repository.module.css';


function Repository() {

  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/kolapowariz/${repoName}`)
      .then((response) => response.json())
      .then((data) => setRepo(data))
      .catch((error) => console.error(error));
  }, [repoName]);

  if (!repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>Repository Name:  {repo.full_name}</h1>
      <p className={`${styles.description}`}>Repository Description: {repo.description}</p>
      <p className={`${styles.description}`}>Repository Langauge: {repo.language}</p>
      <p className={`${styles.description}`}>Repository Star: {repo.stargazers_count} stars</p>
      <p className={`${styles.description}`}>Repository Forks: {repo.forks_count} forks</p>
      <p className={`${styles.description}`}>Repository Open Issues: {repo.open_issues_count} open issues</p>
      <p className={`${styles.description}`}>Repository Subscribers: {repo.subscribers_count} subscribers</p>
      <p className={`${styles.description}`}>Repository Branch: {repo.default_branch}</p>
      <p className={`${styles.description}`}>Date Repository Was Created : {repo.created_at}</p>
      <p className={`${styles.description}`}>Date Repository Was Updated: {repo.updated_at}</p>
      <p className={`${styles.description}`}>Date Repository Was Pushed: {repo.pushed_at}</p>
      <p className={`${styles.description}`}>Repository Size: {repo.size} KB</p>
      <p className={`${styles.description}`}>Repository License Name: {repo.license?.name}</p>
      <p className={`${styles.description}`}>Repository Forked Or Not: {repo.archived ? 'Archived' : 'Not archived'}</p>
      <p className={`${styles.description}`}>Repository Disabled Or Not: {repo.disabled ? 'Disabled' : 'Not disabled'}</p>
    </div>
  )

}

export default Repository;