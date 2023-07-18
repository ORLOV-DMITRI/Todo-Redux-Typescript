import { TaskType } from "../../../types/global";
import { RootState } from "../../store";

export const selectors = {
  tasks: (state: RootState) => state.task.list,

  taskByColumn: (state: RootState, column: string) =>
    state.task.list.filter((task: TaskType) => task.column === column),

  taskByActive: (state: RootState) =>
    state.task.list.find((task: TaskType) => task.isActive === true),
};
