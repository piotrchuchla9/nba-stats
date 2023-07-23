import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { useSelector } from 'react-redux';

export interface ErrorState {
    error: boolean;
}

const initialState: ErrorState = {
    error: false,
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload;
        },
    },
})

export const selectError = createSelector(
    (state: RootState) => state.error.error,
    (error: boolean) => error
);

export const { setError } = errorSlice.actions

export const useError = () => useSelector(selectError);

export default errorSlice.reducer