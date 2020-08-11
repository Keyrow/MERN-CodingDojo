import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <div className="App">
        <nav className="text-center">
          <h1 className="col-sm-12">Pet Shelter</h1>
        </nav>
        <Router>
          <AllPets path="/" default />
          <OnePet path="/pet/:id" />
          <NewPet path="/pet/new" />
          <EditPet path="/pet/:id/edit" />
        </Router>
      </div>
    </div>
  );
}

export default App;
