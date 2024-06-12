import express from "express"
import signupBody from "../validation/signup";
import { Admin, Grivenace, PanchyatMember, Project, User } from "../db";
import {sign} from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import siginBody from "../validation/signin";
import userAuth from "../Auth/userMiddleware";
import griveanceBody from "../validation/griveance";
import cors from "cors"

const userRouter=express.Router();
userRouter.use(express.json());
// userRouter.use(cors())

userRouter.get("/",userAuth,(req,res)=>{
    res.send("Welcome from User Server "+req.userId);
})

userRouter.post("/signup",async(req,res)=>{
    const result=signupBody.safeParse(req.body);
    if(!result.success){
        res.status(411).json({
            message:"Invalid Data",
            error:result.error
        })
        return
    }
    
    const {username,name,lastName,email,phone,password}=req.body;

    const isUserExist=await User.findOne({username});
    const isAdminExist=await Admin.findOne({username});

    if(isUserExist||isAdminExist){
       res.status(211).json({
        message:"Username already Taken"
       })
       return 
    }

    const user = await User.create({
        username,
        name,
        lastName,
        email,
        phone,
        password
    })

    if(!user){
        res.status(411).json({
            message:"User not Created"
        })
        return 
    }
    const userId=user._id;
    const token=sign({userId},JWT_SECRET);

    res.status(211).json({
        message:"User Created",
        token:token
    })
})

userRouter.post("/signin",async(req,res)=>{
    const {success}=siginBody.safeParse(req.body);
    if(!success){
        res.status(401).json({
            message:"Invalid Data"
        })

        return ;
    }
    const user =await User.findOne({
        username:req.body.username,
        password:req.body.password,
    })

    if(!user){
        res.status(404).json({
            message:"User Not Found"
        })
        return ;
    }
    const userId=user._id;
    const token = sign({userId},JWT_SECRET);

    res.status(200).json({
        message:"User Authenticate Sucessfully",
        token:token
    })
})

userRouter.get("/members",async (req,res)=>{
    const members = await PanchyatMember.find({})
    res.json({
        member:members
    })
})

userRouter.get("/project",async (req,res)=>{
    const projects = await Project.find({});
    res.status(201).json({
        projects:projects.reverse()
    })
})

userRouter.post("/complaint",userAuth,async (req,res)=>{
    const {success}=griveanceBody.safeParse(req.body);
    if(!success){
        res.status(401).json({
            message:"Invalid Data"
        })
        return 
    }

    const userId=req.userId;
    const user = await User.findOne({_id:userId});

    if(!user){
        res.status(404).json({
            message:"Something went wrong"
        })
        return 
    }
    const name = user.name;
    const phone= user.phone;
    const {title,description,category,status,evidence}=req.body;

    const complaint =await Grivenace.create({
        userId,
        name,
        phone,
        title,
        description,
        category,
        status,
        evidence
    })

    if(!complaint){
        res.status(411).json({
            message:"Complaint not Added"
        })
        return 
    }

    res.status(201).json({
        message:"Complaint Added",
        complaintId:complaint._id
    })
})

userRouter.get("/complaint",userAuth,async (req,res)=>{
    const userId=req.userId;
    const complaints=await Grivenace.find({userId})
    if(!complaints){
        res.status(404).json({
            message:"Complaint Not Found"
        })
        return
    }
    res.json({
        complaint:complaints.reverse().map((complaint)=>{
            return ({
                id:complaint._id,
                title:complaint.title,
                description:complaint.description,
                status:complaint.status,
                issue_date:complaint.issue_date,
                update_date:complaint.update_date,
                evidence:complaint.evidence
            })
        })
    })
})

export default userRouter;