import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (endpoint) => endpoint,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
