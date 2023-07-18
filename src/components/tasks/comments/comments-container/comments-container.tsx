import { FC, useState } from "react";
import { CommentsContainerType } from "../../../../types/task/task";
import { ICONS } from "../../../../constants/icons";
import "./comments-container.scss";
import { List } from "../comments-list/comments-list";
import { FormAddComment } from "../form-add-comment/form-add-comment";

export const CommentsContainer: FC<CommentsContainerType> = ({ task }) => {
  const [isOpenForm, setIsOpenFom] = useState<boolean>(false);

  const handleFormToggle = (newState: boolean) => {
    setIsOpenFom(newState);
  };
  const selectedForm = () => {
    if (isOpenForm) {
      return <FormAddComment task={task} onFormToggle={handleFormToggle} />;
    }
    return (
      <p className="comment__add" onClick={() => handleFormToggle(true)}>
        Напишите комментарий...
      </p>
    );
  };
  return (
    <div className="comment">
      <div className="comment__title">
        {ICONS.commentAdd()}
        <h3>Комментарии</h3>
      </div>
      <div className="comment__new">
        <div className="comment__form">
          <div className="comment__icon">
            <span className="comment__avatar"></span>
          </div>
          {selectedForm()}
        </div>
      </div>

      <List task={task} />
    </div>
  );
};
