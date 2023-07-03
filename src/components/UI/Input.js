import React from "react";

const Input = ({ className, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${className} px-3 m-2 overflow-x-hidden rounded-md h-12 border-[1px] border-gray-400 focus:border-black active:border-black active:outline-none text-black`}
    />
  );
};

export default Input;
