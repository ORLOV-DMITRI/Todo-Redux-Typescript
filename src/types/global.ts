export type CommentType = {
  id: string;
  author: string;
  text: string;
};
export type TaskType = {
  id: string;
  title: string;
  description: string;
  comments: CommentType[];
  column: string;
  author: string;
  isActive: boolean;
};
