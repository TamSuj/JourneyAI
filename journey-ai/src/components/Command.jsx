import { useState } from "react";
import LocationInput from "./LocationInput";
import GeminiResponse from './GeminiResponse.jsx';
import PeopleCount from './PeopleCount.jsx';
import DayCount from "./DayCount.jsx";
import ThemeOption from "./ThemeOptions.jsx"

function Command() {
    const [location, setLocation] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [command, setCommand] = useState('');
    const [day, setDay] = useState('')
    // const [theme, setTheme] = useState('')

    const findSelectedTheme = () => {
        const checkboxes = document.querySelectorAll('#theme-options input[type="checkbox"]:checked');
        const chosenThemes = Array.from(checkboxes).map(checkbox => checkbox.value);
        return chosenThemes.join(', ');
    };

    const handleSubmit = () => {

        //Handler chosen travel theme
        const selectedThemes = findSelectedTheme();
        //Specify the prompt
        const journeyCmd =  `List a traveling plan with at ${location} city for a group of ${numOfPeople} for ${day} with this themes ${selectedThemes} and must use this JSON format look like this
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
            <DayCount setNumOfDay={setDay} />
            <ThemeOption />
            <button onClick={handleSubmit}>Generate Plan</button>

            <GeminiResponse command={command} />
        </div>
    );
}


export default Command;
