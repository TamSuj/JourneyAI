import { useEffect, useState } from "react";

function PlaceResponse() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlaceData = async () => {
            try {
                setLoading(true);
                const response = await fetch("/place_search"); // Ensure the URL matches your server setup
                const result = await response.json();
                setData(result);
                console.log("------------->GG PLACE RESPONSE:   ", result)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaceData();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data && (
                <ul>
                    {data.results.map((place) => (
                        <li key={place.place_id}>
                            {place.name} - {place.geometry.location.lat}, {place.geometry.location.lng}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PlaceResponse;
