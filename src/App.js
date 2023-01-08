import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./componets/Nav"
import Register from './componets/Register';
import Login from './componets/Login';
import Home from './componets/Pages/Home';
import Protect from './Services/Protect';
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Protect/>} >
            <Route path='/' element={<Home/>} />
            </Route>
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
