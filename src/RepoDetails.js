// This functional component renders details for a repository
function RepoDetails({ details }){
    // Renders repository details in a structured layout
    return (
        <div className="repo-details-container">
            {/* Renders a row for the repository name */}
            <div className="details-row">
                <label className="label">Name:</label>
                {/* Displays the repository name */}
                <span className="value">{details.name}</span>
            </div>
            {/* Renders a row for the number of forks */}
            <div className="details-row">
                <label className="label">Forks:</label>
                {/* Displays the number of forks */}
                <span className="value">{details.forks}</span>
            </div>
            {/* Renders a row for the programming language used */}
            <div className="details-row">
                <label className="label">Language:</label>
                {/* Displays the programming language */}
                <span className="value">{details.language}</span>
            </div>
            {/* Renders a row for the number of stars */}
            <div className="details-row">
                <label className="label">Stars:</label>
                {/* Displays the number of stars */}
                <span className="value">{details.stargazers_count}</span>
            </div>
        </div>
    )
}

export default RepoDetails;