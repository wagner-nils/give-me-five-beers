// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Todo } from '../types';

// Define a service using a base URL and expected endpoints
export const dbApi = createApi({
  reducerPath: 'dbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/user/654ccba8c6e9472ee1acb431/todo',
    }),

    postTodo: builder.mutation<Todo, Todo>({
      query: todo => ({
        url: '/todo',
        method: 'POST',
        body: todo,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, usePostTodoMutation } = dbApi;
export const dbApiReducer = dbApi.reducer;
