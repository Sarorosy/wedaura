import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './pages/Home/Hero'
import SmallAbout from './pages/Home/SmallAbout'
import ShowCase from './pages/Home/ShowCase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <SmallAbout />
      <ShowCase />
    </>
  )
}

export default App
