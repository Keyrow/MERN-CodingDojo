import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Menu from './components/Menu';
import Level from './components/Level';
import GameOver from './components/GameOver';
import Win from './components/Win';


function App() {

  return (
    <div className="App">
      <Router>
        <Menu path="/" />
        <Level path="/game" />
        <GameOver path="/game_over" />
        <Win path="/win" />
      </Router>
    </div>
  );
}

export default App;

/*
Cool sources used:

Created my Game title text with:
https://cooltext.com/

Whenever I needed to make an img transparent I used:
https://www.peko-step.com/en/

*/
