import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #fff;
    --text-color: rgb(10, 10, 10);
    --blog-gray-color: rgb(80, 80, 80);
    --background-image: linear-gradient(90deg, rgba(10, 10, 10, 0.4), rgb(10, 10, 10, 0.4)), url(https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450);
    --background-background: #fff;
  }
`;

const Light = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

export default Light;
