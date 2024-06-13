import { ReactNode, createContext, useState } from "react";

type Value = {
    isLogin:boolean,
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

type ChildProp={
    children:ReactNode;
}

export const IsLoginContext = createContext<Value | undefined>(undefined);

export const IsLoginProvider=({children}:ChildProp)=>{
    const [isLogin,setIsLogin]=useState(false);

    return (
        <IsLoginContext.Provider value={{isLogin,setIsLogin}}>
            {children}
        </IsLoginContext.Provider>
    )
}