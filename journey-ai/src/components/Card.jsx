import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import "../css/Card.css";
import { placeDetail, placePhotoWithRef } from './PlaceResponse.jsx';

library.add(fas, far, fab);

function Card(props) {
    const [placeName, setPlaceName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        const fetchPlaceDetailData = async () => {
            try {
                const details = await placeDetail(props.activity.location_name);
                const photoURL = await placePhotoWithRef(details.photo_reference);
                setPlaceName(details.place_name);
                setPhotoUrl(photoURL);
                setPrice(details.price_level);
            } catch (err) {
                console.error("Error fetching place details:", err);
            }
        };
        fetchPlaceDetailData();
    }, [props]);

    const iconDefinition = findIconDefinition({iconName: props.activity.type});

    const getPriceLevel = (price) => {
        switch (price) {
            case 0:
                return 'Free';
            case 1:
                return 'Inexpensive';
            case 2:
                return 'Moderate';
            case 3:
                return 'Expensive';
            case 4:
                return 'Very Expensive';
            default:
                return 'N/A';
        }
    }
    

    return (
       <div key={props.activityIndex} className="detail pt-6">
            <div className="card flex w-full rounded-lg bg-gray-50 p-3">
                <div className="location_description flex">
                    <div className="description">
                        <p className="font-semibold"><FontAwesomeIcon icon={iconDefinition}/> - {placeName}</p>
                        <p className="card-description text-slate-500">{props.activity.description}</p>
                    </div>

                    <div className="relative w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                        <span className="text-gray-500">{props.activity.duration}</span>
                    </div>
                    <p className="text-gray-500  px-3"><FontAwesomeIcon icon="fa-solid fa-money-bill" /> {getPriceLevel(price)}</p>

                </div>

                <div className="location_image rounded-lg">
                    {photoUrl && <img src={photoUrl} alt="Place" className="rounded-lg" />}
                </div>
            </div>
        </div>
    );
}

export default Card;
