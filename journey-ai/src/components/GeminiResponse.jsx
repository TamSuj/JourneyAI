import { useEffect, useState } from "react";


function GeminiResponse(props){
    //Initialize State variable
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                props.onDataReceived(data.message);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGeminiData();
    },[props.command]);

    return (
        <div className="GeminiResponse">
            {!data ? "" : data}
        </div>
    )
};

export default GeminiResponse;
