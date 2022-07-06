// DEPENDENCIES
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './styles/css/App.css'

// COMPONENT IMPORTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './components/Homepage/Homepage'
import Gallery from './components/Gallery/Gallery'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={ <Homepage /> } />
              <Route path='/gallery' element={ <Gallery /> } />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
