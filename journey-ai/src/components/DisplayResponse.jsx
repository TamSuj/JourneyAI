import { useEffect, useState } from 'react';
import FetchImage from './FetchImage';
import './DisplayResponse.css';
function DisplayResponse({ response }) {
    const [parsedResponse, setParsedResponse] = useState(null);

    useEffect(() => {
        try {
            const parsed = typeof response === 'string' ? JSON.parse(response) : response;
            setParsedResponse(parsed);
        } catch (error) {
            console.error('Error parsing response:', error);
        }
    }, [response]);

    return (
        <div id="card-container">
            {parsedResponse && parsedResponse.itinerary ? (
                parsedResponse.itinerary.map((day, index) => (
                    <div key={index} className="day-card">
                        <h2 className={"ml-7 text-xl"}>Day {index + 1}</h2>
                        {day.activities && day.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="card">
                                <div className="card-content">
                                    <div>
                                        <h2>{activity.name}</h2>
                                        <div className="card-type">{activity.type}</div>
                                        <div className="card-duration"><i className="fa-regular fa-clock mx-2"></i>{activity.duration}
                                        </div>
                                        <div className="card-description">{activity.description}</div>
                                    </div>
                                    <div>
                                        <FetchImage query={activity.name}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <div>No itinerary found</div>
            )}
        </div>
    );
}

export default DisplayResponse;

