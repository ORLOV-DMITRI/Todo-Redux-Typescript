import { FC } from "react";
import "./add-button.scss";
import { useState } from "react";
import { AddButtonType } from "../../../types/todo/todo";
import { FormAdd } from "../form-add/form-add";

export const AddButton: FC<AddButtonType> = ({ column }) => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  const handleFormState = () => {
    setIsOpenForm(!isOpenForm);
  };

  if (isOpenForm) {
    return <FormAdd column={column} onCloseForm={handleFormState} />;
  }

  return (
    <button className="todo__btn-add" onClick={handleFormState}>
      <span>Добавить карточку</span>
    </button>
  );
};
