import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import TextError from "../components/atoms/textError";
import { UserRegisterFormIF } from "../models/user.model";
import { useRouter } from "next/router";
import style from "../styles/pages/userRegister.module.css";
import { ToastContainer, toast } from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "must be 6 characters"),
  passwordConfirmation: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const UserRegisterForm = () => {
  const url = "https://collage-enquiry-system-chatbot.herokuapp.com/api";

  const router = useRouter();
  if (typeof window !== "undefined") {
    const user = JSON.parse(`${localStorage.getItem("userTokens")}`);
    // @ts-ignore
    if (user?.accessToken) {
      router.push("/dashboard");
    }
  }

  const onSubmit = async (values: UserRegisterFormIF) => {
    fetch(`${url}/users`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.email) {
          toast.success("Register Successful");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          toast.error("Failed");
        }
      })
      .catch((error) => {
        toast.error("Failed");
        console.error("Error:", error);
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className={style.formContainer}>
            <Form method="post" className={style.formBox}>
              <div className={style.input}>
                <TextField
                  type="text"
                  id="name"
                  label="name"
                  variant="outlined"
                  {...formik.getFieldProps("name")}
                />
                <ErrorMessage component={TextError} name="name" />
              </div>
              <div className={style.input}>
                <TextField
                  type="text"
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...formik.getFieldProps("email")}
                />
                <ErrorMessage component={TextError} name="email" />
              </div>
              <div className={style.input}>
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  {...formik.getFieldProps("password")}
                />
                <ErrorMessage component={TextError} name="password" />
              </div>
              <div className={style.input}>
                <TextField
                  type="password"
                  id="passwordConfirmation"
                  label="password Confirmation"
                  variant="outlined"
                  {...formik.getFieldProps("passwordConfirmation")}
                />
                <ErrorMessage
                  component={TextError}
                  name="passwordConfirmation"
                />
              </div>
              <div className={style.input}>
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </div>
              <ToastContainer />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default UserRegisterForm;
