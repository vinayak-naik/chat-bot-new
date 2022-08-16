import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QuestionFormIF } from "../../models/question.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collage-enquiry-system-chatbot.herokuapp.com/api",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    addQuestion: builder.mutation<{}, QuestionFormIF>({
      query: (user) => ({
        url: "/message",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["message"],
    }),
    // updateQuestion: builder.mutation<{}, UpdateQuestionFormIF>({
    //   query: (user:any,id:string) => ({
    //     url: `/message/${id}`,
    //     method: "POST",
    //     body: user,
    //   }),
    //   // invalidatesTags: ["message"],
    // }),
  }),
});

export const { useAddQuestionMutation } = userApi;
// export const { useAddQuestionMutation, useUpdateQuestionMutation } = userApi;
