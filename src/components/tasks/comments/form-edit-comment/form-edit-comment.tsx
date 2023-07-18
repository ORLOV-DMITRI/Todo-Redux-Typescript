import { FC, FocusEvent } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CommentFormType,
  FormEditCommentType,
} from "../../../../types/form/form";
import "./form-edit-comment.scss";
import { actions } from "../../../../store/duck";

export const FormEditComment: FC<FormEditCommentType> = ({
  task,
  currentComment,
  onToggleForm,
}) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, resetField } = useForm<CommentFormType>();

  const onSubmit: SubmitHandler<CommentFormType> = ({ text }) => {
    dispatch(
      actions.task.updateComment({
        taskId: task.id,
        commentId: currentComment.id,
        text: text,
      })
    );
    resetField("text");
    onToggleForm(false);
  };
  const handleReturn = () => {
    onToggleForm(false);
  };
  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    e.target.selectionStart = e.target.value.length;
  };
  return (
    <form className="form-edit" onSubmit={handleSubmit(onSubmit)}>
      <div className="comment_avatar"></div>
      <h5 className="form-edit__author">Автор: {currentComment.author}</h5>
      <div>
        <textarea
          defaultValue={currentComment.text}
          autoFocus
          onFocus={handleFocus}
          {...register("text")}
        />
      </div>
      <div>
        <button type="submit">Сохранить</button>
        <button onClick={handleReturn}>Отменить изменения</button>
      </div>
    </form>
  );
};
