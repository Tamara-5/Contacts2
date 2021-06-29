import React from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';  
import MessingeSent from './Components/MinMax/filter';
import Button from 'react-bootstrap/Button'

const App:React.FC=()=> {
  return (
      <div className="app">
        <div>
            {/* <MessingeSent />  
            <Button variant="secondary">Secondary</Button>{' '} */}
        </div>    
        <Contact />
      </div>
  );
}

export default App;
