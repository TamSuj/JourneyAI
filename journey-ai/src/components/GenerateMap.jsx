import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { useLocation } from "react-router-dom";
import "../css/GenerateMap.css"
import DetailContainer from "./DetailContainer.jsx";
import CustomizePlan from "./CustomizePlan.jsx";


//public token
mapboxgl.accessToken = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';
//Need fix

//initialize map obj with CTOR
const init_map = (map_ref) => {
    return new mapboxgl.Map({
        container: map_ref.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-118.2437, 34.0522], //initial center of map when first loaded
        zoom: 10, // initial zoom level
    });
};


function GenerateMap() {
    const location = useLocation();

    if(location.state.location){
        console.log(location.state);
    }

    const [center, setCenter] = useState(null);
    const [zoom, setZoom] = useState(null);

    useEffect(() => {
        const fetchMapData = async () => {

            try {
                console.log(location.state);
                const response = await fetch("/map", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ location: location.state.location })
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

        if (location.state?.location) {
            fetchMapData();
        }
    }, [location.state]);

    const map_ref = useRef(null);
    const map_obj = useRef(null);

    //if doesn't exist, create one
    useEffect(() => {
        
        if (!map_obj.current) {
            map_obj.current = init_map(map_ref);
        }
    }, []);

    //flyTo
    useEffect(() => {
        if (map_obj.current && center) {
            map_obj.current.flyTo({
                center: center,
                zoom: zoom,
                essential: true
            });
        }
    }, [center, zoom]);

    //We need to redesign this 
    return (
        <div className="mapPage">
            <div className="map relative">
                <CustomizePlan/>
                <div ref={map_ref} style={{ width: '100%', height: '100%' }}></div>
            </div>
            
            <DetailContainer location={location}/>

        </div>
        
    )
}

export default GenerateMap;