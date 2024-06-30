import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import About  from './components/About'
import Projects from './components/Projects'
import ContactForm from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
