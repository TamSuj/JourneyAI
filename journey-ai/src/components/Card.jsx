// import { useState, useEffect } from "react";
import man_walking_pic from "../pictures/man_walking.jpg"
import "../css/Card.css"


function Card( {response} ){
    if(!response){
        console.log('No response');
    }


    return (
        <div className="detail pt-6">
            {/* Card 1 */}
            <div className="card w-full rounded-lg bg-gray-50 p-3">
                <div className="location_description">
                    <div className="description">
                        <p>response</p>
                    </div>

                    <div class="relative w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm"><span class="text-gray-500">7:30 AM - 7:30 AM</span></div>
                </div>

                <div className="location_image">
                    <img className="rounded-lg" src={man_walking_pic} alt="A man walking on the street" width={200} height={200} />
                </div>
            </div>

            <div class="mx-5 flex items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm border-solid"></div>
        </div>
    )
}


export default Card;
