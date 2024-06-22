import React from 'react'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Competition from './pages/Competition';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Form from './pages/Form';
import Merchandise from './pages/Merchandise';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {

  const user = false

  return (
    <div className='w-screen h-screen relative overflow-x-hidden scroll-smooth'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route exact path="/form" element={user ? (<Form />) : <Navigate replace to={"/signup"} /> } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App