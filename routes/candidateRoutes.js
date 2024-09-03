const express=require("express");
const router=express.Router();
const User=require('../models/user');
const {jwtAuthMiddleware,generateToken}=require('../jwt');
const Candidate=require('../models/candidate');


const checkAdminRole=async(userID)=>{
    try{
        const user=await User.findById(userID);
        if(user.role=='admin'){
            return true;
        }
    }catch(err){
        return false;
    }
}

router.post('/',jwtAuthMiddleware,async(req,res)=>{
    try{
        if(!(await checkAdminRole(req.user.id)))
            return res.status(403).json({message:"user does not have admin role"});
        const data=req.body;

        const newCandidate=new Candidate(data);

        const response=await newCandidate.save();
        console.log('data saved');
        res.status(200).json({response:response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})
