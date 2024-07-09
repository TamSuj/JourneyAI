import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import mapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

//public token
mapboxgl.accessToken = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';

//mapboxGeocoder CTOR
const geocoder = new mapboxGeocoder
({
    accessToken : mapboxgl.accessToken,
    mapboxgl : mapboxgl,
});

//initialize map obj with CTOR
const init_map = (map_ref) => {
    return new mapboxgl.Map({
        container : map_ref.current,
        style : 'mapbox://styles/mapbox/streets-v12',
        center : [-74.5, 40], //initial center of map when first loaded
        zoom : 9, // initial zoom level
    });
};

//use Geocoder to get location and coords
const update_location = (map_obj, location) => {

    //put the matching locations to features array and the first element is the best fit
    geocoder.query(location, (err, result ) => {
        if(err){
            console.error('Geocoding error: ', err);
            return;
        }

        if (result && result.features && result.features.length > 0) {
            const coords = result.features[0].center;

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


const GenerateMap = ( {location} ) => {
    
    const map_ref = useRef(null);
    const map_obj = useRef(null);

    useEffect(() => {

        //if doesnt exist, create one
        if(!map_obj.current) {
            map_obj.current = init_map(map_ref);
        }

        map_obj.current.on('load', () => {
            console.log('Geocoding location:', location);

            if(location){
                //update current map
                update_location(map_obj.current, location);
            }
        });


        return () => {
            if(map_obj.current){
                map_obj.current.off('event', location); // Use off instead of removeEventListener
            }
        };

    }, [location]);
 
    return <div ref={map_ref} style={ { width: '100%', height: '400px' } } />;
};

export default GenerateMap;