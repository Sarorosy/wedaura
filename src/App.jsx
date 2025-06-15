import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <SmallAbout />
      <ShowCase />
      <OurProcess />
      <Faq />
      <Numbers />
      <FooterForm />
      <Toaster />
    </>
  )
}

export default App
