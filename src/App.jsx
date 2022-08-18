import logo from './logo.svg';
import './App.css';
import Button  from './components/Button';
import InputField from './components/InputField';
import { useState } from 'react';
import TextField from './components/TextField';
import { useEffect } from 'react';
import CreateEmployee from './pages/create-employee/CreateEmployee';



function App() {

  
  return (
    <div className="App">
      
      <CreateEmployee/>
      
    </div>
  );
}

export default App;
