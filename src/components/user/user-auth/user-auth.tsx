import { ICONS } from "../../../constants/icons";
import "./user-auth.scss";
import { FC } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserFormType } from "../../../types/form/form";
import { UserType } from "../../../types/user/user";
import { actions } from "../../../store/duck";

export const User: FC<UserType> = ({ onToggleModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<UserFormType>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<UserFormType> = ({ user }) => {
    if (!isDirty) {
      return;
    }
    dispatch(actions.user.addUser(user));
    reset();
    onToggleModal(false);
  };

  return (
    <div className="author">
      <h2 className="author__title">Пожалуйста, укажите ваше имя</h2>
      <p className="author__description">
        Это приложение не использует Cookie, но использует ваше имя как автора
        задач и комментариев
      </p>
      <form className="author__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("user", {
            minLength: {
              value: 3,
              message: "Введите больше трёх символов",
            },
          })}
          className="author__input"
          type="text"
          placeholder="Укажите ваше имя"
          autoFocus
          autoComplete="off"
        />
        {isValid && (
          <button className="author__btn" type="submit">
            {ICONS.done()}
          </button>
        )}
      </form>
      <div>{errors?.user && <p>{errors?.user?.message || "Error!"}</p>}</div>
    </div>
  );
};
