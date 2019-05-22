import React from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const renderCard = (repo) => {
  return (<a key={repo.name} href={repo.html_url} target="_blank">
    <section>
      <div className="section_title">{repo.name}</div>
      <div className="about_section">
        <span>{repo.description}</span>
      </div>
      <div className="bottom_section">
        {repo.language &&
          <span style={{ display: 'inline-block' }}>
            <i className="fas fa-code"></i>
            &nbsp; {repo.language}
          </span>}
        <span><i className="fas fa-star"></i>&nbsp; {repo.stargazers_count}</span>
        <span><i className="fas fa-code-branch"></i>&nbsp; {repo.forks_count}</span>
      </div>
    </section>
  </a>);
};

export default ({ pageContext: { data } }) => {
  const { repos, user } = data;
  return (
    <section className="main">
      <div id="profile">
        <div id="profile_img" style={{ background: `url(${user.avatar_url})` }}></div>
        <div id="username"><span style={{ display: 'block' }}>{user.name}</span>{user.login}</div>
        <div id="userbio" style={{ display: 'block' }}>{user.bio}</div>
        <div id="about">
          <span style={{ display: 'block' }}><i className="fas fa-link"></i> &nbsp; {user.html_url}</span>
        </div>
      </div>
      <div id="display">
        <div id="work">
          <h1>Work.</h1>
          <div className="projects" id="work_section">
            {repos.map(repo => renderCard(repo))}
          </div>
        </div>
      </div>
    </section>
  )
}
