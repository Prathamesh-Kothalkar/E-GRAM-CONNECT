import { useContext, useState } from "react";
import XButton from "../FormComponent/Button";
import Heading from "../FormComponent/Heading";
import InputBox from "../FormComponent/InputBox";
import PassworInput from "../FormComponent/PasswordInput";
import BottomWarn from "../FormComponent/BottomWarn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { IsLoginContext } from "../../Context/IsLoginContext";


export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {setIsLogin}:any=useContext(IsLoginContext);
    const handleSubmit = async () => {
        setLoading(true)
        if (!isValid(username, password)) {
            toast.warning("All Fields are Required");
            setLoading(false)
            return
        }


        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username: username,
                password: password
            })
            const token: string = response.data.token;
            localStorage.setItem("token", token);
            toast.success(response.data.message);
            setIsLogin(true)
            navigate("/")
        }
        catch (err: any) {
            if (err.response && err.response.status === 401) {
                toast.error("Username and Password Invalid");
            }
            if (err.response && err.response.status === 404) {
                toast.error("User Not Found");
            }
        }
        finally{
            setLoading(false)
        }


    }

    return <>
        <div className="bg-orange-400 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-orange-100 rounded-xl text-center w-80 p-2 h-max px-4">
                    <Heading title="LOGIN" />
                    <InputBox text={"Username"} onChange={(e: any) => { setUserName(e.target.value) }} />
                    <PassworInput onChange={(e: any) => { setPassword(e.target.value) }} />
                        {
                            loading?<CircularProgress className="mt-3" />: <XButton text={"Login"} onClick={handleSubmit} />
                        }
                  
                    <BottomWarn msg="Don't Have Account? " btn={"Create Here"} to={"/signup"} />
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}

function isValid(username: any, password: any): boolean {
    if (username && password) {
        return true;
    }
    return false
}