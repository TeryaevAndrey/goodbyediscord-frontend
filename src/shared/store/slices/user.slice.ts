import { RootState } from "@/shared/types";
import { PayloadAction } from "./../../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isAuth: boolean;
};

const initialState: InitialState = {
  isAuth: true,
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
