import generateToken from "../Config/token.js";
import User from "../Models/userSchema.js";
import bcrypt from "bcrypt"

export const createUser=async(req,res)=>{
    try {
        const{name,email,password,role}=req.body
        if(!name || !email || !password || !role){
            return res.status(400).json({message:"Enter All Details"})
        }
        const isExist=await User.findOne({email})
        if(isExist){
            return res.status(400).json({message:"Email already used"})
        }
        const hasPassword=await bcrypt.hash(password,10)
        console.log(hasPassword)

        const newUser= new User({
            name,
            email,
            password:hasPassword,
            role
        })
        newUser.save()
        res.status(201).json({message:"Account Created Sucessfully "})
    } catch (error) {
        res.status(400).json({message:"Error Creating User"})
    }
}


export const createLogin=async(req,res)=>{
    try {
        const{name,email,password}=req.body
        if( !email || !password ){
            return res.status(400).json({message:"Enter All Details"})
        }
        const isExist=await User.findOne({email})
        if(!isExist){
            return res.status(400).json({message:"Email Not Found"})
        }
       const isMatch=await bcrypt.compare(password,isExist.password)
        if(!isMatch){
            return res.status(400).json({message:"Password Wrong"})
        }
        const token=generateToken(isExist._id)
        
      res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:7*24*60*60*1000
        })
       
        res.status(201).json({message:" Login Sucessfully " , user:isExist,token})
    } catch (error) {
        res.status(400).json({message:"Error login User"})
    }
}

