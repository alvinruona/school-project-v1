import React from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/hero'
import Features from './components/features'
import Services from './components/services'
import Cta from './components/cta'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Cta />
      <Footer />
    </div>
  )
}

export default App