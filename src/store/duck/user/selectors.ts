import { RootState } from "../../store";

export const selectors = {
  selectUser: (state: RootState) => state.user.user,
};
