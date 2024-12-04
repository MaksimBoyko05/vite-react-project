import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/about">Про нас</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App