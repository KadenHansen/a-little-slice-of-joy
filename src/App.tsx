import React from 'react'
import './styles/css/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='container'>
          <Homepage />
        </div>
      <Footer />
    </div>
  )
}

export default App
