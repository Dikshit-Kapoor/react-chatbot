import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import { UserType } from "../types/type";


export const useUser=()=>{
    const {user,setUser}=useContext(Authcontext);
    
    const addUser=(user:UserType)=>{
        setUser(user);
    }
    const removeUser=()=>{
        setUser(null)
    }

    return {user,addUser,removeUser}

}