import React, { useState } from "react";
import "./Home.css";
import FormGroup from "../FormGroup/FormGroup";
import ButtonGroup from "../UI/ButtonGroup";

const Home = () => {
  const [showBottomButtonGroup, setShowBottomButtonGroup] = useState(false);

  const handleButtonClick = () => {
    setShowBottomButtonGroup((prev) => !prev);
  };

  return (
    <div className="w-full h-[100vh] relative">
      <div>
        <ButtonGroup
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="flex justify-between w-[40%] lg:w-[25%] m-auto pt-[200px]"
          BtnChildren={[
            {
              name: "Customer Details",
              className: "round-btn",
              handleClickBtn: () => handleButtonClick(),
            },
            {
              name: "Project Scope",
              className: `${
                !showBottomButtonGroup
                  ? "round-btn"
                  : "inline-flex justify-center items-center rounded-full bg-white border-none shadow-lg w-[80px] h-[80px] text-sm font-semibold p-4 translate-x-1 -translate-y-1"
              } transition-all ease-in-out duration-700`,
            },
          ]}
        />
      </div>
      {!showBottomButtonGroup && (
        <ButtonGroup
          className="flex justify-between w-[30%] lg:w-[20%] m-auto mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          BtnChildren={[
            { name: "Checklist", className: "round-btn-bottom" },
            { name: "Floor Details", className: "round-btn-bottom" },
          ]}
        />
      )}
      <FormGroup showBottomButtonGroup={showBottomButtonGroup} />
    </div>
  );
};

export default Home;
