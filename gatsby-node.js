/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const axios = require('axios')
const config = require('./gatsby-config');

const getGithubData = async (username) => {
  const repos = await axios(`https://api.github.com/users/${username}/repos?per_page=100&page=1`);
  const user = await axios(`https://api.github.com/users/${username}`);
  return { repos: repos.data, user: user.data };
};

exports.createPages = async ({ actions: { createPage } }) => {
  const data = await getGithubData(config.siteMetadata.githubUser);
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/listing.js"),
    context: { data },
  })
}
