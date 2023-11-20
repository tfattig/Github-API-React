// Importing necessary dependencies and components
import { useState } from "react";
import axios from 'axios';
import RepoDetails from "./RepoDetails";
import './App.css';

// The main App component
function App() {
  // State variables using useState hook
  const [username, setUsername] = useState(''); // State to hold the GitHub username
  const [loading, setLoading] = useState(false); // State to track loading state for repository search
  const [repos, setRepos] = useState([]); // State to store fetched repositories
  const [details, setDetails] = useState({}); // State to hold details of a selected repository
  const [detailsLoading, setDetailsLoading] = useState(false); // State to track loading state for repository details

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  };

  // Function to fetch repositories based on the entered username
  function searchRepos() {
    setLoading(true); // Set loading state to true during repository search
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then(res => {
      setLoading(false); // Set loading state to false after fetching repositories
      setRepos(res.data); // Store fetched repositories in state
    });
  }

  // Function to render individual repository items
  function renderRepo(repo) {
    return (
      <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2 className="repo-name">
          {repo.name}
        </h2>
      </div>
    );
  }

  // Function to fetch details of a selected repository
  function getDetails(repoName) {
    setDetailsLoading(true); // Set loading state for repository details to true
    axios({
      method: "get",
      url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then(res => {
      setDetailsLoading(false); // Set loading state for repository details to false
      setDetails(res.data); // Store fetched repository details in state
    });
  }

  // Rendering JSX for the App component
  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          {/* Form for inputting GitHub username */}
          <form className="form">
            <input 
              className="input"
              value={username}
              placeholder="Github User"
              onChange={e => setUsername(e.target.value)}
            />
            {/* Button to initiate repository search */}
            <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
          </form>
          {/* Container to display search results */}
          <div className="results-container">
            {repos.map(renderRepo)} {/* Mapping and rendering each repository */}
          </div>
        </div>
        {/* Displaying repository details */}
        <RepoDetails details={details} loading={detailsLoading} />
      </div>
    </div>
  );
}

export default App;