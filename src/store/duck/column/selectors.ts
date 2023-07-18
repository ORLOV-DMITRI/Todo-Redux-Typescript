import { RootState } from "../../store";

export const selectors = {
  selectColumn: (state: RootState) => state.column.columns,
};
