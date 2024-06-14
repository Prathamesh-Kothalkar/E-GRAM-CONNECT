import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Members() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/members");
                const data = response.data.member;
                console.log(data)
                setMembers(data);
            } catch (error) {
                console.error("Error fetching members:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    return (
        <>
            <div className="bg-slate-200 p-5 text-3xl font-semibold">
                Garm-Panchyat Member's
            </div>
            <div className="bg-slate-200 p-5 m-1 grid grid-cols-2 md:flex flex-wrap">
                {loading ? (
                    <LoadingSkeletons />
                ) : (
                    members.map((e:any) => <MembersCard 
                    key={e._id} 
                    name={e.name} 
                    ward={e.ward}
                    post={e.designation}
                    phone={e.phone} 
                     img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s"}/>)
                )}
            </div>
        </>
    );
}

function LoadingSkeletons() {
    return (
        <>
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className="w-auto h-auto p-3 m-4 md:m-2 rounded-md shadow-sm shadow-slate-700"
                >
                    <div className="flex justify-center">
                        <Skeleton variant="circular" width={"150px"} height={"150px"} />
                    </div>
                    <div className="text-center flex justify-center">
                        <Skeleton variant="text" height={"40px"} width={"200px"} />
                    </div>
                    <div className="text-center flex justify-center">
                        <Skeleton variant="text" height={"40px"} width={"200px"} />
                    </div>
                    <div className="text-center flex justify-center">
                        <Skeleton variant="text" height={"40px"} width={"200px"} />
                    </div>
                </div>
            ))}
        </>
    );
}

function MembersCard({ name,ward,phone,img,post }:any) {
    return (
        <div className="w-auto h-auto p-3 m-4 md:m-2 rounded-md shadow-sm shadow-slate-700 hover:scale-110 hover:bg-blue-50 transition-all">
            <div className="flex justify-center">
               
                {
                    img?
                    <img src={img} className="rounded-sm object-cover" width={"150px"} height={"150px"} />:
                    <Skeleton variant="circular" width={"150px"} height={"150px"} />
                }
            </div>
            <div className="text-center font-bold md:text-xl flex justify-center">
                {name}
            </div>
            <div className="text-center flex justify-center">
               Post : {post}
            </div>
            <div className="text-center flex justify-center">
               WARD : {ward}
            </div>
            <div className="text-center flex justify-center">
                Phone: {phone}
            </div>
        </div>
    );
}
