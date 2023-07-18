import { FC, MouseEvent } from "react";
import "./card.scss";
import { CardType } from "../../../types/todo/todo";
import { ICONS } from "../../../constants/icons";
import { useAppDispatch } from "../../../store/hooks";
import { actions } from "../../../store/duck";

export const Card: FC<CardType> = ({ task, onOpenModal }) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(actions.task.deleteTask({ id: task.id }));
  };

  const handleModalOpen = () => {
    onOpenModal(true);
    dispatch(actions.task.toggleActiveTask({ id: task.id }));
  };

  const showCommentsCount = () => {
    const hasComments: boolean = task.comments.length > 0;
    if (hasComments) {
      return (
        <span>
          {ICONS.comment()} <span>{task.comments.length}</span>
        </span>
      );
    }
  };

  return (
    <div className="todo__card" onClick={handleModalOpen}>
      <div className="todo__card-info">
        <p className="todo__title">{task.title}</p>
        <button onClick={handleDeleteTask}>{ICONS.delete()}</button>
      </div>
      {showCommentsCount()}
    </div>
  );
};
