import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface Todo {
  content: string;
}

// Define the initial state using that type
const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: state => {},
  },
});

export const { addTodo } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// useSelector
export const getTodos = (state: RootState) => state.todos;

export const todosReducer = todosSlice.reducer;
