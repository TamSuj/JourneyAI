
function LocationInput({ setLocation }) {
    const handleChange = (event) => {
        console.log('New Location:', setLocation); // Log the new location

        setLocation(event.target.value);
    };

    return (
        <div>
            <h3>Where do you want to go?</h3>
            <input
                type="text"
                onChange={ handleChange }
                placeholder="Enter a City name"
            />
        </div>
    );
}



export default LocationInput;
