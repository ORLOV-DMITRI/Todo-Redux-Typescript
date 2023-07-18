import { FC } from "react";
import "./column.scss";
import { ColumnType } from "../../../types/todo/todo";
import { useAppSelector } from "../../../store/hooks";
import { Card } from "../card/card";
import { AddButton } from "../add-button/add-button";
import { selectors } from "../../../store/duck";
import { ColumnName } from "../column-name/column-name";

export const Column: FC<ColumnType> = ({ column, onOpenModal }) => {
  const filteredTasksByColumn = useAppSelector((state) =>
    selectors.task.taskByColumn(state, column)
  );

  return (
    <div className="column">
      <ColumnName currentColumn={column} tasks={filteredTasksByColumn} />
      <ul className="column__lists">
        {filteredTasksByColumn.map((task) => (
          <li className="column__item" key={task.id}>
            <Card task={task} onOpenModal={onOpenModal} />
          </li>
        ))}
      </ul>
      <AddButton column={column} />
    </div>
  );
};
