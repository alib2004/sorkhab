import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About.jsx'
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
import Whishlists from './pages/wishlists/Wishlists.jsx';
import Footer from './components/footer/Footer.jsx';
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
        <Route path='/wishlist' element={<Whishlists/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
