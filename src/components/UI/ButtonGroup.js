import React from "react";
import { motion } from "framer-motion";

const ButtonGroup = ({
  className,
  initial,
  animate,
  exit,
  transition,
  BtnChildren,
}) => {
  return (
    <div>
      <motion.div
        className={className}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        {BtnChildren?.map((btn, idx) => (
          <button
            key={idx}
            className={btn.className || ""}
            onClick={btn.handleClickBtn}
          >
            {btn.name || ""}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default ButtonGroup;
