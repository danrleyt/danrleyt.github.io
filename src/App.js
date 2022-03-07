import React from 'react'
import './App.css'
import Presentation from './components/Presentation'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <div className="container">
        <Presentation></Presentation>
        <Experience></Experience>
        <Education></Education>
        <Skills></Skills>
      </div>
    </div>
  )
}

export default App
