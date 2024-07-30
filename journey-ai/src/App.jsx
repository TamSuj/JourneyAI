import './App.css';
import React from 'react';
import MainPage from './components/MainPage.jsx';
import {APIProvider} from '@vis.gl/react-google-maps';


function App() {

  return (
      <div className="App">
        {/* <APIProvider apiKey={"AIzaSyCUGy6ckR2hcn__IZ4ckW5nGvaHUAL3DJQ"} onLoad={() => console.log('Maps API has loaded.')}></APIProvider> */}
        <MainPage/>
      </div>
  );
}

export default App;
