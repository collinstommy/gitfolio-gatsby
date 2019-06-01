import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: rgb(10, 10, 10);
    --text-color: #fff;
    --blog-gray-color: rgb(180, 180, 180);
    --background-background: linear-gradient(0deg, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0.6)),
      url(https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450) center center fixed;
    --height: 50vh;
  }
  #display h1 {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
  }
  #blog-display h1 {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
  }
  .projects section {
    background: rgb(20, 20, 20);
  }
  #blog_section section {
    background: rgb(20, 20, 20);
  }
`;

const Dark = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

export default Dark;
