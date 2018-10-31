import React, { useState } from 'react';
import './App.css';

export default function App(props) {
  const [state, setState] = useState('hi');
  const toggle = () => {
    setState('hello');
  }
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={toggle}>Button</button>
    </div>
  );
}
