import React from "react";
import PropTypes from "prop-types";

const Text = ({ className = "text-[16px]", children }) => {
  return <div className={`text-black ${className}`}>{children}</div>;
};

export default Text;

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
