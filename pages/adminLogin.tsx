import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import TextError from "../components/atoms/textError";
import { AdminFormIF } from "../models/admin.model";
import { useRouter } from "next/router";
import style from "../styles/pages/adminLogin.module.css";
import { useDispatch } from "react-redux";
import { updateAdminToken } from "../redux/redux-toolkit/adminSlice";
import { ToastContainer, toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const AdminLoginForm = () => {
  const dispatch = useDispatch();
  const url = "https://collage-enquiry-system-chatbot.herokuapp.com/api";
  const router = useRouter();

  if (typeof window !== "undefined") {
    const admin = JSON.parse(`${localStorage.getItem("adminTokens")}`);
    // @ts-ignore
    if (admin?.accessToken) {
      router.push("/admin");
    }
  }

  const onSubmit = async (values: AdminFormIF) => {
    fetch(`${url}/admin-sessions`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem("adminTokens", JSON.stringify(data));
        dispatch(updateAdminToken(data));
        toast.success("Login Successful");
        setTimeout(() => {
          router.push("/admin");
        }, 2000);
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
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </div>
            </Form>
            <ToastContainer />
          </div>
        );
      }}
    </Formik>
  );
};

export default AdminLoginForm;
