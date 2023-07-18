import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UpdateColumnType } from "../../../types/columns/columns";

type ColumnState = {
  columns: string[];
};

const initialState: ColumnState = {
  columns: ["TODO", "IN PROGRESS", "TESTING", "DONE"],
};

export const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    updateColumn: (state, { payload }: PayloadAction<UpdateColumnType>) => {
      const currentIndexOfDeletedColumn = state.columns.indexOf(
        payload.prevColumnName
      );
      state.columns[currentIndexOfDeletedColumn] = payload.newColumnName;
    },
  },
});
export const actions = columnSlice.actions;

export default columnSlice.reducer;
