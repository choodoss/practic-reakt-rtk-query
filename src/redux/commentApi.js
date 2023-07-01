import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://648f2fb475a96b664444ce4d.mockapi.io";

export const commentApi = createApi({
	reducerPath: "comments",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ["Comments"],
	endpoints: builder => ({
		getComments: builder.query({
			query: () => API_ENDPOINT,
			providesTags: ["Comments"],
		}),
		addComment: builder.mutation({
			query: comment => ({
				url: API_ENDPOINT,
				method: "POST",
				body: comment,
			}),
			invalidatesTags: ["Comments"],
		}),
		updateCommentCount: builder.mutation({
			query: ({ id, ...comment }) => ({
				url: `${API_ENDPOINT}/${id}`,
				method: "PUT",
				body: comment,
			}),
			invalidatesTags: ["Comments"],
		}),
	}),
});

export const { useAddCommentMutation, useGetCommentsQuery, useUpdateCommentCountMutation } = commentApi;
