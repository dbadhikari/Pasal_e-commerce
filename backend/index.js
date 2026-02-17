import express from "express"
import dotenv from "dotenv"
import connectDB from "./Config/db.js"
dotenv.config()


const app=express()
app.use(express.json())
connectDB()
app.get("/",(req,res)=>{
     res.send("this is backend")
})

app.listen(2000,()=>{
    console.log("server started...")
})