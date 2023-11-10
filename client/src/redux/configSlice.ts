import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Config } from '../types';

import { useAppSelector } from './hooks';

// Define a type for the slice state
const initialState: Config = {
  time: '17:00',
  homePage: '',
};

export const configSlice = createSlice({
  name: 'config',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        time: action.payload,
      };
    },
    setHomePage: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        homePage: action.payload,
      };
    },
  },
});

export const { setTime, setHomePage } = configSlice.actions;

export const getHomePageType = () =>
  useAppSelector(state => state.config.homePage);

export const getTime = () => useAppSelector(state => state.config.time);
export const configReducer = configSlice.reducer;
