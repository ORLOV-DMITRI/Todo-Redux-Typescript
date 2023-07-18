import { FC, FocusEvent, useState } from "react";
import { TaskTitleType } from "../../../types/task/task";
import { ICONS } from "../../../constants/icons";
import "./title.scss";
import { useAppDispatch } from "../../../store/hooks";
import { TitleFormType } from "../../../types/form/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { actions } from "../../../store/duck";

export const Title: FC<TaskTitleType> = ({ task }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<TitleFormType>({
    mode: "all",
  });

  const [isOpenFom, setIsOpenForm] = useState(false);

  const handleToggleForm = () => {
    setIsOpenForm(!isOpenFom);
  };

  const onSubmit: SubmitHandler<TitleFormType> = ({ title }) => {
    if (!isDirty) {
      return;
    }
    const updatedTask = { ...task, title };
    dispatch(actions.task.updateTask(updatedTask));
    reset();
    handleToggleForm();
  };

  const handleTextSelect = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();

  const formSelection = () => {
    if (isOpenFom) {
      return (
        <form
          className="title__form"
          onSubmit={handleSubmit(onSubmit)}
          onBlur={handleSubmit(onSubmit)}
        >
          <input
            className="title__input"
            {...register("title")}
            type="text"
            defaultValue={task.title}
            onFocus={handleTextSelect}
            autoFocus
          />
        </form>
      );
    }
    return (
      <h3 className="title__text" onClick={handleToggleForm}>
        {task.title}
      </h3>
    );
  };
  return (
    <div className="title">
      {ICONS.title()}
      {formSelection()}
      <div className="title__info">
        <div className="title__status">
          В колонке:<h4>{task.column}</h4>
        </div>
        <div className="title__author">
          Автор:<h4>{task.author}</h4>
        </div>
      </div>
    </div>
  );
};
