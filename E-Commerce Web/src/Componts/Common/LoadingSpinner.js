// src/components/common/LoadingSpinner.js

import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = '40px', color = '#3498db' }) => (
  <div className="loading-spinner" style={{ width: size, height: size }}>
    <div style={{ borderColor: color }}></div>
    <div style={{ borderColor: color }}></div>
    <div style={{ borderColor: color }}></div>
    <div style={{ borderColor: color }}></div>
  </div>
);

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default LoadingSpinner;
