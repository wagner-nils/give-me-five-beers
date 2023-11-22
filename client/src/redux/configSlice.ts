import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Config } from '../types';

import { useAppSelector } from './hooks';

const initialState: Config = {
  userId: '',
  time: '17:00',
  homePage: '',
  choice: {
    type: '',
    choiceId: '',
    id: '',
  },
};

export const configSlice = createSlice({
  name: 'config',
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
    setChoice: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        choice: { ...state.choice, ...action.payload },
      };
    },
    setUserId: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        userId: action.payload,
      };
    },
  },
});

export const { setTime, setHomePage, setChoice, setUserId } =
  configSlice.actions;

export const getHomePageType = () =>
  useAppSelector(state => state.config.homePage);

export const getTime = () => useAppSelector(state => state.config.time);
export const getChoice = () => useAppSelector(state => state.config.choice);
export const getUserId = () => useAppSelector(state => state.config.userId);

export const configReducer = configSlice.reducer;
