import { useState } from "react";
import XButton from "../FormComponent/Button";
import Heading from "../FormComponent/Heading";
import InputBox from "../FormComponent/InputBox";
import PassworInput from "../FormComponent/PasswordInput";
import BottomWarn from "../FormComponent/BottomWarn";
import XMenu from "../Navigation/Menu";

export default function Signup(){
    const [username,setUserName]=useState();
    const [name,setName]=useState();
    const [lastName,setLastName]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [password,setPassword]=useState();

    const handleSubmit = () =>{
        if(!isValid(username,password,phone,name,lastName,email)){
            alert("All Fields are Required")
            return 
        }

        alert("okay");

    }

    return <>
      <div className="bg-orange-400 h-screen flex justify-center">
           <div className="flex flex-col justify-center">
                    <div className="bg-orange-100 rounded-xl text-center w-80 p-2 h-max px-4">
                        <Heading title="SIGNUP"/> 
                        <InputBox text={"Username"} onChange={(e:any)=>{setUserName(e.target.value)}} />
                        <InputBox text={"First Name"} onChange={(e:any)=>{setName(e.target.value)}} />
                        <InputBox text={"Last Name"} onChange={(e:any)=>{setLastName(e.target.value)}} />
                        <InputBox text={"Email"} onChange={(e:any)=>{setEmail(e.target.value)}} />
                        <InputBox text={"Phone"} onChange={(e:any)=>{setPhone(e.target.value)}} />
                        <PassworInput onChange={(e:any)=>{setPassword(e.target.value)}}/>
                        <XButton text={"Sign up"} onClick={handleSubmit}/>
                        <BottomWarn msg="Already have Account ? " btn={"Login Here"} to={"/login"}/>
                    </div>
            </div>
        </div>  
    </>
}

function isValid(username:any,password:any,phone:any,name:any,lastName:any,email:any):boolean{
    if(username&&password&&phone&&name&&lastName&&email){
        return true;
    }
    return false
}