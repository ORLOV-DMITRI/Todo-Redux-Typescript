import "./App.scss";
import { FC, useState } from "react";
import { Container } from "./components/todo/container/container";
import { TaskModal } from "./components/tasks/modal/modal";
import { UserModal } from "./components/user/ui/user-modal";
import { User } from "./components/user/user-auth/user-auth";
import { Header } from "./components/header/header";
import { useAppSelector } from "./store/hooks";
import { selectors } from "./store/duck";

const App: FC = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const handleTaskModalToggle = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const hasUser = useAppSelector(selectors.user.selectUser);
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(
    hasUser ? false : true
  );

  const handleUserModalToggle = (newState: boolean) => {
    setIsUserModalOpen(newState);
  };

  return (
    <div>
      <UserModal
        hasUser={isUserModalOpen}
        onToggleModal={handleUserModalToggle}
      >
        <User onToggleModal={handleUserModalToggle} />
      </UserModal>
      <Header hasUser={isUserModalOpen} onToggleModal={handleUserModalToggle} />
      <div className="container">
        <Container onOpenModal={handleTaskModalToggle} />
        <TaskModal
          isActive={isTaskModalOpen}
          onCloseModal={handleTaskModalToggle}
        />
      </div>
    </div>
  );
};

export default App;
