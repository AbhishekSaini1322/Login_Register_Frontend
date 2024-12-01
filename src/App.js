import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Update from './Components/Update'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
         <Route path='/update' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
