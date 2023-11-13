// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Todo, User } from '../types';

// why do i use rtk?

// Define a service using a base URL and expected endpoints
export const dbApi = createApi({
  reducerPath: 'dbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    getTodos: builder.query<Todo[], string>({
      query: userId => `/user/${userId}/todo`,
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

    login: builder.mutation<any, any>({
      query: user => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
    }),

    signup: builder.mutation<any, any>({
      query: user => ({
        url: '/signup',
        method: 'POST',
        body: user,
      }),
    }),

    getUser: builder.query<User, string>({
      query: userId => `/user/${userId}`,
    }),

    // todo: refactor api endpoint
    getRandomBar: builder.query<any, void>({
      query: () => '/choice/bar',
    }),

    getChosenBar: builder.query<any, string>({
      query: id => `/choice/bar/${id}`,
    }),

    postBeerOption: builder.mutation<any, any>({
      query: ({ type, userId, choiceId }) => ({
        url: `/choice/${type}`,
        method: 'POST',
        body: {
          userId,
          choiceId,
        },
      }),
    }),

    postConfig: builder.mutation<any, any>({
      query: config => ({
        url: `/config/${config.type}`,
        method: 'POST',
        body: config,
      }),
    }),
  }),
});

// todo?: get brewery at server
export const breweryApi = createApi({
  reducerPath: 'breweryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openbrewerydb.org/v1/breweries',
  }),
  endpoints: builder => ({
    getRandomBrewery: builder.query<any, void>({
      query: () => ({
        url: '/random',
        // todo: how to prevent caching
        headers: { 'Cache-Control': 'no-cache' },
      }),
      transformResponse: (response: any) => {
        return response[0];
      },
    }),
    getChosenBrewery: builder.query<any, string>({
      query: id => `${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useMarkTodoMutation,
  useLoginMutation,
  useSignupMutation,
  useGetUserQuery,
  useGetRandomBarQuery,
  useGetChosenBarQuery,
  usePostBeerOptionMutation,
  usePostConfigMutation,
} = dbApi;
export const dbApiReducer = dbApi.reducer;

export const { useGetRandomBreweryQuery, useGetChosenBreweryQuery } =
  breweryApi;
export const breweryApiReducer = breweryApi.reducer;
