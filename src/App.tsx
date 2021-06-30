import React from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';  
import MessingeSent from './Components/MinMax/filter';
import Filters from './Components/Filters/Filters';
const App:React.FC=()=> {
  return (
      <div className="app">
        <div>
            <MessingeSent />  
            <Filters /> 
        </div>    
        <Contact />
      </div>
  );
}

export default App;
