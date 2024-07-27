import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import "../css/Card.css"
import "../css/Day.css"

function createCard(activity, activityIndex){
    return <Card activity={activity} activityIndex={activityIndex}/>
}

function DisplayCard({ response }){
    const [parsedResponse, setParsedResponse] = useState(null);

    useEffect(() => {
        try {
            const parsed = typeof response === 'string' ? JSON.parse(response) : response;
            setParsedResponse(parsed);
        } catch (error) {
            console.error('Error parsing response:', error);
        }
    }, [response]);

    return(
        <div className="detail_plan">
            <div id="card-container">
                {parsedResponse && parsedResponse.itinerary ? (
                    parsedResponse.itinerary.map((day, index) => (
                        <div key={index} className="day-card">

                            {/* Day */}
                            <div className="day_plan">
                                <h1 class="border-b-2 border-gray-300 pb-6">Day {index + 1}</h1>
                            </div>
                            
                            {/* Card */}
                            {day.activities && day.activities.map((activity, activityIndex) => (
                                createCard(activity, activityIndex)
                            ))}
                        </div>
                    ))
                ) : (
                    <div>No itinerary found</div>
                )}
            </div>
        </div>
        
    )

}


export default DisplayCard;
