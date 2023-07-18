import { CommentType, TaskType } from "../global";

export type TitleFormType = {
  title: string;
};
export type DescriptionFormType = {
  description: string;
};
export type CommentFormType = {
  text: string;
};
export type UserFormType = {
  user: string;
};
export type DescriptionFormAddType = {
  task: TaskType;
};
export type DescriptionFormEditType = {
  task: TaskType;
};
export type FormAddCommentType = {
  task: TaskType;
  onFormToggle: (newState: boolean) => void;
};
export type FormEditCommentType = {
  currentComment: CommentType;
  task: TaskType;
  onToggleForm: (status: boolean) => void;
};
export type ColumnNameFormType = {
  column: string;
};
