import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import PageOne from './components/PageOne';
import PageTwoAndThree from './components/PageTwoAndThree';
import PageFour from './components/PageFour';

function App() {
    return (
      <div className="App">
        <Router>
          <PageOne path="/home" />
          <PageTwoAndThree path="/:id" />
          <PageFour path="/pagefour" />
        </Router>
      </div>
    );
  }

export default App;
