import axios from "axios";
import { useEffect, useState } from "react";
import XButton from "../FormComponent/Button";
import Loader from "./Loader";

interface Complaint {
    id: string;
    title: string;
    description: string;
    category:string;
    issue_date: string;
    status: string;
    update_date: string;
    evidence: string[];
}


interface ComplaintBoxProps {
    id: string;
    title: string;
    desc: string;
    category:string;
    issue: string;
    status: string;
    update: string;
    evi: string[];
}

export default function GetComplaints() {
    const [complaints, setComplaints] = useState<Complaint[]>([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("Token Not Found");
            return;
        }

        const fetchComplaints = async () => {
            try {
                const response = await axios.get<Complaint[]>("http://localhost:3000/api/v1/user/complaint", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                const data:Complaint[]=response.data.complaint;
                setComplaints(data);
                console.log(complaints);
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        };

        fetchComplaints();
    }, []);

    return (
        <>{
            loading?
            <div className="bg-slate-200">
                <Loader/>
            </div>
            :
            <div className=" grid grid-cols-1 md:grid-cols-3 xl:grids-cols-4 bg-slate-200 transition">
            {
            complaints.map((e:Complaint) => (
                <ComplaintBox
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    desc={e.description}
                    category={e.category}
                    issue={e.issue_date}
                    status={e.status}
                    update={e.update_date}
                    evi={e.evidence}
                />))
                }
            
            </div>
        }
           
        </>
    );
}

function ComplaintBox({ id, title, desc, category, issue, status, update, evi }:ComplaintBoxProps) {
    return (
        <div className="m-4">
            {/* <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {desc}</p>
            <p>Issue Date: {issue.split("T")[0]}</p>
            <p>Status: {status}</p>
            <p>Update Date: {update}</p>
            <p>Evidence: {evi.join(", ")}</p> */}
            <div className=" hover:scale-110 transition-all h-auto p-2 shadow-black shadow-sm rounded-lg bg-amber-200">
                <div className="text-sm">
                    Complaint Id : {id.slice(0,8)}
                </div>
                <div className="">
                    Title : <span className="uppercase font-semibold text-lg">{title}</span>
                </div>
                <div className="">
                    Status: <span className="uppercase font-semibold text-lg">{status}</span>
                </div>
                <div className="">
                    Category: {category}
                </div>
                <div className="flex justify-between">
                    <div className="">
                        Issue on :{issue.split("T")[0]}
                    </div>
                    <div className="">
                         Last Update :{issue.split("T")[0]}
                    </div>
                </div>
                <XButton text={"Show Detail"} onClick={()=>{alert("Your Id: "+id+"\n Desc "+desc+"\nEvidenec: "+evi.join(","))}}/>
            </div>
        </div>
    );
}
