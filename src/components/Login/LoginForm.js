import { Box } from "@mui/material";
import React from "react";
import MuiTextField from "../UI/MuiTextField";
import Button from "../UI/Button";

const LoginForm = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="flex flex-col space-y-5 mt-8">
          <MuiTextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            register={register}
            error={errors?.email || ""}
          />
          <MuiTextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            register={register}
            error={errors?.password || ""}
          />
        </Box>
        <Box className="flex justify-center my-5 mb-10">
          <Button type="submit" buttonName="Submit" />
        </Box>
      </form>
    </div>
  );
};

export default LoginForm;
