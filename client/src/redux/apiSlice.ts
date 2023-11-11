// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Todo, User } from '../types';

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

    markTodo: builder.mutation<Todo, any>({
      query: ({ id, type }) => ({
        url: `/todo/${id}/${type}`,
        method: 'PUT',
      }),
    }),

    getUser: builder.query<User, void>({
      query: () => '/user/654ccba8c6e9472ee1acb431',
    }),

    // todo: refactor api endpoint
    getRandomBar: builder.query<any, void>({
      query: () => '/choice/bar',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useMarkTodoMutation,
  useGetUserQuery,
  useGetRandomBarQuery,
} = dbApi;
export const dbApiReducer = dbApi.reducer;
