import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: string;
};

const initialState: UserState = {
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<string>) => {
      state.user = payload;
    },
    deleteUser: (state) => {
      state.user = "";
    },
  },
});
export const actions = userSlice.actions;
export default userSlice.reducer;
