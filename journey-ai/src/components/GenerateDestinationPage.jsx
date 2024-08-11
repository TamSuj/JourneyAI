import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import "../css/GenerateMap.css";
import CustomizePlan from "./CustomizePlan.jsx";
import ImageContainer from "./ImageContainer.jsx";
import UserInfo from "./UserInfo.jsx";
import GenerateDestinationCard from "./GenerateDestinationCard.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

// public token
mapboxgl.accessToken = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';

// initialize map obj with CTOR
const init_map = (map_ref) => {
    return new mapboxgl.Map({
        container: map_ref.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-118.2437, 34.0522], // initial center of map when first loaded
        zoom: 10, // initial zoom level
    });
};

function createCard(activity, activityIndex) {
    return <GenerateDestinationCard activity={activity} activityIndex={activityIndex} />;
}

function GenerateDestinationPage() {
    const [open, setOpen] = useState([]);
    const [planData, setPlanData] = useState(null);
    const [center, setCenter] = useState(null);
    const [zoom, setZoom] = useState(null);
    const map_ref = useRef(null);
    const map_obj = useRef(null);
    const marker_obj = useRef(null);
    const { userId, planId } = useParams();
    const [city, setCity] = useState('')
    

    useEffect(() => {
        const fetchPlanData = async () => {
            try {
                const response = await fetch(`/api/saved_plan/${userId}/${planId}`);
                if (!response.ok) {
                    throw new Error("Could not fetch data from /api/saved_plan/:userId/:planId");
                }
                const data = await response.json();
                setPlanData(data);
                setOpen(new Array(data.itinerary.length).fill(true)); // Create a new array with the same length and fill with false

            } catch (error) {
                console.error("Error fetching plan data:", error);
            }
        };

        fetchPlanData();
    }, [userId, planId]);

    useEffect(() => {
        if (planData && planData.city) {
            setCity(planData.city);
            const fetchMapData = async () => {
                try {
                    const response = await fetch("/api/mapbox/map", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ location: planData.city })
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();
                    setCenter(data.center);
                    setZoom(data.zoom);
                } catch (error) {
                    console.error('Error fetching map data:', error);
                }
            };

            fetchMapData();
        }
    }, [planData]);

    useEffect(() => {
        if (!map_obj.current) {
            map_obj.current = init_map(map_ref);
        }
    }, []);

    useEffect(() => {
        if (map_obj.current && center) {
            map_obj.current.flyTo({
                center: center,
                zoom: zoom,
                essential: true
            });
        }

        if (center) {
            const lngLat = { lon: center[0], lat: center[1] };

            if (!marker_obj.current) {
                marker_obj.current = new mapboxgl.Marker({ color: 'red' });
                marker_obj.current.setLngLat(lngLat);
                marker_obj.current.addTo(map_obj.current);
            } else {
                marker_obj.current.setLngLat(lngLat);
            }
        }
    }, [center, zoom]);

    const toggleDown = (index) => {
        setOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="mapPage">
            <div className="map relative">
                <CustomizePlan />
                <div ref={map_ref} style={{ width: '100%', height: '100%' }}></div>
            </div>
            
            <div className="detail_container pb-10">
                <ImageContainer location={city}></ImageContainer>
                <UserInfo></UserInfo>

                <div className="detail_plan">
                    <div id="card-container">
                        {planData && planData.itinerary ? (
                            planData.itinerary.map((day, index) => (
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
            </div>
        </div>
    );
}

export default GenerateDestinationPage;