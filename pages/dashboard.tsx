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
import style from "../styles/pages/dashboard.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToastContainer, toast } from "react-toastify";

const initialValues = {
  question: "",
};

const validationSchema = Yup.object({
  question: Yup.string().required("Required"),
});

const Dashboard = () => {
  const router = useRouter();
  const limit = 6;

  const [total, setTotal] = useState(0);
  const [skip, setskip] = useState(0);

  const url = "https://collage-enquiry-system-chatbot.herokuapp.com/api";

  const [page, setPage] = useState("add");
  const [questionsList, setQuestionsList] = useState([]);

  if (typeof window !== "undefined") {
    const user = JSON.parse(`${localStorage.getItem("userTokens")}`);
    // @ts-ignore
    if (!user?.accessToken) {
      router.push("/login");
    }
  }

  const searchQuestion = (value: string) => {
    fetch(`${url}/messages?search=${value}`)
      .then((response) => response.json())
      .then((data) => setQuestionsList(data.result))
      .catch((err) => console.error(err));
  };

  const fetchAllQuestions = () => {
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
    fetchAllQuestions();
  }, [skip]);

  const onSubmit = async (values: QuestionFormIF) => {
    fetch(`${url}/message`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Question Added Successfully");
      })
      .catch((error) => {
        toast.error("Failed");
        console.error("Error:", error);
      });
  };
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.item} onClick={() => setPage("add")}>
          Add question
        </div>
        <div className={style.item} onClick={() => setPage("search")}>
          Search question
        </div>
        <div
          className={style.item}
          onClick={() => {
            setPage("all");
            fetchAllQuestions();
          }}
        >
          All question
        </div>
        <div
          className={style.item}
          onClick={() => {
            localStorage.removeItem("userTokens");
            router.push("/login");
          }}
        >
          Logout
        </div>
        <ToastContainer />
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
      ) : page === "search" ? (
        <div className={style.formContainer}>
          <div className={style.formBox}>
            <div className={style.input}>
              <TextField
                type="text"
                id="question"
                label="question"
                variant="outlined"
                fullWidth
                onChange={(e) => searchQuestion(e.target.value)}
              />
            </div>
            <div className={style.input}>
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
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Dashboard;
