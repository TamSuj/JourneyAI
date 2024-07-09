import { useEffect, useState } from "react";


function GeminiResponse(props){
    //Initialize State variable
    const [data, setData] = useState('')

    useEffect(() => {
        const fetchGeminiData = async() => {
            try {
                const response  = await fetch("/gemini_response",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },                    
                    body: JSON.stringify({prompt: props.command})
                })
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.json();
                setData(data.message);
            } catch (error) {
                console.error("Error fetching /gemini_reponse: ", error);
            }
        };

        fetchGeminiData();
    },[props.command]);

    return (
        <div className="GeminiResponse">
            <p>{!data ? "Loading..." : data}</p>
        </div>
    )
};

export default GeminiResponse;
