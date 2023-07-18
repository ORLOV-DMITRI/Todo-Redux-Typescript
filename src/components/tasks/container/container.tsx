import { FC } from "react";
import "./container.scss";
import { TaskContainerType } from "../../../types/task/task";
import { Title } from "../title/title";
import { Description } from "../description/description/description";
import { CommentsContainer } from "../comments/comments-container/comments-container";

export const Container: FC<TaskContainerType> = ({ task, onCloseModal }) => {
  return (
    <div className="task">
      <div className="task__container">
        <Title task={task} />
        <Description task={task} />
        <CommentsContainer task={task} />
      </div>
      <button className="task__close-btn" onClick={onCloseModal}>
        X
      </button>
    </div>
  );
};
