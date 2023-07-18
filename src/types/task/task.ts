import { CommentType, TaskType } from "../global";

export type TaskModalType = {
  isActive: boolean;
  onCloseModal: () => void;
};

export type DescriptionType = {
  task: TaskType;
};
export type CommentsListType = {
  task: TaskType;
};
export type CommentsContainerType = {
  task: TaskType;
};
export type TaskContainerType = {
  task: TaskType;
  onCloseModal: () => void;
};
export type TaskTitleType = {
  task: TaskType;
};

export type CommentItemType = {
  comment: CommentType;
  task: TaskType;
};
