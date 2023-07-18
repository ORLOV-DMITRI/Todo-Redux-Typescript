import { FC, useState } from "react";
import { CommentItemType } from "../../../../types/task/task";
import "./comment-item.scss";
import { useAppDispatch } from "../../../../store/hooks";
import { actions } from "../../../../store/duck";
import { FormEditComment } from "../form-edit-comment/form-edit-comment";

export const Item: FC<CommentItemType> = ({ comment, task }) => {
  const dispatch = useAppDispatch();
  const [isEdited, setIsEdited] = useState(false);

  const openEditForm = () => {
    setIsEdited(true);
  };
  const handleDeleteComment = () => {
    dispatch(
      actions.task.deleteComment({ taskId: task.id, commentId: comment.id })
    );
  };

  if (isEdited) {
    return (
      <FormEditComment
        currentComment={comment}
        task={task}
        onToggleForm={setIsEdited}
      />
    );
  }

  return (
    <li className="item">
      <h5 className="item__author">Автор: {comment.author}</h5>
      <p className="item__text">{comment.text}</p>
      <div>
        <button className="item__btn" onClick={openEditForm}>
          Изменить
        </button>
        <button className="item__btn" onClick={handleDeleteComment}>
          Удалить
        </button>
      </div>
    </li>
  );
};
