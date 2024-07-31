import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Card from "./Card.jsx";
import "../css/Card.css";
import "../css/Day.css";

library.add(fas, far, fab)


function createCard(activity, activityIndex) {
    return <Card activity={activity} activityIndex={activityIndex} />;
}

function DisplayCard({ response }) {
    const [parsedResponse, setParsedResponse] = useState(null);
    const [open, setOpen] = useState([]);

    useEffect(() => {
        try {
            const parsed = typeof response === 'string' ? JSON.parse(response) : response;
            setParsedResponse(parsed);
            setOpen(new Array(parsed.itinerary.length).fill(true)); // Create a new array with the same length and fill with false
        } catch (error) {
            console.error('Error parsing response:', error);
        }
    }, [response]);

    const toggleDown = (index) => {
        setOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="detail_plan">
            <div id="card-container">
                {parsedResponse && parsedResponse.itinerary ? (
                    parsedResponse.itinerary.map((day, index) => (
                        <div key={index} className="day-card">
                            <button id="drop-down-days" className="day_plan w-full" type="button" onClick={() => toggleDown(index)}>
                                <div className="flex items-center justify-between border-b-2 border-gray-300">
                                    <h1>Day {index + 1}</h1>
                                    <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                                </div>
                            </button>
                            

                            {open[index] && (
                                <div className="dropdown">
                                    <ul>
                                        {day.activities && day.activities.map((activity, activityIndex) => (
                                            createCard(activity, activityIndex)
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No itinerary found</div>
                )}
            </div>
        </div>
    );
}

export default DisplayCard;
