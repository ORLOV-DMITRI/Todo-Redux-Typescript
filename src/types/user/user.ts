import { ReactNode } from "react";
export type UserType = {
  onToggleModal: (newStatus: boolean) => void;
};
export type UserModalType = {
  hasUser: boolean;
  onToggleModal: (newState: boolean) => void;
  children: ReactNode;
};
