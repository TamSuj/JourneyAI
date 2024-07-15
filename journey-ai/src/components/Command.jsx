import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LocationInput from "./LocationInput";
import GeminiResponse from './GeminiResponse.jsx';
import PeopleCount from './PeopleCount.jsx';
import DayCount from "./DayCount.jsx";
import ThemeOptions from "./ThemeOptions.jsx";

function Command() {
    const [location, setLocation] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [command, setCommand] = useState('');
    const [day, setDay] = useState('')
    
    const navigate = useNavigate();

    const handleSubmit = async() => {
        const journeyCmd =  `List a traveling plan with at ${location} city for a group of ${numOfPeople} people for ${day} days and must use this JSON format look like this
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
        navigate('/destination', {state: {location}});
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
                    onClick={handleSubmit} >Generate Plan
            </button>
            </div>

            <div className={"mx-20 flex justify-center"}>
                <GeminiResponse command={command}/>
            </div>

        </div>
    );
}

export default Command;