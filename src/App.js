import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
