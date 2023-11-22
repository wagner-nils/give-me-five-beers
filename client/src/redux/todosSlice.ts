import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { useAppSelector } from './hooks';
import { Todo } from '../types';

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },

    addTodo: (state, action: PayloadAction<Todo>) => {
      return [...state, action.payload];
    },

    editTodoStatus: (state, action: PayloadAction<{ id?: string, type: string }>) => {
      const { id, type } = action.payload;

      return state.map(todo => {
        if (todo._id === id) {
          return { ...todo, status: type };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, addTodo, editTodoStatus } = todosSlice.actions;

export const getTodos = () => useAppSelector(state => state.todos);

export const todosReducer = todosSlice.reducer;
