import { TextField } from "@mui/material";

export default function InputBox({text,onChange}){
    return <>
        <div className="py-4">
            <TextField className="w-full h-8  m-2" onChange={onChange} variant="outlined" label={text} color="primary"></TextField>
        </div>
    </>
}