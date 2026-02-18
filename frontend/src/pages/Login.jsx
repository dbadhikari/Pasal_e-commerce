import React from 'react'
import {Formik , Form, Field} from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const nav=useNavigate()
  return (
       <div className='h-screen w-full grid grid-cols-1 md:grid-cols-2 p-20' >
            <div className='bg-green-400 hidden md:block'>hello</div>
            <div className='bg-red-300'>
              <Formik initialValues={{ email:"",password:"",}}
            onSubmit={async(value)=>{
              console.log(value)
              try {
                const req=await axios.post("http://localhost:2000/api/user/login",value,{withCredentials: true})
                console.log(req.data.message)
                localStorage.setItem("token",req.data.token)
                nav("/")
                
              } catch (error) {
                console.log(error.response.data.message)
                toast(error.response?.data?.message || "Something went wrong")
              }
            }}
            >
            <Form className='flex flex-col gap-10'>
              <Field name="email" type="email" placeholder="Enter Email" className="outline"/>
              <Field name="password" type="password" placeholder="Enter password" className="outline"/>
                <button  type="submit">Login</button>
            </Form>
            
            </Formik>
            </div>
            <ToastContainer/>
          </div>
    
  )
}

export default Login