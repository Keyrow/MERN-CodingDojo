import React, { useState } from 'react';
import './App.css';
import BoxDisplay from './components/BoxDisplay';
import BoxForum from './components/BoxForum';


function App() {

  const [boxes, setBoxes] = useState([{
    color: "red",
    height: "150",
    style: {
      display: "inline-block",
      border: "1px solid red",
      height: "150px"
    }
  }]);
  
  return (
    <div className="App">
      <h1>Hello, Welcome</h1>
      <p>Create some colored boxes, add height and color!</p>
      <BoxForum boxes={boxes} setBoxes={setBoxes} />
      <BoxDisplay boxes={boxes} />
    </div>
  );
}

export default App;
