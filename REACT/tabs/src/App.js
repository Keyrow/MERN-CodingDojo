import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabs, setTabs] = useState([
    {
      title: "Tab 1",
      content: "Tab 1 content shows here",
      selected: true,
    },
    {
      title: "Tab 2",
      content: "Tab 2 content shows here",
      selected: false,
    },
    {
      title: "Tab 3",
      content: "Tab 3 content shows here",
      selected: false,
    }
  ])
  return (
    <div>
      <Tabs tabs={tabs} setTabs={setTabs} />
    </div>
  );
}

export default App;