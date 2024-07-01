import { useEffect, useState } from "react";
import { fetchTestingLocalApiData } from "./services/api.js";


function GeminiResponse(){
    //Initialize State variable
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchedData = async () => {
            try {
                const response = await fetchTestingLocalApiData();
                setData(response);
            } catch (error) {
                console.error("Error fetching data from from Gemini: ", error)
            }
        };
        fetchedData();
    }, []);

    return (
        <div className="GeminiResponse">
            { data ? (
                <h2>{JSON.stringify(data)}</h2>
            ) : (
                <p>Loading...</p> // Display a loading message if data is not yet available
            )}
        </div>
    )
};

export default GeminiResponse;
