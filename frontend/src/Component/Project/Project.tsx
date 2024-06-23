import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

export default function Project(){

    const [projects,setProjects]=useState([]);

    useEffect(()=>{
        const getData=async ()=>{
            const response=await axios.get("http://localhost:3000/api/v1/user/project")
            console.log(response.data.projects)
            setProjects(response.data.projects)
        }

        getData();
    },[])
    return <>
        <div className="p-3 mt-14 grid grid-cols-1 md:grid-cols-3">
           {
            projects.map(e=>
                <ProjectCard
                key={e._id} 
                title={e.name}
                imgsrc={e.img_src[0]}
                desc={e.description}
                status={e.status}
                budget={e.budget} 
                date={e.timeline}/>
            )
           }
        </div>
    </>
}