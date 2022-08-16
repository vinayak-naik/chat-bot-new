import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Pagination,
} from "@mui/material";
import TextError from "../components/atoms/textError";
import { QuestionFormIF } from "../models/question.model";
import { useRouter } from "next/router";
import style from "../styles/pages/admin.module.css";
import { useDispatch } from "react-redux";
import { updateUserToken } from "../redux/redux-toolkit/userSlice";
import { useAddQuestionMutation } from "../redux/api-query/questionApi";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const initialValues = {
  question: "",
};

const validationSchema = Yup.object({
  question: Yup.string().required("Required"),
});

const Admin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [addQuestion] = useAddQuestionMutation();
  const limit = 6;
  const [page, setPage] = useState("add");
  const [questionsList, setQuestionsList] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setskip] = useState(0);

  if (typeof window !== "undefined") {
    const admin = JSON.parse(`${localStorage.getItem("adminTokens")}`);
    // @ts-ignore
    if (!admin?.accessToken) {
      router.push("/adminLogin");
    }
  }

  const searchQuestion = () => {
    fetch(
      `https://collage-enquiry-system-chatbot.herokuapp.com/api/messages?limit=${limit}&skip=${skip}`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestionsList(data.result);
        setTotal(Math.floor(data.total / limit) + 1);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    searchQuestion();
  }, [skip]);

  const onSubmit = async (values: QuestionFormIF) => {
    const res = await addQuestion(values);
    window.localStorage.setItem("userTokens", JSON.stringify(res));
    dispatch(updateUserToken(res));
  };
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.item} onClick={() => setPage("add")}>
          Add Answer
        </div>
        <div className={style.item} onClick={() => setPage("view")}>
          View Question
        </div>
        <div
          className={style.item}
          onClick={() => {
            localStorage.removeItem("adminTokens");
            router.push("/");
          }}
        >
          Logout
        </div>
      </div>
      {page === "add" ? (
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
                      id="question"
                      label="question"
                      variant="outlined"
                      {...formik.getFieldProps("question")}
                      fullWidth
                    />
                    <ErrorMessage component={TextError} name="question" />
                  </div>
                  <div className={style.input}>
                    <Button type="submit" variant="contained" color="success">
                      Add Question
                    </Button>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      ) : page === "view" ? (
        <div className={style.formContainer}>
          <div className={style.formBox} style={{ marginTop: "10vh" }}>
            <div
              className={style.input}
              style={{ overflow: "auto", maxHeight: "70vh" }}
            >
              {questionsList.map((item: any, index: number) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
            <Pagination
              onChange={(e, value) => setskip(value - 1)}
              count={total}
              size="small"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Admin;
