import { useState } from "react";
import LocationInput from "./LocationInput";
import GeminiResponse from './GeminiResponse.jsx';
import PeopleCount from './PeopleCount.jsx';

function Command() {
    const [location, setLocation] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [command, setCommand] = useState('');

    const handleSubmit = () => {
        const journeyCmd = `Create a travelling plan in this city ${location} for a group of ${numOfPeople}, and write it in a list format and make it simple.`;
        setCommand(journeyCmd);
    };

    return (
        <div>
            <LocationInput setLocation={setLocation} />
            <PeopleCount setNumOfPeople={setNumOfPeople} />
            <button onClick={handleSubmit}>Generate Plan</button>
            <GeminiResponse command={command} />
        </div>
    );
}

export default Command;
