export interface UserType{
    userId: string,
    name: string,
    email: string,
    authtoken?: string
}

export interface Authcontext{
    user: UserType|null,
    setUser: (user:UserType|null)=>void
}