import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import coldStart from './pages/coldStart';
import hybridFilter from './pages/hybridFilter';
import userInput from './pages/userInput';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>hi</Button>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/input' element={<userInput />} />
      <Route path='/movies/cold-start' element={<coldStart />} />
      <Route path='/movies/hybrid-filtering' element={<hybridFilter />} />
      </Routes>
    </>
  )
}

export default App



