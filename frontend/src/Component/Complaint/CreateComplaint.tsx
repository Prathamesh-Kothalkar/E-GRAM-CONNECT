import { useState } from "react";
import InputBox from "../FormComponent/InputBox";
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextareaAutosize, Typography, styled } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import Done from "../../assets/Done.gif"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateComplaint() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [value,setValue]=useState("Public");
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
                Register Your Complaint we will try to solve your issue
            </div>
            <div className=" m-4  shadow-black shadow-sm p-4 rounded-lg">
                <div className="text-xl text-center font-semibold">
                    Complaint Registration Form
                </div>
                <form action="">
                    <div className="">
                        <InputBox text={"Enter Title"} onChange={() => { }} />
                    </div>
                    <div className="flex align-middle py-4">
                        <InputLabel className="mt-5 mr-5" id="category">Category</InputLabel>
                        <Select
                            className="h-10 mt-3 p-2"
                            labelId="category"
                            value={value}
                            label="Age"
                            onChange={()=>(e:MouseEvent)=>{setValue(e.target.value)}} 
                        >
                            <MenuItem value={"Public"}>Public</MenuItem>
                            <MenuItem value={"Twenty"}>Twenty</MenuItem>
                            <MenuItem value={"XXX"}>Thirty</MenuItem>
                        </Select>
                    </div>
                    <div className="">
                        <TextareaAutosize
                            cols={30}
                            className="w-full  border border-b-5 rounded-md p-5 focus:border-blue-400"
                            placeholder="Details"
                        />
                    </div>
                    <div className="mt-4">
                        <Button
                            
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUpload />}
                        >
                            Upload Proof
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </div>
                    <div className="mt-4">
                        <Button variant="contained" onClick={()=>{setOpen(true)}} >Submit Complaint</Button>
                    </div>
                </form>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Your Complaint Sucessfully Registered
                        </Typography>
                         <img src={Done}  alt="" />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Your Complaint id : XXX
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>

    </>
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });