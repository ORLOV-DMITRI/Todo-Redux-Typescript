import { TaskType } from "../global";

export type ContainerType = {
  onOpenModal: (newState: boolean) => void;
};
export type ColumnType = {
  column: string;
  onOpenModal: (newState: boolean) => void;
};
export type ColumnNameType = {
  currentColumn: string;
  tasks: TaskType[];
};
export type CardType = {
  task: TaskType;
  onOpenModal: (newState: boolean) => void;
};
export type AddButtonType = {
  column: string;
};
export type FormAddTaskType = {
  column: string;
  onCloseForm: () => void;
};
