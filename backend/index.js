import express from "express"
import dotenv from "dotenv"
import connectDB from "./Config/db.js"
import mainRoute from "./Routes/mainRoute.js"
import cors from "cors"
import cookieparse from "cookie-parser"
dotenv.config()

const frontend={
    origin:"http://localhost:5173",
    credentials:true

}

const app=express()

app.use(cookieparse())
app.use(express.json())
connectDB()

app.use(cors(frontend))
app.use("/api",mainRoute)
app.get("/",(req,res)=>{
     res.send("this is backend")
})

app.listen(2000,()=>{
    console.log("server started...")
})