import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar"
import FormField from './FormField';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>  {/* this is basically a callback...you can see where this "called" from in navbar*/}
      <Signup/>
      
    </div>
  );
}

export default App;