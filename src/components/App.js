import React from 'react';
import Header from './Header';
import Presentation from './Presentation';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Presentation></Presentation>
      </div>
    </div>
  );
}

export default App;
