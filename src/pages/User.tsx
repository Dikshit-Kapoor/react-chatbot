import { useContext } from "react";
import { Usercontext } from "../context/Authcontext";
import { UserType } from "../types/type";


export const useUser=()=>{
    const {user,setUser}=useContext(Usercontext);
    
    const addUser=(user:UserType)=>{
        setUser(user);
    }
    const removeUser=()=>{
        setUser(null)
    }

    return {user,addUser,removeUser}

}