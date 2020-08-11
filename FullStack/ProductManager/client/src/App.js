import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <nav className="text-center">
        <h1 className="col-sm-12">Product Manager</h1>
        <Link to="/">Dashboard</Link> |&nbsp;
        <Link to="/product/new">New Product</Link>
      </nav>
      <Router>
        <AllProducts path="/" default />
        <OneProduct path="/product/:id" />
        <NewProduct path="/product/new" />
        <EditProduct path="/product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
