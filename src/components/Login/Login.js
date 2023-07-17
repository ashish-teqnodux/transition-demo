import React, { useEffect } from "react";
import * as yup from "yup";
import { useReactHookForm } from "../../hooks/useReactHookForm";
import { adminLogin } from "../../services/customers.service";
import { getAuth, setAuth } from "../../services/identity.service";
import { useNavigate } from "react-router-dom";
import MuiSnackbar from "../UI/MuiSnackbar";
import LoginForm from "./LoginForm";
import Text from "../UI/Text";
import Image from "../UI/Image";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!!auth?.token) {
      navigate("/");
    }
  }, [auth, navigate]);

  const EventSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email is invalid")
      .nullable()
      .required("Email is required!"),
    password: yup
      .string()
      .min(6, "Password must be of at least 6 characters")
      .required("Password is required!"),
  });

  const { handleSubmit, register, errors, watch } = useReactHookForm({
    EventSchema,
    defaultValues: {},
    mode: onchange,
  });

  const onSubmitLoginForm = async (data) => {
    let loginRes = await adminLogin(data);
    if (loginRes?.data?.status) {
      new Promise((resolve, _reject) => {
        resolve(setAuth(loginRes?.data?.entity));
      });
      navigate("/customers");
    } else {
      setOpen(true);
      setMessage(loginRes?.data?.message);
      setType("error");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg py-8 px-8 w-full border-[1px] md:w-[50%] lg:w-[40%] xl:w-[35%] m-auto rounded-lg">
        <MuiSnackbar
          open={open}
          message={message || ""}
          type={type || ""}
          onClose={handleClose}
        />
        <div className="flex justify-center items-center">
          <Image
            src="/images/fv_logo.svg"
            className=" w-[150px] object-cover"
          />
        </div>
        <LoginForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmitLoginForm}
          register={register}
          errors={errors}
          watch={watch}
        />
      </div>
    </div>
  );
};

export default Login;
