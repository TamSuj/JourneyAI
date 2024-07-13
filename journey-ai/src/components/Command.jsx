import { useState } from "react";
import LocationInput from "./LocationInput";
import GeminiResponse from './GeminiResponse.jsx';
import PeopleCount from './PeopleCount.jsx';
import DayCount from "./DayCount.jsx";
import GenerateMap from "./GenerateMap.jsx";
import ThemeOptions from "./ThemeOptions.jsx";

function Command() {
    const [location, setLocation] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [command, setCommand] = useState('');
    const [day, setDay] = useState('')
    

    const handleSubmit = async() => {
        const journeyCmd =  `List a traveling plan with at ${location} city for a group of ${numOfPeople} for ${day} and must use this JSON format look like this
        example (Please keep the same key name, do not change them):
        {
            "tripName": "Pasadena Getaway", 
            "travelers": 3, 
            "duration": 2, 
            "itinerary": 
            [
                {
                    "day": 1, 
                    "activities": 
                    [
                        {
                            "name": "Visit the Huntington Library, Art Museum, and Botanical Gardens", 
                            "type": "Culture & Nature", 
                            "duration": "9am - 12pm", 
                            "description": "Explore beautiful gardens, art exhibits, and historical manuscripts."
                        }, 

                        {
                            "name": "Dinner at The Royce at The Langham", 
                            "type": "Dining", 
                            "duration": "12:30pm - 2pm", 
                            "description": "Enjoy fine dining with stunning views at this elegant restaurant."
                        }
                    ]
                }, 
            ]
        }`;

        setCommand(journeyCmd)
        
        try {
            const coordinates = await fetchCoordinates(location); 
            if (coordinates) {
                setLocation(coordinates);
                setCommand('Generated Plan Command'); // Example command
            } else {
                setCommand('Location not found');
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };

    const fetchCoordinates = async (location) => {
        const apiKey = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${apiKey}`;

        try {
            const response = await fetch(url); //get url

            if (!response.ok) {
                throw new Error('Failed to fetch coordinates');
            }

            const data = await response.json(); //parse

            if (data.features.length > 0) {
                const coordinates = data.features[0].center;
                return {
                    center: coordinates,
                    zoom: 10 // Example zoom level
                };
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            return null;
        }

    };

    return (
        <div>
            {/*Logo*/}
            <img className={"logo-orange"} src={"logo-orange.png"} alt='journeyAI Icon'/>
            <div className={"search-parent"}>
                <div className={"w-full min-w-2/3 lg:max-w-6xl"}>
                    <LocationInput setLocation={setLocation}/>
                </div>
                <div>
                    <div className={"slide"}>
                    <ThemeOptions/>
                    </div>
                </div>
            </div>

            <div className={"trip-options"}>
                <div className={"mx-10"}>
                    <PeopleCount setNumOfPeople={setNumOfPeople}/>
                </div>
                <div className={"mx-10"}>
                    <DayCount setNumberOfDay={setDay}/>
                </div>
            </div>

            {/*Button to generate plan from input value*/}
            <div className={"flex justify-center"}>
            <button
                    className={"bg-gray-800 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded flex flex-col mb-4"}
                    onClick={handleSubmit}>Generate Plan
                </button>
            </div>

            <div className={"mx-20 flex justify-center"}>
                <GeminiResponse command={command}/>
            </div>
            {location && <GenerateMap center={location.center} zoom={location.zoom} />}

        </div>
    );
}

export default Command;

