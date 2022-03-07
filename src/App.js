import React from 'react'
import './App.css'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Interests from './components/Interests'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Presentation></Presentation>
        <Experience></Experience>
        <Education></Education>
        <Skills></Skills>
        <Interests></Interests>
        <Awards></Awards>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
