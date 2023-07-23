import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import errorReducer from './slices/dataNotFoundSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
