import express from "express"
import { createLogin, createUser } from "../AuthController/userAuth.js"


const userRoute=express.Router()

userRoute.post("/create",createUser)
userRoute.post("/login",createLogin)
export default userRoute