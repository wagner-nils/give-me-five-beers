import { configureStore } from '@reduxjs/toolkit';

import { todosReducer } from './todosSlice';
import { configReducer } from './configSlice';
import { dbApi, dbApiReducer, breweryApi, breweryApiReducer } from './apiSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    config: configReducer,
    dbApi: dbApiReducer,
    breweryApi: breweryApiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([dbApi.middleware, breweryApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 
export type AppDispatch = typeof store.dispatch;
