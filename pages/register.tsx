import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import TextError from "../components/atoms/textError";
import { UserRegisterFormIF } from "../models/user.model";
import { useUserRegisterMutation } from "../redux/api-query/userApi";
import { useRouter } from "next/router";
import style from "../styles/pages/userRegister.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const UserRegisterForm = () => {
  const [addMessage] = useUserRegisterMutation();

  const router = useRouter();
  if (typeof window !== "undefined") {
    const user = JSON.parse(`${localStorage.getItem("userTokens")}`);
    // @ts-ignore
    if (user?.accessToken) {
      router.push("/dashboard");
    }
  }

  const onSubmit = async (values: UserRegisterFormIF) => {
    console.log(values);
    await addMessage(values);
    router.push("/login");
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
                  label="passwordConfirmation"
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
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default UserRegisterForm;
