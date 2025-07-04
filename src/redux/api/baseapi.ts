
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://bookserver-chi.vercel.app/api" }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["Books"],
        }),
        getBookById: builder.query({
            query: (id: string) => `/books/${id}`
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
                method: "PUT",
                body: bookdata,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: builder.mutation({
            query: (id: string) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
        getBorrow: builder.query({
            query: () => "/borrow",
            providesTags: ["Books"],
        }),
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData,
            }),
            invalidatesTags: ["Books"],
        }),

    })
})

export const { useGetBooksQuery, useEditBookMutation, useCreateBookMutation, useGetBookByIdQuery, useDeleteBookMutation, useGetBorrowQuery , useBorrowBookMutation} = baseApi