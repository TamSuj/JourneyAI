import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import mapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

//public token
mapboxgl.accessToken = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';

//mapboxGeocoder CTOR
const geocoder = new mapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
});

//initialize map obj with CTOR
const init_map = (map_ref) => {
    return new mapboxgl.Map({
        container: map_ref.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-118.2437, 34.0522], //initial center of map when first loaded
        zoom: 9, // initial zoom level
    });
};

//use Geocoder to get location and coords
const update_location = (map_obj, location) => {
    //put the matching locations to features array and the first element is the best fit
    geocoder.query(location, (err, result) => {
        if (err) {
            console.error('Geocoding error: ', err);
            return;
        }

        if (result && result.features && result.features.length > 0) {
            const coords = result.features[0].center;
            console.log('coords : ', coords);
            //flyto is to move the canvas map and center the location
            map_obj.current.flyTo({
                center: coords,
                zoom: 10,
                essential: true 
            });
        } else {
            console.warn('No results found', location);
        }
    });
};

function GenerateMap(props) {
    const [center, setCenter] = useState(null);
    const [zoom, setZoom] = useState(null);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await fetch("/map", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ location: props.location })
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

        if (props.location) {
            fetchMapData();
        }
    }, [props.location]);

    const map_ref = useRef(null);
    const map_obj = useRef(null);

    useEffect(() => {
        //if doesn't exist, create one
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
    }, [center, zoom]);

    return <div ref={map_ref} style={{ width: '100%', height: '400px' }} />;
}

export default GenerateMap;