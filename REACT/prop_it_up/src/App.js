import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      {/* Person 1 */}
      <h3><PersonCard someName={"Doe, Jane"} someAge={45} someHair={"Black"} /></h3>
      {/* Person 2 */}
      <h3><PersonCard someName={"Smith, John"} someAge={88} someHair={"Brown"} /></h3>
      {/* Person 3 */}
      <h3><PersonCard someName={"Fillmore, Millard"} someAge={50} someHair={"Brown"} /></h3>
      {/* Person 4 */}
      <h3><PersonCard someName={"Smith, Maria"} someAge={62} someHair={"Brown"} /></h3>
    </div>
  );
}

export default App;
