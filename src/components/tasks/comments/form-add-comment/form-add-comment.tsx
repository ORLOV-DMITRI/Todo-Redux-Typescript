import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { v1 } from "uuid";
import { CommentType } from "../../../../types/global";
import "./form-add-comment.scss";
import {
  CommentFormType,
  FormAddCommentType,
} from "../../../../types/form/form";
import { actions } from "../../../../store/duck";

export const FormAddComment: FC<FormAddCommentType> = ({
  task,
  onFormToggle,
}) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, resetField } = useForm<CommentFormType>();
  const user = useAppSelector((state) => state.user.user);

  const onSubmit: SubmitHandler<CommentFormType> = ({ text }) => {
    const newComment: CommentType = {
      id: v1(),
      text: text,
      author: user,
    };
    dispatch(actions.task.addComment({ id: task.id, comment: newComment }));
    resetField("text");
    onFormToggle(false);
  };

  return (
    <form className="form-add" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        autoFocus
        placeholder="Напишите комментарий..."
        {...register("text")}
      />

      <button>Сохранить</button>
    </form>
  );
};
