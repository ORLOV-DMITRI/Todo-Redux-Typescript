import { FocusEvent, FC, useState } from "react";
import "./column-name.scss";
import { ColumnNameType } from "../../../types/todo/todo";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ColumnNameFormType } from "../../../types/form/form";
import { actions, selectors } from "../../../store/duck";

export const ColumnName: FC<ColumnNameType> = ({ currentColumn, tasks }) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector(selectors.column.selectColumn);

  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleToggleForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  const handleTextSelect = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<ColumnNameFormType>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<ColumnNameFormType> = (columnName) => {
    const hasRepeatsColumnName = columns.some(
      (oldColumnName) => oldColumnName === columnName.column
    );
    if (hasRepeatsColumnName) {
      return;
    }
    if (!isDirty) {
      return;
    }

    // eslint-disable-next-line array-callback-return
    tasks.map((task) => {
      const updatedTask = { ...task, ...columnName };
      dispatch(actions.task.updateTask(updatedTask));
    });
    dispatch(
      actions.column.updateColumn({
        prevColumnName: currentColumn,
        newColumnName: columnName.column,
      })
    );
    reset();
    handleToggleForm();
  };

  if (isOpenForm) {
    return (
      <form
        className="status"
        onSubmit={handleSubmit(onSubmit)}
        onBlur={handleSubmit(onSubmit)}
        autoFocus
      >
        <input
          autoFocus
          autoComplete="off"
          onFocus={handleTextSelect}
          className="status__input"
          defaultValue={currentColumn}
          type="text"
          {...register("column")}
        />
      </form>
    );
  }
  return (
    <h3 className="status__title" onClick={handleToggleForm}>
      {currentColumn}
    </h3>
  );
};
