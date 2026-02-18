import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserChoose = () => {
  const nav=useNavigate()
  return (
    <div className='h-screen w-full'>
      <button className='bg-red-400 p-3' onClick={()=>{
        nav(`/register/${"buyer"}`)
      }}>Buyer</button>
      <button className='bg-red-400 p-3' onClick={()=>{
        nav(`/register/${"seller"}`)
      }}>Seller</button>
      
    </div>
  )
}

export default UserChoose