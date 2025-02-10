import { createContext } from "react";
import { Authcontext } from "../types/type";


export const Usercontext=createContext<Authcontext>({
    user: null,
    setUser: ()=>{}
})