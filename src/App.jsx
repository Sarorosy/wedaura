import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './pages/Home/Hero'
import SmallAbout from './pages/Home/SmallAbout'
import ShowCase from './pages/Home/ShowCase'
import OurProcess from './pages/Home/OurProcess'
import Faq from './pages/Home/Faq'
import Numbers from './pages/Home/Numbers'
import FooterForm from './pages/Home/FooterForm'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import OfferModal from './components/OfferModal'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      <Toaster />
      <OfferModal />
      

    </>
  )
}

export default App
