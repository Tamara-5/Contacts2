import React from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';  
import Filters from './Components/Filters/Filters';
const App:React.FC=()=> {
  return (
      <div className="app">
        <div className="app1">
            <Filters /> 
        </div>    
        <Contact />
      </div>
  );
}

export default App;
