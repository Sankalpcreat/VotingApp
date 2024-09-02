const express=require('express')
const router=express.Router();
const User=require('./../models/user');
const {jwtAuthMiddleware,generateToken}=require('./../jwt');

router.post('/signup',async(req,res)=>{
    try{
        const data=req.body

        const adminUser=await User.findOne({role:'admin'});
        if(data.role==='admin' && adminUser){
            return res.status(400).json({error:'Admin user already exists'});
        }

        if (!/^\d{12}$/.test(data.aadharCardNumber)) {
            return res.status(400).json({ error: 'Aadhar Card Number must be exactly 12 digits' });
        }

        

    }
})