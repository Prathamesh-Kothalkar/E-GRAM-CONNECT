import {  } from "@mui/material";
import XButton from "../FormComponent/Button";
import { useState } from "react";
import CreateComplaint from "./CreateComplaint";
import GetComplaints from "./GetComplaints";





export default function Complaint() {
    const [showComplaint, setShowCoplaint] = useState(true);
    return <>
        <div className="py-14 px-5">
            <div className="flex justify-start">
                <XButton text={"My Complaints"} onClick={() => { setShowCoplaint(true) }} />
                <XButton text={"Create Complaint"} onClick={() => { setShowCoplaint(false) }} />
            </div>
            {
                showComplaint ?
                    <GetComplaints/> :
                    <CreateComplaint/>
            }
        </div>
    </>
}






