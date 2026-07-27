import { useState,useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from "./pages/Login.jsx"
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // useEffect(()=>{
  //   fetch("/api")
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/home' element={<Home />}></Route>

      {/* if any path above is not found */}
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App
