import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getStorage } from "../../utils";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getStorage("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});
