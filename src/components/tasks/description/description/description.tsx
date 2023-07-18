import { FC } from "react";
import "./description.scss";
import { DescriptionType } from "../../../../types/task/task";
import { ICONS } from "../../../../constants/icons";
import { FormAdd } from "../form-add/form-add";
import { FormEdit } from "../form-edit/form-edit";

export const Description: FC<DescriptionType> = ({ task }) => {
  const hasDescription: boolean = task.description.length > 0;

  const formSelection = () => {
    return hasDescription ? <FormEdit task={task} /> : <FormAdd task={task} />;
  };
  return (
    <div className="description">
      <div className="description__info">
        {ICONS.description()}
        <h3>Описание</h3>
        <div className="description__form">{formSelection()}</div>
      </div>
    </div>
  );
};
