import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb+srv://admin:bvBSmAb6o15AInRw@cluster0.oopo9qg.mongodb.net/e-gram")

const userSchema: Schema = new Schema({
    username: { type: String, require: true },
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    password: { type: String, require: true }
});

const adminSchema: Schema = new Schema({
    username: { type: String, require: true },
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    password: { type: String, require: true }
})

const panchyatMemberSchema:Schema=new Schema({
    img_src:{type:String,require:true},
    name:{type:String,required:true},
    lastName:{type:String,required:true},
    designation:{type:String,required:true},
    ward:{type:Number,required:true},
    phone:{type:Number,required:true},
})

const projectSchema:Schema=new Schema({
    img_src:{type:[String]},
    name:{ type:String},
    description:{type:String},
    budget:{type:Number},
    timeline:{type:String},
    status:{type:String},
    links:{type:[String]}
})

const grivenaceSchema:Schema=new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    title:{type:String,required:true},
    category:{type:String,  required:true},
    description:{type:String,  required:true},
    status:{type:String, required:true},
    issue_date: {
        type: Date,
        default: Date.now
    },
    update_date:{
        type: Date,
        default: Date.now
    },
    evidence:{type:[String]}
})

const User = mongoose.model("user", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const PanchyatMember=mongoose.model("Panchayat Member",panchyatMemberSchema);
const Project = mongoose.model("Project",projectSchema);
const Grivenace=mongoose.model("Grivenace",grivenaceSchema);
export { User, Admin,PanchyatMember,Project,Grivenace}