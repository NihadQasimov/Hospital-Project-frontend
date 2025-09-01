import React from 'react'
import Layout from '../layout/layout'
import '../App.css'
import Home from './home.js'
import { BrowserRouter, Route, Routes } from 'react-router';
import Register from './register.js'
import Login from './login.js';
import Pasientform from './pasientform.js';
import Pasientlist from './pasientlist.js';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path='pasientform' element={<Pasientform/>}/>
                        <Route path='pasientlist' element={<Pasientlist/>}/>
                    </Route>
        <Route path='*' element={<div>404 Not Found</div>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
