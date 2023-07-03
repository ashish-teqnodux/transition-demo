import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./FormGroup.css";
import ButtonGroup from "../UI/ButtonGroup";
import Form from "../Form/Form";
import VerticalDivider from "../UI/VerticalDivider";

const FormGroup = ({ showBottomButtonGroup }) => {
  return (
    <div>
      <AnimatePresence>
        {showBottomButtonGroup && (
          <motion.div
            initial={{
              opacity: 0,
              y: 600,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: 600, transition: { duration: 1 } }}
            className="bg-white w-full h-[400px] sm:h-[655px] lg:h-[510px] mt-14 rounded-tl-[60px] rounded-tr-[60px]"
          >
            <div className="relative">
              <div>
                <Form />
              </div>
              <VerticalDivider />
              <div className=""></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={true}>
        {showBottomButtonGroup && (
          <ButtonGroup
            className="absolute bottom-32 left-28 flex gap-4"
            initial={{
              opacity: 1,
              x: 100,
              y: -400,
            }}
            animate={{ opacity: 1, x: -100, y: 100 }}
            exit={{ opacity: 0, x: 100, y: -400 }}
            transition={{ duration: 1.2 }}
            BtnChildren={[
              { name: "Checklist", className: "round-small-btn" },
              { name: "Floor Details", className: "round-small-btn" },
            ]}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormGroup;
