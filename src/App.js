import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>Hello from App.js updated <strong> {name}</strong> Age={age-10}
         <br/>
         <Hello firstname={name}></Hello>        
        </div>
}

export default App;
