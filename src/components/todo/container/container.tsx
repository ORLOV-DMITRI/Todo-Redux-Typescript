import { FC } from "react";
import "./container.scss";
import { ContainerType } from "../../../types/todo/todo";
import { useAppSelector } from "../../../store/hooks";
import { Column } from "../column/column";
import { selectors } from "../../../store/duck";

export const Container: FC<ContainerType> = ({ onOpenModal }) => {
  const columns = useAppSelector(selectors.column.selectColumn);

  return (
    <div className="todo">
      {columns.map((column) => {
        return (
          <Column key={column} column={column} onOpenModal={onOpenModal} />
        );
      })}
    </div>
  );
};
