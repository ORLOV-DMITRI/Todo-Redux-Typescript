import { FC, useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  DescriptionFormEditType,
  DescriptionFormType,
} from "../../../../types/form/form";
import { actions } from "../../../../store/duck";

export const FormEdit: FC<DescriptionFormEditType> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<DescriptionFormType>();
  const [isEdited, setIsEdited] = useState(false);

  const handleDelete = () => {
    const description = "";
    const updatedTask = { ...task, description };
    dispatch(actions.task.updateTask(updatedTask));
  };

  const onSubmit: SubmitHandler<DescriptionFormType> = ({ description }) => {
    const updatedTask = { ...task, description };
    dispatch(actions.task.updateTask(updatedTask));
    reset();
    setIsEdited(!isEdited);
  };

  const handleCloseForm = () => {
    reset();
    setIsEdited(!isEdited);
  };
  if (isEdited) {
    return (
      <form className="description__edit" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            {...register("description")}
            defaultValue={task.description}
            className="description__textarea"
          />
        </div>
        <div>
          <button className="description__btn-done" type="submit">
            Сохранить
          </button>
          <button className="description__btn-cancel" onClick={handleCloseForm}>
            Отменить
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="description__text">
      <p onClick={() => setIsEdited(!isEdited)}>{task.description}</p>
      <div>
        <button
          className="description__btn-edit"
          onClick={() => setIsEdited(!isEdited)}
        >
          Изменить
        </button>
        <button onClick={handleDelete} className="description__btn-remove">
          Удалить
        </button>
      </div>
    </div>
  );
};
