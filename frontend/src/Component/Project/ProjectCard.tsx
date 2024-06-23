import { Title } from "@mui/icons-material"
import { Button } from "@mui/material"

type Data ={
    imgsrc:string,
    title:string,
    date:string,
    desc:string,
    budget:number,
    status:string
}
export default function ProjectCard(props:Data){
    return <>
        <div className="shadow-sm shadow-black rounded-xl p-2 m-2 justify-center">
            <div className="flex justify-center">
                <img
                width={"200px"}
                height={"200px"}
                className="rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-black transition-all"
                src={"https://shorturl.at/r6jjF"} alt="" />
            </div>
            <div className="flex justify-center mt-2">
               <div className="">
                 <Title/>
               </div>
               <div className="text-xl font-semibold">
               {props.title}
               </div>
            </div>
            <div className="text-sm text-slate-600">
                Timeline : <span>{props.date}</span>
            </div>
            <div className="text-sm text-slate-600">
                Budget Allowed : <span className="text-black font-bold">₹ {props.budget}</span>
            </div>
            <div className="text-sm text-slate-600">
                Status : <span className="text-black font-bold">{props.status}</span>
            </div>
            <div className="mt-2">
                {props.desc||"Not Found"}
            </div>
            <div className="mt-3">
                <Button variant="contained" color="success">Read More</Button>
            </div>
        </div>
    </>
}