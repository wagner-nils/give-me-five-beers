import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { Todo } from '../types';

// Define a type for the slice state
const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },

    addTodo: (state, action: PayloadAction<Todo>) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodos, addTodo } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// useSelector
export const getTodos = (state: RootState) => state.todos;

export const todosReducer = todosSlice.reducer;
