import { ClassNames } from "@emotion/react"
import { Skeleton } from "@mui/material"

export default function Members(){
    return <>
        <div className="bg-slate-200 p-5 text-3xl font-semibold">
            Garm-Panchyat Member's
        </div>
        <div className="bg-slate-200 p-5 m-1 grid grid-cols-2  md:flex flex-wrap">
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
            <MembersCard/>
        </div>
    </>
}

function MembersCard(){
    return <>
        <div className="w-auto h-auto p-3 m-4  md:m-2 rounded-md shadow-sm shadow-slate-700 hover:scale-110 hover:bg-blue-50 transition-all ">
            <div className="flex justify-center">
            <Skeleton variant="circular" width={"150px"} height={"150px"}/>
            </div>
            <div className="text-center flex justify-center">
            <Skeleton variant="text" height={"40px"} width={"200px"}></Skeleton>
            </div>
            <div className="text-center flex justify-center">
            <Skeleton variant="text" height={"40px"} width={"200px"}></Skeleton>
            </div>
            <div className="text-center flex justify-center">
            <Skeleton variant="text" height={"40px"} width={"200px"}></Skeleton>
            </div>
        </div>
    </>
}