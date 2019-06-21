/* Based on https://github.com/imfunniee/gitfolio/ */

import React from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import SEO from '../components/seo';
import AboutItem from '../components/about-item';
import Theme from '../components/theme';
import { graphql } from 'gatsby';
import Card from '../components/card';

export default ({ pageContext, data }) => {
  const { repos, user } = pageContext.data;
  const { company, email, blog, location, hireable } = user;
  const { theme, backgroundImage } = data.site.siteMetadata
  const hireText = hireable ? 'Available for Hire' : '';

  return (
    <React.Fragment>
      <Theme backgroundImage={backgroundImage} theme={theme} />
      <SEO title="Porfolio" />
      <section className="main">
        <div id="profile">
          <div id="profile_img" style={{ background: `url(${user.avatar_url})` }}></div>
          <div id="username"><span style={{ display: 'block' }}>{user.name}</span>@{user.login}</div>
          <div id="userbio" style={{ display: 'block' }}>{user.bio}</div>
          <div id="about">
            <AboutItem text={company} icon="useres" />
            <AboutItem text={email} icon="envelope" />
            <AboutItem text={blog} icon="link" />
            <AboutItem text={location} icon="map-marker-alt" />
            <AboutItem text={hireText} icon="user-tie" />
          </div>
        </div>
        <div id="display">
          <div id="work">
            <h1>Work.</h1>
            <div className="projects" id="work_section">
              {repos.map(repo => <Card {...repo} />)}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        backgroundImage
        theme
      }
    }
  }
`;
