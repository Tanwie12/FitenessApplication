import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    Themechanger: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { Themechanger } = themeSlice.actions;
export const ThemeReducer = themeSlice.reducer;
