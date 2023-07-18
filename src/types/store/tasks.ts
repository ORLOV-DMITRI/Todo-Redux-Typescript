import { CommentType } from "../global";

export type ToggleActiveTaskType = {
  id: string;
  isActive: boolean;
};
export type NewCommentType = {
  id: string;
  comment: CommentType;
};
export type UpdatedCommentType = {
  taskId: string;
  commentId: string;
  text: string;
};
export type DeleteCommentType = {
  taskId: string;
  commentId: string;
};
