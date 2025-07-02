
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["Books"],
        }),
        createBook: builder.mutation({
            query: (bookdata) => ({
                url: "/books",
                method: "POST",
                body: bookdata,
            }),
        }),
        editBook: builder.mutation({
            query: ({ id, bookdata }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: bookdata,
            }),
            invalidatesTags: ["Books"],
        }),

    })
})

export const { useGetBooksQuery, useEditBookMutation, useCreateBookMutation } = baseApi