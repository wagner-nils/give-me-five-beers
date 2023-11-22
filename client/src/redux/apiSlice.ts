import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo, User, Wishlist, Bar, Brewery } from '../types';

export const dbApi = createApi({
  reducerPath: 'dbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Config', 'Wishlist', 'Choice', 'Todo'],
  endpoints: builder => ({
    getTodos: builder.query<Todo[], string>({
      query: userId => `/user/${userId}/todo`,
      providesTags: ['Todo'],
    }),

    postTodo: builder.mutation<Todo, Todo>({
      query: todo => ({
        url: '/todo',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'], //? no point to send the res to redux
    }),

    markTodo: builder.mutation<Todo, {id: string | undefined; type: string}>({
      query: ({ id, type }) => ({
        url: `/todo/${id}/${type}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Todo'],
    }),

    login: builder.mutation<{userId: string}, {username: string, password: string}>({
      query: user => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
    }),

    signup: builder.mutation<{userId: string}, {username: string, password: string}>({
      query: user => ({
        url: '/signup',
        method: 'POST',
        body: user,
      }),
    }),

    getUser: builder.query<User, string>({
      query: userId => `/user/${userId}`,
      providesTags: ['Config', 'Wishlist', 'Choice', 'Todo'],
    }),

    getUserWishlist: builder.query<string[], string>({
      query: userId => `/user/${userId}/wishlist`,
      transformResponse: (response: {wishlist: string[], _id: string}[]) => {
        return response[0]['wishlist'];
      },
      providesTags: ['Wishlist'],
    }),

    getUserWishlistDetail: builder.query<Wishlist[], string>({
      query: userId => `/user/${userId}/wishlist/detail`,
      transformResponse: (response: {wishlist: Wishlist[]}[]) => {
        return response[0]['wishlist'];
      },
      providesTags: ['Wishlist'],
    }),

    addToWishlist: builder.mutation<{userId: string, id: string}, {userId: string, id: string}>({
      query: info => ({
        url: `/wishlist`,
        method: 'POST',
        body: info,
      }),
      invalidatesTags: ['Wishlist'],
    }),

    // todo: refactor api endpoint
    getRandomBar: builder.query<Bar, void>({
      query: () => '/choice/bar',
    }),

    getChosenBar: builder.query<Bar, string>({
      query: id => `/choice/bar/${id}`,
    }),

    postBeerOption: builder.mutation<{type: string, userId: string, choiceId?: string, _id: string}, {type: string, userId: string, choiceId?: string}>({
      query: ({ type, userId, choiceId }) => ({
        url: `/choice/${type}`,
        method: 'POST',
        body: {
          userId,
          choiceId,
        },
      }),
      invalidatesTags: ['Choice'],
    }),
    postConfig: builder.mutation<{userId: string, type: string, value: string, _id: string, config: {time: string}}, {userId: string, type?: string, value: string}>({
      query: config => ({
        url: `/config/${config.type}`,
        method: 'POST',
        body: config,
      }),
      invalidatesTags: ['Config'],
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
    getRandomBrewery: builder.query<Brewery, void>({
      query: () => ({
        url: '/random',
        headers: { 'Cache-Control': 'no-cache' },
      }),
      transformResponse: (response: Brewery[]) => {
        return response[0];
      },
    }),
    getChosenBrewery: builder.query<Brewery, string>({
      query: id => `${id}`,
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useMarkTodoMutation,
  useLoginMutation,
  useSignupMutation,
  useGetUserQuery,
  useGetUserWishlistQuery,
  useGetUserWishlistDetailQuery,
  useAddToWishlistMutation,
  useGetRandomBarQuery,
  useGetChosenBarQuery,
  usePostBeerOptionMutation,
  usePostConfigMutation,
} = dbApi;

export const dbApiReducer = dbApi.reducer;
export const { useGetRandomBreweryQuery, useGetChosenBreweryQuery } =
  breweryApi;
export const breweryApiReducer = breweryApi.reducer;
