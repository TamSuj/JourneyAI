import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import "../css/Card.css";
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { placeSearch, placePhotoWithRef, placeDetail } from './PlaceResponse.jsx';
import DetailCard from './DetailCard.jsx';
import { useUser } from '../UserContext.jsx';

library.add(fas, far, fab);

function Card(props) {
    const [placeName, setPlaceName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [price, setPrice] = useState('');
    const [openDetail, setOpenDetail] = useState(false);
    const [placeId, setPlaceId] = useState('');
    const [coordinate, setCoordinate] = useState({});
    const [isDataFetched, setIsDataFetched] = useState(false); // New state for caching
    const { addNewActivity } = useUser();
    const [placeDetailData, setPlaceDetailData] = useState(null);
    // const { initialItineray } = useUser();

    useEffect(() => {
        if (isDataFetched) return; // Skip if data is already fetched
    
        const fetchPlaceDetailData = async () => {
            try {
                const details = await placeSearch(props.activity.location_name);
                const photoURL = await placePhotoWithRef(details.photo_reference);
                const placeDetailData = await placeDetail(details.place_id);
    
                if (details && placeDetailData) {
                    console.log(details);
                    setPlaceId(details.place_id);
                    setPlaceName(details.place_name);
                    setPrice(props.activity.price_level);
                    
                    if (placeDetailData.geometry && placeDetailData.geometry.location) {
                        setCoordinate(placeDetailData.geometry.location);
                    }
    
                    setPhotoUrl(photoURL);
                    setPlaceDetailData(placeDetailData);
                    setIsDataFetched(true); // Mark data as fetched
                }
    
                // Now that all state updates are done, create the newActivity object
                const newActivity = {
                    location_name: details.place_name || "Not Found",
                    type: props.activity.type || "Not Found",
                    duration: props.activity.duration || "Not Found",
                    description: props.activity.description || "Not Found", 
                    place_detail: {
                        location: placeDetailData.geometry?.location || "Not Found",
                        place_id: details.place_id || "Not Found",
                        photo_url: photoURL || "Not Found",
                        price_level: props.activity.price_level || "Not Found",
                        formatted_address: placeDetailData.formatted_address || "Not Found",
                        formatted_phone_number: placeDetailData.formatted_phone_number || "Not Found",
                        website: placeDetailData.website || "Not Found",
                        opening_hours: {
                            weekday_text: placeDetailData.opening_hours?.weekday_text || []
                        },
                        reviews: placeDetailData.reviews || []
                    }
                };
                console.log("Day:", props.dayindex); // Log the new activity object
                console.log("New Activity:", newActivity); // Log the new activity object
                addNewActivity(newActivity, props.dayindex, props.activityIndex);
                
            } catch (err) {
                console.error("Error fetching place details:", err);
            }
        };
    
        fetchPlaceDetailData();
    }, [props.activity.location_name, isDataFetched]);
    

    const iconDefinition = findIconDefinition({ iconName: props.activity.type });

    const cardDetailClicked = () => {
        setOpenDetail((prevState) => !prevState);
    };

    return (
        <div key={props.activityIndex} className="detail pt-6">
            <DetailCard show={openDetail} onClose={cardDetailClicked} placeDetailData={placeDetailData} placeName={placeName} photoURL={photoUrl} />
            <div className="card flex w-full rounded-lg bg-gray-50 p-3">
                <div className="location_description flex">
                    <div className="description">
                        <button className="font-semibold text-lg hover:underline" onClick={cardDetailClicked}>
                            <FontAwesomeIcon icon={iconDefinition} /> - {placeName}
                        </button>
                        <p className="card-description text-slate-500 text-base">{props.activity.description}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className="relative w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                            <p className="text-gray-500">{props.activity.duration}</p>
                        </div>
                        <p className="px-3"> • <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /> {price}</p> 
                    </div>

                </div>
                <div className="location_image rounded-lg">
                    {photoUrl && <img src={photoUrl} alt="Place" className="rounded-lg" />}
                </div>
            </div>
        </div>
    );
}

export default Card;
