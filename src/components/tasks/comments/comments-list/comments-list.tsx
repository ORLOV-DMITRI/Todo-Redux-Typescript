import { FC } from "react";
import { CommentsListType } from "../../../../types/task/task";
import { Item } from "../comment-item/comment-item";
import "./comments-list.scss";

export const List: FC<CommentsListType> = ({ task }) => {
  const hasComments: boolean = task.comments.length > 0;

  return (
    <div>
      {hasComments && (
        <ul className="comment__list">
          {task.comments.map((comment) => (
            <Item key={comment.id} task={task} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
};
