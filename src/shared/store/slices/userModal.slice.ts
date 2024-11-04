import { RootState, User } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  openedUser?: User;
};

const initialState: InitialState = {};

export const userModalSlice = createSlice({
  name: "userModal",
  initialState,
  reducers: {
    setOpenedUser: (state, action: PayloadAction<User | undefined>) => {
      state.openedUser = action.payload;
    },
  },
});

export default userModalSlice.reducer;

export const { setOpenedUser } = userModalSlice.actions;

export const userModal = (state: RootState) => state.userModal;
