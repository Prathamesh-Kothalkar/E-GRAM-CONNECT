import express from "express";
import { router } from "./routes";
import cors from "cors";
const app=express();

app.use(cors())
app.use("/api/v1",router)
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is running");
});