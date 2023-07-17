import React from "react";
import PropTypes from "prop-types";

const Image = ({ className = "w-15 h-15", src }) => {
  return <img className={`${className}`} src={src} />;
};

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};
