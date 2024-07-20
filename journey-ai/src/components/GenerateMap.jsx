import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { useLocation } from "react-router-dom";
import "./GenerateMap.css"
import hollywood_pic from "../pictures/hollywood.jpg"
import man_walking_pic from "../pictures/man_walking.jpg"
//public token
mapboxgl.accessToken = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';

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
    }, [location.state?.location ]);

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
            <div className="map">
                <div ref={map_ref} style={{ width: '100%', height: '100vh' }}></div>
            </div>
            <div className="detail_container">
                <div className="image_container">
                    <img src={hollywood_pic} alt="hollywood" />
                    <h1 className="title">3-Day Adventure in Los Angeles</h1>
                </div>

                <div className="post_info">
                    <div className="user_info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>

                        <div className="user_name_date">
                            <p>Nhan Tri Danh</p>
                            <p>Jul 17, 2024</p>
                        </div>
                    </div>

                    <div className="like_info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
                        </svg>
                        <p>16</p>
                    </div>
                </div>

                <div className="detail_plan">
                    <div className="day_plan">
                        <h1 class="border-b-2 border-gray-300 pb-6">Day 1</h1>
                    </div>

                    <div class="detail pt-6">

                        {/* Card 1 */}
                        <div className="card w-full rounded-lg bg-gray-50 p-3">
                            <div className="location_description">
                                <div className="description">
                                    <p>Some description here</p>
                                </div>

                                <div class="relative w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm"><span class="text-gray-500">7:30 AM - 7:30 AM</span></div>
                            </div>

                            <div className="location_image">
                                <img className="rounded-lg" src={man_walking_pic} alt="A man walking on the street" width={200} height={200} />
                            </div>
                        </div>

                        <div class="mx-5 flex items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm border-solid"></div>

                    </div>

                </div>
            </div>

        </div>
        
    )
}

export default GenerateMap;