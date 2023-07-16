import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { useSelector } from 'react-redux';

export interface ThemeState {
    theme: string
}

const initialState: ThemeState = {
    theme: "dark",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
})

export const selectTheme = createSelector(
    (state: RootState) => state.theme.theme,
    (theme: string) => theme
);

export const { setTheme } = themeSlice.actions

export const useTheme = () => useSelector(selectTheme);

export default themeSlice.reducer