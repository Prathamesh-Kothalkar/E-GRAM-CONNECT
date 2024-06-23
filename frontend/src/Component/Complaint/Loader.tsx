import { Skeleton } from "@mui/material"

export default function Loader(){
    return <>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grids-cols-4">
            <LoaderBody/>
            <LoaderBody/>
            <LoaderBody/>
            <LoaderBody/>
        </div>
    </>
}

function LoaderBody(){
    return <>
    <div className="m-5 p-3 rounded  shadow-sm shadow-black">
        <Skeleton variant="text" className="p-2"/>
        <Skeleton variant="text" className="p-2"/>
        <Skeleton variant="text" className="p-2"/>
        <Skeleton variant="text" className="p-2"/>
        <Skeleton variant="rectangular" width={"200px"} height={"40px"} className="p-2"/>
    </div>
    </>
}