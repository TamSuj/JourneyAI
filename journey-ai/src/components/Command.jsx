import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LocationInput from "./LocationInput";
import GeminiResponse from './GeminiResponse.jsx';
import PeopleCount from './PeopleCount.jsx';
import DayCount from "./DayCount.jsx";
import ThemeOptions from "./ThemeOptions.jsx";
import journeyCmd from "./prompt.jsx"
import LogInButton from "./Auth/LogInButton.jsx";

function Command() {
    const [location, setLocation] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [command, setCommand] = useState('');
    const [day, setDay] = useState('');
    const [theme, setTheme] = useState('');
    const [responseData, setResponseData] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const prompt = journeyCmd(location, numOfPeople, day, theme);

        setCommand(prompt);
    };

    const handleResponse = (data) => {
        setResponseData(data);
    };

    useEffect(() => {
        if (responseData) {
            console.log("Response Data: ", responseData);
            navigate('/destination', { state: { location: location, responseData: responseData } });
        }
    }, [responseData, navigate, location]);

    return (
        <div>

            <div className="text-center landing-margin">
               <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Plan your trip in one
                  click</h1>
                <p className="mx-4 mt-6 text-xs leading-4 text-gray-600 sm:text-base">Let us help you generate the perfect plan for the trip
                  by simply entering your destination, number of travelers, and days.</p>
              <img className="landing-icon" src={"notion-icon.png"} alt='journeyAI Icon'/>
            </div>
            {/* Logo */}
            <img className={"logo-orange"} src={"logo-orange.png"} alt='journeyAI Icon'/>

            <div className={"search-parent"}>
                <div className={"w-full min-w-2/3 lg:max-w-6xl"}>
                    <LocationInput setLocation={setLocation}/>
                </div>
                <div>
                    <div className={"slide"}>
                        <ThemeOptions setTheme={setTheme}/>
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

            {/* Button to generate plan from input value */}
            <div className={"flex justify-center"}>
                <button
                    className={"bg-gray-800 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded flex flex-col mb-4"}
                    onClick={handleSubmit}>Generate Plan
                </button>
            </div>

            <div className={"mx-20 flex justify-center"}>
                <GeminiResponse command={command} onDataReceived={handleResponse}/>
            </div>
            <LogInButton/>


        </div>
    );
}

export default Command;
