import { RootState } from "@/shared/types";
import { PayloadAction } from "./../../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

const isAuthFromStorage = window.localStorage.getItem("is-auth");

type InitialState = {
  isAuth: boolean;
};

const initialState: InitialState = {
  isAuth: isAuthFromStorage === "true",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setIsAuth } = userSlice.actions;

export const user = (state: RootState) => state.user;
