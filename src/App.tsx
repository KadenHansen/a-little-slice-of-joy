import React from 'react'
import './styles/css/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './components/Homepage/Homepage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
