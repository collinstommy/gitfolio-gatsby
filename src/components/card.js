import React from 'react';

const Card = ({
  name,
  html_url,
  description,
  language,
  stargazers_count,
  forks_count,
}) => {
  return (<a key={name} href={html_url} target="_blank">
    <section>
      <div className="section_title">{name}</div>
      <div className="about_section">
        <span>{description}</span>
      </div>
      <div className="bottom_section">
        {language &&
          <span style={{ display: 'inline-block' }}>
            <i className="fas fa-code"></i>
            &nbsp; {language}
          </span>}
        <span><i className="fas fa-star"></i>&nbsp; {stargazers_count}</span>
        <span><i className="fas fa-code-branch"></i>&nbsp; {forks_count}</span>
      </div>
    </section>
  </a>);
};

export default Card;
