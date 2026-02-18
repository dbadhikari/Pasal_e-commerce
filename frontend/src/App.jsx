import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UserChoose from './pages/UserChoose'
import Blog from './pages/Blog'
import Product from './pages/Product'
import Admin from './pages/Admin'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/register/:id"element={<Register/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/select"element={<UserChoose/>}/>
        <Route path="/admin"element={<Admin/>}/>
        
      </Routes>
    </div>
  )
}

export default App