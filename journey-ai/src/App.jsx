import './App.css';
import React from 'react';
import { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState('');
  
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
      <div className="App">
        <h1>JourneyAI</h1>
        <h1>{!data ? "Loading..." : data}</h1>
      </div>
  );
}

export default App;
