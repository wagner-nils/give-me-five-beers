import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { dbApi, useGetTodosQuery } from '../redux/apiSlice';

// Ssetup MSW
const server = setupServer(
  rest.get('http://localhost:3000/user/:userId/todo', (req, res, ctx) => {
    return res(ctx.json([{ id: '1', title: 'Test Todo' }]));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('dbApi tests', () => {
  it('getTodos fetches todos successfully', async () => {
    const store = configureStore({ reducer: { [dbApi.reducerPath]: dbApi.reducer } });

    const { result, waitForNextUpdate } = renderHook(() => useGetTodosQuery('user1'), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual([{ id: '1', title: 'Test Todo' }]);
  });
});


// This code is setting up a service using Redux Toolkit's Query (RTK Query), which is a powerful data fetching 
// and caching tool. Here's a step-by-step explanation of what's happening:

// Import Statements:

// createApi and fetchBaseQuery are imported from @reduxjs/toolkit/query/react, which are used to create the API 
//service and base query function.
// Type Imports:

// Todo, User, Wishlist, Bar, and Brewery types are imported. These are likely custom types defined elsewhere in your 
//project, representing the data structure of your application.
// API Service Creation (dbApi):

// dbApi is created using createApi, a Redux Toolkit function that sets up an API service.
// reducerPath: This is the name of the slice reducer, used in the Redux store.
// baseQuery: Configures the base query with a base URL (http://localhost:3000).
// tagTypes: Declares the types of tags used for invalidating and refetching data.
// Endpoints Definition:

// Various endpoints (getTodos, postTodo, etc.) are defined using the builder pattern. Each endpoint corresponds to a 
// specific API operation (GET, POST, etc.).
// Query and mutation endpoints are specified, detailing how to fetch or manipulate data.
// providesTags and invalidatesTags are used to manage cache invalidation.
// API Service Creation (breweryApi):

// A second API service, breweryApi, is created to interact with an external brewery database.
// baseQuery is set to the brewery database's URL.
// Endpoints (getRandomBrewery, getChosenBrewery) are defined for fetching brewery data.
// Exporting Hooks:

// Auto-generated hooks based on the defined endpoints (e.g., useGetTodosQuery, usePostTodoMutation) are exported for 
// use in React components.
// These hooks allow for easy interaction with the API within components, handling data fetching, and state management.
// Exporting Reducers:

// Reducers for dbApi and breweryApi are exported for inclusion in the Redux store.
// This setup illustrates a robust and scalable way to manage data fetching and state in a React/Redux application, 
// leveraging RTK Query's capabilities for efficient data synchronization and cache management.