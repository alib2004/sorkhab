import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About.jsx'
import Header from './components/header/Header.jsx';
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<h1>homes</h1>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
