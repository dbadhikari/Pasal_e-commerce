import React from 'react'
import { useParams } from 'react-router-dom'
import {Formik , Form, Field} from "formik"
const Register = () => {
  const {id}=useParams()
  console.log(id)
  return (
    <div className='h-screen w-full grid grid-cols-1 md:grid-cols-2 p-20' >
            <div className='bg-green-400 hidden md:block'>hello</div>
            <div className='bg-red-400'>
      <Formik initialValues={{ name:"", email:"",password:"",role:id}}
      onSubmit={async(value)=>{
        console.log(value)
      }}
      >
      <Form className='flex flex-col gap-10'>
        <Field name="name" type="text" placeholder={id=="seller" ? "Enter Shop Name" :"Enter Name"} className="outline"/>
        <Field name="email" type="email" placeholder="Enter Email" className="outline"/>
        <Field name="password" type="password" placeholder="Enter password" className="outline"/>
          <button type="submit">Register</button>
      </Form>
      </Formik>
    </div>
    </div>
  )
}

export default Register