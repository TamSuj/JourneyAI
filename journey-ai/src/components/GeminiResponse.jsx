import { useEffect, useState } from "react";


function GeminiResponse(props){
    const [data, setData] = useState('');
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
                    body: JSON.stringify({ prompt: props.command })
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("GEMINIResponse: ", data.message);
                props.onDataReceived(data.message);
                setData(data.message);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (props.command) {
            fetchGeminiData();
        }
    }, [props]);

    if (loading) {
        return <p></p>
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="GeminiResponse">
            <p>{data}</p>
        </div>
    );
}

export default GeminiResponse;
