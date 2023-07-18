import { FC } from "react";
import "./user-modal.scss";
import { UserModalType } from "../../../types/user/user";

export const UserModal: FC<UserModalType> = ({
  children,
  hasUser,
  onToggleModal,
}) => {
  const handleModalToggle = () => {
    onToggleModal(hasUser);
  };
  return (
    <div
      className={hasUser ? "card-modal active" : "card-modal"}
      onClick={handleModalToggle}
    >
      <div
        className={
          hasUser ? "card-modal__content active" : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
