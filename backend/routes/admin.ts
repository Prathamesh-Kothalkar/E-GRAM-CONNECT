import express from "express"
import signupBody from "../validation/signup";
import { Admin, Grivenace, PanchyatMember, Project, User } from "../db";
import { sign } from 'jsonwebtoken'
import siginBody from "../validation/signin";
import { JWT_SECRET } from "../config";
import adminAuth from "../Auth/adminMiddleware";
import memberBody from "../validation/memberSchema";
import projectBody from "../validation/project";

const adminRouter = express.Router();
adminRouter.use(express.json());

adminRouter.get("/", adminAuth, (req, res) => {
    res.send("Welcome from Admin Server " + req.adminId);
})

adminRouter.post("/signup", async (req, res) => {
    const result = signupBody.safeParse(req.body);

    if (!result.success) {
        res.status(411).json({
            message: "Invalid Data",
            err: result.error
        })
        return
    }

    const { username, name, lastName, email, phone, password } = req.body;
    const isAdminExist = await Admin.findOne({ username })
    const isUserExist = await User.findOne({ username })
    if (isAdminExist || isUserExist) {
        res.status(200).json({
            message: "username already used"
        })
        return
    }
    const admin = await Admin.create({
        username: username,
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
    })

    if (!admin) {
        res.status(500).json({
            message: "Error while creating Admin"
        })
        return;
    }
    const adminId = admin._id;
    const token = sign({ adminId }, JWT_SECRET);

    res.status(200).json({
        message: "Admin created Successfully",
        token: token
    })
})

adminRouter.post("/signin", async (req, res) => {
    const { success } = siginBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "Invalid Data"
        })
    }

    const admin = await Admin.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (!admin) {
        res.status(404).json({
            message: "Admin Not Found"
        })
        return
    }
    const adminId = admin._id;

    const token = sign({ adminId }, JWT_SECRET);

    res.status(201).json({
        message: "Admin Authenticate Successfull",
        token: token
    })

})

adminRouter.post("/member", adminAuth, async (req, res) => {
    const { success } = memberBody.safeParse(req.body);
    console.log(req.body)
    if (!success) {
        res.status(411).json({
            message: "Invalid data"
        })
        return
    }

    const { img_src, name, lastName, designation, ward, phone } = req.body;
    const isMember = await PanchyatMember.findOne({ name, lastName, designation })
    if (isMember) {
        res.status(401).json({
            message: "Member Already Added"
        })
        return
    }

    const member = await PanchyatMember.create({
        img_src,
        name,
        lastName,
        designation,
        ward,
        phone
    })

    if (!member) {
        res.status(401).json({
            message: "Member not Added"
        })
        return
    }

    res.status(201).json({
        message: "Member Added Sucessfully",
        id: member._id
    })

})

adminRouter.get("/member", async (req, res) => {
    const members = await PanchyatMember.find({})

    res.json({
        member: members
    })

})

adminRouter.delete("/member/:id", adminAuth, async (req, res) => {
    const id = req.params.id;
    const isMember = await PanchyatMember.findOne({ _id: id });

    if (!isMember) {
        return res.json({
            message: "Member not Found"
        })
    }

    const delMember = await PanchyatMember.deleteOne({ _id: id });
    if (!delMember) {
        return res.json({
            message: "Member not deleted"
        })
    }

    return res.status(201).json({
        message: "Member is deleted"
    })
})

adminRouter.post("/addProject", adminAuth, async (req, res) => {
    const { success } = projectBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Invalid data"
        })
        return
    }
    const { img_src, name, description, budget, timeline, status, links } = req.body;

    const isProject = await Project.findOne({ name });

    if (isProject) {
        res.status(401).json({
            message: "Project already exists"
        })
        return
    }

    const project = await Project.create({
        img_src,
        name,
        description,
        budget,
        timeline,
        status,
        links
    })

    if (!project) {
        res.status(401).json({
            message: "Project not Added"
        })
        return
    }

    res.status(201).json({
        message: "Project Added",
        id: project._id
    })

})

adminRouter.get("/project", async (req, res) => {
    const projects = await Project.find({});
    res.status(201).json({
        projects: projects.reverse()
    })
})

adminRouter.delete("/project/:id", adminAuth, async (req, res) => {
    const id = req.params.id;
    const isProject = await Project.find({ _id: id });
    if (!isProject) {
        return res.json({
            message: "Project Not Found"
        })
    }

    const delProject = await Project.deleteOne({ _id: id });

    if (!delProject) {
        return res.json({
            message: "Project not removed"
        })
    }

    return res.status(201).json({
        message: "Project is Deleted"
    })
})

adminRouter.get("/complaint", adminAuth, async (req, res) => {
    const complaints = await Grivenace.find({});
    res.json({
        complaints: complaints
    })
})

export default adminRouter;