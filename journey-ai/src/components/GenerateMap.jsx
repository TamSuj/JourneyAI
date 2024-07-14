import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import mapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

//public token
mapboxgl.accessToken = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';

// //mapboxGeocoder CTOR
// const geocoder = new mapboxGeocoder
// ({
//     accessToken : mapboxgl.accessToken,
//     mapboxgl : mapboxgl,
// });

//initialize map obj with CTOR
const init_map = (map_ref) => {
    return new mapboxgl.Map({
        container : map_ref.current,
        style : 'mapbox://styles/mapbox/streets-v12',
        center : [-118.2437, 34.0522], //initial center of map when first loaded
        zoom : 9, // initial zoom level
    });
};

const GenerateMap = ( {center, zoom} ) => {
    
    const map_ref = useRef(null);
    const map_obj = useRef(null);

    useEffect(() => {
    //if doesnt exist, create one

    if(!map_obj.current) {
        map_obj.current = init_map(map_ref);
    }

    //     }, []);


    // useEffect(() => {
        if(map_obj.current && center){
            map_obj.current.flyTo({
                center : center,
                zoom : zoom,
                essential : true
            });
        }
    
    }, [center, zoom]);
 
    return <div ref={map_ref} style={ { width: '100%', height: '400px' } } />;
};

export default GenerateMap;