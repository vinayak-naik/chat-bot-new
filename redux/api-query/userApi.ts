import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserLoginFormIF, UserRegisterFormIF } from "../../models/user.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collage-enquiry-system-chatbot.herokuapp.com/api",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    userLogin: builder.mutation<{}, UserLoginFormIF>({
      query: (user) => ({
        url: "/sessions",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["message"],
    }),
    userRegister: builder.mutation<{}, UserRegisterFormIF>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["message"],
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = userApi;
