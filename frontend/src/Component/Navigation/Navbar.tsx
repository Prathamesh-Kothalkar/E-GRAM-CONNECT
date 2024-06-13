import { useContext, useEffect, useState } from "react";
import XMenu from "./Menu";
import { useNavigate } from "react-router-dom";
import { IsLoginContext } from "../../Context/IsLoginContext";

type Value = {
    isLogin:boolean,
    setIsLogin:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Navbar() {
    const {isLogin,setIsLogin}:Value =useContext(IsLoginContext)
    console.log(isLogin)
    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token")){
           setIsLogin(true)
        }
    },[isLogin])
    return <>
        <div className="w-full z-40 h-14 backdrop-blur-xl scroll-smooth bg-opacity-75 flex justify-between top-0 right-0 fixed">
            <div className="text-black font-bold text-3xl p-2">
                E-Gram
            </div>
            <div className="text-xl font-semibold">
                <ul className="flex m-0">
                    <li className="hidden md:block xl:block mt-2 px-2 cursor-pointer">Home</li>
                    <li className="hidden md:block xl:block mt-2 px-2 cursor-pointer">Projects</li>
                    {
                       isLogin?
                        <li className="hidden md:block  xl:block mt-2 px-2 cursor-pointer" onClick={()=>{navigate("/complaint")}}>Complaint</li>:
                        <li className="hidden md:block  xl:block mt-2 px-2 cursor-pointer">About</li>
                    }
                    <li><XMenu /></li>
                </ul>
            </div>
        </div>
    </>
}