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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToastContainer, toast } from "react-toastify";

const validationSchema = Yup.object({
  question: Yup.string().required("Required"),
  answer: Yup.string().required("Required"),
});

const Admin = () => {
  const router = useRouter();
  const limit = 6;
  const url = "https://collage-enquiry-system-chatbot.herokuapp.com/api";
  const [page, setPage] = useState("view");
  const [questionsList, setQuestionsList] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setskip] = useState(0);
  const [question, setQuestion] = useState<any>({});

  const initialValues = {
    question: question.question,
    answer: "",
  };

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
    fetch(`${url}/message/${question.messageId}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.messageId) {
          toast.success("Answer Added Successfully");
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
    <div className={style.container}>
      <div className={style.sidebar}>
        <ToastContainer />
        {/* <div className={style.item} onClick={() => setPage("add")}>
          Add Answer
        </div> */}
        <div
          className={style.item}
          onClick={() => {
            setPage("view");
            searchQuestion();
          }}
        >
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
                    {/* <div className={style.question}>{question.question}</div> */}

                    <TextField
                      type="text"
                      id="question"
                      label="question"
                      variant="outlined"
                      {...formik.getFieldProps("question")}
                      fullWidth
                    />
                    <ErrorMessage component={TextError} name="answer" />
                  </div>
                  <div className={style.input}>
                    <TextField
                      type="text"
                      id="answer"
                      label="Answer"
                      variant="outlined"
                      {...formik.getFieldProps("answer")}
                      fullWidth
                    />
                    <ErrorMessage component={TextError} name="answer" />
                  </div>
                  <div className={style.input}>
                    <Button type="submit" variant="contained" color="success">
                      Add Answer
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
                    {item.answer ? (
                      <Typography>{item.answer}</Typography>
                    ) : (
                      <Button
                        onClick={() => {
                          setPage("add");
                          console.log(item);
                          setQuestion(item);
                        }}
                        variant="contained"
                        color="success"
                      >
                        Add Answer
                      </Button>
                    )}
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
