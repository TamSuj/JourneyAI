import { useEffect, useState } from "react";
import man_walking_pic from "../pictures/man_walking.jpg"

import "../css/Card.css"
import "../css/Day.css"

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
        //All cards container
        <div id="card-container">
            {parsedResponse && parsedResponse.itinerary ? (
                parsedResponse.itinerary.map((day, index) => (
                    <div key={index} className="day-card">

                        {/* Day */}
                        <div className="day_plan">
                            <h1 class="border-b-2 border-gray-300 pb-6">Day {index + 1}</h1>
                        </div>
                        
                        {day.activities && day.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="detail pt-6">
                                <div className="card w-full rounded-lg bg-gray-50 p-3">
                                    <div className="location_description">
                                        {/* Description */}
                                        <div className="description">
                                            <p>{activity.name}</p>
                                            <p className="card-type">{activity.type}</p>
                                            <p className="card-description">{activity.description}</p>
                                        </div>

                                        <div class="relative w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm"><span class="text-gray-500">{activity.duration}</span></div>

                                    </div>
                                    
                                    {/* Image */}
                                    <div className="location_image">
                                        <img className="rounded-lg" src={man_walking_pic} alt="A man walking on the street"/>
                                    </div>
                                    {/* <div>
                                        <FetchImage query={activity.name}/>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <div>No itinerary found</div>
            )}
        </div>
    )

}


export default DisplayCard;
