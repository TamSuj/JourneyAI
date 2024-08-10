// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function BackBtn(){
    const navigate = useNavigate();
    const goBack = () =>{
        navigate("/");
    }

    return (
        <div className="absolute pt-6 pl-10 rounded-xl">
            <button className="flex items-center px-3.5 py-2 bg-gray-900 opacity-90 dark:text-white rounded-lg" onClick={goBack}>
                <svg className="w-6 h-6 mr-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                </svg>
                back
            </button>
        </div>
    )
}

export default BackBtn;
