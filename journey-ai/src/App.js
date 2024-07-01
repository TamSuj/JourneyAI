import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {fetchTestingLocalApiData} from './services/api.js'; // Adjust the path as necessary

function App() {
  // Initialize a state variable to hold the data
  const [data, setData] = useState(null); 

  // useEffect is a React hook that runs side effects in function components
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchTestingLocalApiData();
        setData(result); // Update the state variable with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData(); 
  }, []); // The empty array means this effect runs once when the component mounts

  return (
    <div className="App">
      <h1>Hello world, this is Journey AI</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {data ? (
        <h2>{JSON.stringify(data)}</h2> // Display the fetched data if it exists
      ) : (
        <p>Loading...</p> // Display a loading message if data is not yet available
      )}
    </div>
  );
}

export default App;
