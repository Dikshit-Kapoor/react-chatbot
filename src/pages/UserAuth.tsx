import { UserType } from "../types/type";
import { useUser } from "./User";

export const UserAuth = () => {
    const { user, addUser, removeUser } = useUser();
  
    const login = (user: UserType) => {
      addUser(user);
    };
  
    const logout = () => {
      removeUser();
    };
  
    return { user, login, logout };
  };
  