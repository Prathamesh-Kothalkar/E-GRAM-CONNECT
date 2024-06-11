import { useState } from "react";
import XButton from "../FormComponent/Button";
import Heading from "../FormComponent/Heading";
import InputBox from "../FormComponent/InputBox";
import PassworInput from "../FormComponent/PasswordInput";
import BottomWarn from "../FormComponent/BottomWarn";

export default function Login(){
    const [username,setUserName]=useState();
    const [password,setPassword]=useState();

    const handleSubmit = () =>{
        if(!isValid(username,password)){
            alert("All Fields are Required")
            return 
        }

        alert("okay");

    }

    return <>
      <div className="bg-orange-400 h-screen flex justify-center">
           <div className="flex flex-col justify-center">
                    <div className="bg-orange-100 rounded-xl text-center w-80 p-2 h-max px-4">
                        <Heading title="LOGIN"/> 
                        <InputBox text={"Username"} onChange={(e:any)=>{setUserName(e.target.value)}} />
                        <PassworInput onChange={(e:any)=>{setPassword(e.target.value)}}/>
                        <XButton text={"Login"} onClick={handleSubmit}/>
                        <BottomWarn msg="Don't Have Account? " btn={"Create Here"} to={"/signup"}/>
                    </div>
            </div>
        </div>  
    </>
}

function isValid(username:any,password:any):boolean{
    if(username&&password){
        return true;
    }
    return false
}