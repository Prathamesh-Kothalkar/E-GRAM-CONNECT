
interface Complaint {
    id:string,
    name:string,
    phone:string
    title:string,
    desc:string,
    issue:string,
    update:string,
    status:string,
    evidence:string[],
}
export default function DetailComplaint({id,name,phone,title,desc,issue,update,status,evidence}:Complaint){
    return <>
        {
            id
        }
    </>
}