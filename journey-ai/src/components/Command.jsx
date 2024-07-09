import { useState } from "react";
import LocationInput from "./LocationInput";
import GeminiResponse from './GeminiResponse.jsx';
import PeopleCount from './PeopleCount.jsx';
import DayCount from "./DayCount.jsx";
import GenerateMap from "./GenerateMap.jsx"

function Command() {
    const [location, setLocation] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [command, setCommand] = useState('');
    const [day, setDay] = useState('')
    

    const handleSubmit = () => {
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
        
    };

    return (
        <div>
            <LocationInput setLocation={setLocation} />
            <PeopleCount setNumOfPeople={setNumOfPeople} />
            <DayCount setNumberOfDay={setDay}/>

            <button onClick={handleSubmit}>Generate Plan</button>

            <GeminiResponse command={command} />
            <GenerateMap setMap = {setLocation}/> 
        </div>
    );
}

export default Command;

/*
journeyCmd is now in the format of

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
                    "duration": "Full day", "description": "Explore beautiful gardens, art exhibits, and historical manuscripts."
                }, 

                {
                    "name": "Dinner at The Royce at The Langham", 
                    "type": "Dining", 
                    "duration": "2 hours", 
                    "description": "Enjoy fine dining with stunning views at this elegant restaurant."
                }
            ]
        }, 
        {
            "day": 2, 
            "activities": 
            [
                {
                    "name": "Explore Old Pasadena", 
                    "type": "Shopping & Walking", 
                    "duration": "Half day", 
                    "description": "Browse unique shops, art galleries, and charming cafes in this historic district."
                }, 

                {
                    "name": "Attend a performance at the Pasadena Playhouse", 
                    "type": "Entertainment", 
                    "duration": "Evening", 
                    "description": "Catch a Broadway-style show at this renowned theater."
                }
            ]
        }
    ]
}


*/
