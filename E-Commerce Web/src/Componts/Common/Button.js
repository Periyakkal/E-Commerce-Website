// src/components/common/Button.js

import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, label }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
