import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface QueryById {
  id: string;
}

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: () => ({}),
});
