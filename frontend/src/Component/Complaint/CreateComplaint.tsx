import { useState, ChangeEvent } from "react";
import InputBox from "../FormComponent/InputBox";
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextareaAutosize, Typography, styled } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import Done from "../../assets/Done.gif";
import axios from "axios";

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
    const [value, setValue] = useState("Public");
    const [title, setTitle] = useState("");
    const [desc, setDes] = useState("");
    const [evidence, setEvidence] = useState<string[]>([]);
    const [complaintId,setComplaintId]=useState();
    const handleSubmit = async () => {
        const arr = ["fdf", "fdvdf", "ef"];
        setEvidence(arr);
        console.log(value + "" + title + "" + desc + "" + evidence);
        
        
        const response = await axios.post(
            "http://localhost:3000/api/v1/user/complaint",
            {
                title,
                description: desc,
                category: value,
                status: "open",
                evidence
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        );
        setComplaintId(response.data.complaintId)
        setOpen(true);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    Register Your Complaint we will try to solve your issue
                </div>
                <div className=" m-4 shadow-black shadow-sm p-4 rounded-lg">
                    <div className="text-xl text-center font-semibold">
                        Complaint Registration Form
                    </div>
                    <form>
                        <div className="">
                            <InputBox text={"Enter Title"} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                        </div>
                        <div className="flex align-middle py-4">
                            <InputLabel className="mt-5 mr-5" id="category">Category</InputLabel>
                            <Select
                                className="h-10 mt-3 p-2"
                                labelId="category"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            >
                                <MenuItem value={"Public"}>Public</MenuItem>
                                <MenuItem value={"Sanitation"}>Sanitation</MenuItem>
                                <MenuItem value={"Infrastructure"}>Infrastructure</MenuItem>
                            </Select>
                        </div>
                        <div className="">
                            <TextareaAutosize
                                cols={30}
                                className="w-full border border-b-5 rounded-md p-5 focus:border-blue-400"
                                placeholder="Details"
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDes(e.target.value)}
                            />
                        </div>
                        <div className="mt-4">
                            <Button
                                component="label"
                                variant="contained"
                                startIcon={<CloudUpload />}
                            >
                                Upload Proof
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </div>
                        <div className="mt-4">
                            <Button variant="contained" onClick={handleSubmit}>Submit Complaint</Button>
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
                                Your Complaint Successfully Registered
                            </Typography>
                            <img src={Done} alt="" />
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Your Complaint id: {complaintId}
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    );
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
