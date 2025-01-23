import { createContext } from "react";
import { UserType } from "../types/type";

interface Authcontext{
    user: UserType|null,
    setUser: (user:UserType|null)=>void
}

export const Authcontext=createContext<Authcontext>({
    user: null,
    setUser: ()=>{}
})