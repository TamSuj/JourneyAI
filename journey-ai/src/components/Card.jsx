import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import "../css/Card.css";
import FetchImage from "./FetchImage.jsx";

library.add(fas, far, fab)


function Card(props) {
    // const iconName = props.activity.description || 'question';

    const iconDefinition = findIconDefinition({iconName: props.activity.type})
    return (
        <div key={props.activityIndex} className="detail pt-6">
            <div className="card w-full rounded-lg bg-gray-50 p-3">
                <div className="location_description">
                    {/* Description */}
                    <div className="description">
                        <p className="font-semibold">{props.activity.name}</p>

                        {/* We gonna change the car-type to icon */}
                        <p className="card-type">
                            <FontAwesomeIcon icon={iconDefinition}/>
                        </p>

                        <p className="card-description text-slate-500">{props.activity.description}</p>
                    </div>

                    <div className="relative w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                        <span className="text-gray-500">{props.activity.duration}</span>
                    </div>
                </div>

                {/* Image */}
                <div className="location_image rounded-lg">
                    <FetchImage query={props.activity.name} className="rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default Card;
