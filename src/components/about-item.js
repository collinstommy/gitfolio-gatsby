import React from 'react';
import PropTypes from 'prop-types';

const AboutItem = ({ text, icon }) => {
  if (!text) return null;
  return (
    <span style={{ display: 'block' }}>
      <i className={`fas fa-${icon}`}></i>
      &nbsp; {text}
    </span>
  );
};

AboutItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};

export default AboutItem;
