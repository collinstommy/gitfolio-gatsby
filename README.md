<h1 align="center">
  Gitfolio Gatsby
</h1>

A gatsby version of  https://github.com/imfunniee/gitfolio/. Thanks to @imfunniee for all the styles and markup.

Live Demo: https://collinstommy.github.io/gitfolio-gatsby/

## Quick start

1.  **Install gatsby.**

    ```sh
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site.**
    Use the Gatsby CLI to create a new site.

    ```sh
    gatsby new my-portfolio https://github.com/collinstommy/gitfolio-gatsby
    ```

3. **Add your details to `gatsby-config`**

    ```js
      settings: {
        githubUser: '',
        backgroundImage: '',
        theme: 'dark', // or 'light'
      },
    ```

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-portfolio/
    gatsby develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    Open the `my-portfolio` directory in your code editor of choice and edit `listings.js`. Save your changes and the browser will update in real time!

6.  **Deploy**

    ##### Github Pages

    In `gatsby-config.js` ensure pathPrefix matches your repo.
    ```
    pathPrefix: "/reponame",
    ```

    Run deploy script
    ```
    npm i
    npm run deploy
    ```

    Your site will be live at:
    `https://<your-user-name>.github.io/<repoName>`
    <br />
    https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/

    ##### Netlify
    https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#connecting-to-netlify

## 🎓 Learning Gatsby

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). 

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/collinstommy/gitfolio-gatsby)
