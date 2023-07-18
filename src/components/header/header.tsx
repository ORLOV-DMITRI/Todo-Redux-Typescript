import { actions, selectors } from "../../store/duck";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { HeaderType } from "../../types/header/header";
import "./header.scss";
import { FC } from "react";

export const Header: FC<HeaderType> = ({ hasUser, onToggleModal }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectors.user.selectUser);

  const handleDelete = () => {
    dispatch(actions.user.deleteUser());
    onToggleModal(true);
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__logo">
            <div className="logo"></div>
          </li>
          <li className="header__author">
            <h3>{hasUser || user}</h3>
            <div className="author-icon"></div>
          </li>
          <li className="header__icon">
            <div className="exit-icon" onClick={handleDelete}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
