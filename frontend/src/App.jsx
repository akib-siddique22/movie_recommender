import { Button } from '@chakra-ui/react'
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import ColdStart from './pages/coldStart';
import HybridFilter from './pages/hybridFilter';
import UserInput from './pages/userInput';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/input' element={<UserInput />} />
      <Route path='/movies/cold-start' element={<ColdStart />} />
      <Route path='/movies/hybrid-filtering' element={<HybridFilter />} />
      </Routes>
    </Router>
    </>
  )
}

export default App



