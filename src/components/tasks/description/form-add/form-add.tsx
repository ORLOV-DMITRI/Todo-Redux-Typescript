import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../../store/hooks";
import {
  DescriptionFormAddType,
  DescriptionFormType,
} from "../../../../types/form/form";
import { actions } from "../../../../store/duck";

export const FormAdd: FC<DescriptionFormAddType> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<DescriptionFormType>();

  const onSubmit: SubmitHandler<DescriptionFormType> = ({ description }) => {
    const updatedTask = { ...task, description };
    dispatch(actions.task.updateTask(updatedTask));
    reset();
  };

  return (
    <form
      className="description__add"
      onSubmit={handleSubmit(onSubmit)}
      autoFocus
    >
      <textarea
        className="description__textarea"
        {...register("description")}
        placeholder="Добавить более подробное описание"
        autoFocus
      ></textarea>
      <div>
        <button type="submit">Сохранить</button>
      </div>
    </form>
  );
};
