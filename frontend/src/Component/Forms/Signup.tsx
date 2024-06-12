import { useState } from "react";
import XButton from "../FormComponent/Button";
import Heading from "../FormComponent/Heading";
import InputBox from "../FormComponent/InputBox";
import PassworInput from "../FormComponent/PasswordInput";
import BottomWarn from "../FormComponent/BottomWarn";
import XMenu from "../Navigation/Menu";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function Signup(){
    const [username,setUserName]=useState();
    const [name,setName]=useState();
    const [lastName,setLastName]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [password,setPassword]=useState();
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate();

    const handleSubmit = async () =>{
        setLoading(true);
        if(!isValid(username,password,phone,name,lastName,email)){
            toast.warn("All fields are required");
            setLoading(false)
            return 
        }
        try{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,
                name,
                lastName,
                email,
                phone:Number(phone),
                password
            })

            if(response.data.message=="Username already Taken"){
                toast.warn(response.data.message);
                setLoading(false)
                return 
            }

            const token = response.data.token
            localStorage.setItem("token",token);
            toast.success("Account Created");
            navigate("/")
            
        }
        catch(err){
            console.log(err)
            toast.error("Enter valid data Password must have 6 digit ")
            setLoading(false)
        }
        finally{
            setLoading(false);
        }
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
                        {
                            loading?<CircularProgress size={30}/>: <XButton text={"Sign up"} onClick={handleSubmit}/>
                        }
                        <BottomWarn msg="Already have Account ? " btn={"Login Here"} to={"/login"}/>
                    </div>
            </div>
        </div> 
        <ToastContainer/>
    </>
}

function isValid(username:any,password:any,phone:any,name:any,lastName:any,email:any):boolean{
    if(username&&password&&phone&&name&&lastName&&email){
        return true;
    }
    return false
}