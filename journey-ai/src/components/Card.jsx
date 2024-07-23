// import { useState, useEffect } from "react";
import "../css/Card.css"
import FetchImage from "./FetchImage.jsx";

function Card( props ){

    return (
        <div key={props.activityIndex} className="detail pt-6">
            <div className="card w-full rounded-lg bg-gray-50 p-3">
                <div className="location_description">
                    {/* Description */}
                    <div className="description">
                        <p>{props.activity.name}</p>
                        <p className="card-type">{props.activity.type}</p>
                        <p className="card-description">{props.activity.description}</p>
                    </div>

                    <div class="relative w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm"><span class="text-gray-500">{props.activity.duration}</span></div>

                </div>
                
                {/* Image */}
                <div className="location_image rounded-lg">
                    <FetchImage query={props.activity.name} className="rounded-lg"/>
                </div>
            </div>
        </div>
    )
}


export default Card;
