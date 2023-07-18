import { FC, KeyboardEvent } from "react";
import "./modal.scss";
import { TaskModalType } from "../../../types/task/task";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Container } from "../container/container";
import { actions, selectors } from "../../../store/duck";

export const TaskModal: FC<TaskModalType> = ({ isActive, onCloseModal }) => {
  const dispatch = useAppDispatch();
  const activeTask = useAppSelector(selectors.task.taskByActive);

  const handleModalClose = () => {
    if (!activeTask) {
      return;
    }
    onCloseModal();
    dispatch(actions.task.toggleActiveTask({ id: activeTask.id }));
  };
  const handleKeyEvent = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isActive) {
      if (e.code === "Escape") {
        handleModalClose();
      }
    }
  };

  return (
    <div
      tabIndex={0}
      className={isActive ? "card-modal active" : "card-modal"}
      onClick={handleModalClose}
      onKeyDown={handleKeyEvent}
    >
      <div
        className={
          isActive
            ? "card-modal__content task-modal active"
            : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {activeTask && (
          <Container task={activeTask} onCloseModal={handleModalClose} />
        )}
      </div>
    </div>
  );
};
