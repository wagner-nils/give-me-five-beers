import React from 'react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { dbApi, useGetTodosQuery } from '../redux/apiSlice';

const server = setupServer(
  http.get('http://localhost:3000/user/:userId/todo', () => {
    return HttpResponse.json([{ id: '1', title: 'Test Todo' }]);
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('dbApi tests', () => {
  it('getTodos fetches todos successfully', async () => {
    const store = configureStore({
      reducer: {
        [dbApi.reducerPath]: dbApi.reducer,
      },
      middleware: (gdm) => gdm().concat(dbApi.middleware),
    });

    const { result, waitForNextUpdate } = renderHook(() => useGetTodosQuery('1'), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual([{ id: '1', title: 'Test Todo' }]);
  });
});

describe('dbApi create API post ToDo', () => {
  it('createTodo post todo successfully', async () => {
    const store = configureStore({
      reducer: {
        [dbApi.reducerPath]: dbApi.reducer,
      },
      middleware: (gdm) => gdm().concat(dbApi.middleware),
    });

    const { result, waitForNextUpdate } = renderHook(() => useGetTodosQuery('1'), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual([{ id: '1', title: 'Test Todo' }]);
  });

});

