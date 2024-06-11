import { Button } from "@mui/material";

export default function XButton({text,onClick}){
    return<>
        <div className="p-3 mt-2">
          <Button variant="contained" onClick={onClick} color="success">{text}</Button>
        </div>    
    </>
}