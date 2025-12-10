import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-commerceproject-backend-8e9t.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (endpoint) => endpoint,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
