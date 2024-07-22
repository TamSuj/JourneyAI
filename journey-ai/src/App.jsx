import './App.css';
import React from 'react';
import Command from './components/Command';


function App() 
{
    
  return (
      <div className="App">
          <div className="text-center landing-margin">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Plan your trip in one
                  click</h1>
              <p className="mx-4 mt-6 text-xs leading-4 text-gray-600 sm:text-base">Let us help you generate the perfect plan for the trip
                  by simply entering your destination, number of travelers, and days.</p>
              <img className="landing-icon" src={"notion-icon.png"} alt='journeyAI Icon'/>
          </div>

           <div>
            <Command/>
           </div>
      </div>
  );
}

export default App;
