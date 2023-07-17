import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, buttonName, type }) => {
  return (
    <button
      className={` py-2 px-5 cursor-pointer bg-primary text-white rounded-md text-center ${className}`}
      type={type}
    >
      {buttonName}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  buttonName: PropTypes.string,
  type: PropTypes.string,
};
