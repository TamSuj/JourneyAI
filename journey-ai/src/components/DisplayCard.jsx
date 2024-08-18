import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Card from "./Card.jsx";
import "../css/Card.css";
import "../css/Day.css";
import { useUser } from "../UserContext.jsx";

library.add(fas, far, fab)


function createCard(activity, activityIndex, dayindex) {
    return <Card activity={activity} activityIndex={activityIndex} dayindex={dayindex}/>;
}

function DisplayCard({ response }) {
    const [parsedResponse, setParsedResponse] = useState(null);
    const [open, setOpen] = useState([]);
    // const [emptyItinerary, setEmptyItinerary] = useState([]);
    const { setItinerary } = useUser();
    useEffect(() => {
        try {
            const parsed = typeof response === 'string' ? JSON.parse(response) : response;
            setParsedResponse(parsed);
            setOpen(new Array(parsed.itinerary.length).fill(true)); // Create a new array with the same length and fill with false

            const duration = parsed.duration;
            const initialItineray= [];
            
            for(let day = 1; day <= duration; day++){
                initialItineray.push(
                    {
                        day: day,
                        activities: []
                    }
                )
            }

            setItinerary(initialItineray);

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
                    parsedResponse.itinerary.map((day, dayindex) => (
                        <div key={dayindex} className="day-card">
                            <button id="drop-down-days" className="day_plan w-full" type="button" onClick={() => toggleDown(dayindex)}>
                                <div className="flex items-center justify-between border-b-2 border-gray-300">
                                    <h1>Day {dayindex + 1}</h1>
                                    <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                                </div>
                            </button>
                            

                            {open[dayindex] && (
                                <div className="dropdown">
                                    <ul>
                                        {day.activities && day.activities.map((activity, activityIndex) => (
                                            createCard(activity, activityIndex, dayindex)
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
