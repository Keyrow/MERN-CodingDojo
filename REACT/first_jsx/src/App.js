// First React with JSX
// Create a create-react-app
// Use JSX to display "Hello Dojo"
// Use JSX to display a todo list

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
        <p>Made by: Song Kim</p>
      </header>
    </div>
  );
}

export default App;
