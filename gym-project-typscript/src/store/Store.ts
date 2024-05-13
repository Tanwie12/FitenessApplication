import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "./ThemeSlicer";


// Here is a reference snippet of code from client\src\components\Drawerbar.jsx:    

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
  devTools: true,
});
