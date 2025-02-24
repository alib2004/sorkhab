import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About.jsx'
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
