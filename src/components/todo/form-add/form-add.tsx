import { FC } from "react";
import { TaskType } from "../../../types/global";
import { FormAddTaskType } from "../../../types/todo/todo";
import "./form-add.css";
import { ICONS } from "../../../constants/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { v1 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { TitleFormType } from "../../../types/form/form";
import { actions, selectors } from "../../../store/duck";

export const FormAdd: FC<FormAddTaskType> = ({ column, onCloseForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<TitleFormType>({
    mode: "all",
  });

  const dispatch = useAppDispatch();

  const user = useAppSelector(selectors.user.selectUser);

  const onSubmit: SubmitHandler<TitleFormType> = ({ title }) => {
    if (!isDirty) {
      return;
    }
    const task: TaskType = {
      id: v1(),
      title: title,
      description: "",
      comments: [],
      column: column,
      author: user,
      isActive: false,
    };
    dispatch(actions.task.addTask({ newTask: task }));
    reset();
    onCloseForm();
  };
  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      onBlur={handleSubmit(onSubmit)}
    >
      <div className="form__input">
        <textarea
          {...register("title")}
          autoFocus
          placeholder="Введите заголовок для этой карточки"
        ></textarea>
      </div>
      <div className="form__btn">
        <input type="submit" value="Добавить карточку" />
        <button onClick={onCloseForm}>{ICONS.delete()}</button>
      </div>
    </form>
  );
};
