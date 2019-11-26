import React from 'react';
import Header from './Header';
import Presentation from './Presentation';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Awards from './Awards';
import Interests from './Interests';
import Contact from './Contact';

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
  );
};

export default App;
