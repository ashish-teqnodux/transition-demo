import React from "react";
import Input from "../UI/Input";

const Form = () => {
  return (
    <div className="grid grid-cols-1 w-1/2 px-10 lg:px-36 pt-10">
      <Input placeholder="Customer Name" />
      <Input placeholder="Address" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Email" />
    </div>
  );
};

export default Form;
