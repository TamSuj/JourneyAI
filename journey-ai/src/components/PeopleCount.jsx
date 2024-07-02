
function PeopleCount({ setNumOfPeople }) {
    const handleChange = (event) => {
        setNumOfPeople(event.target.value);
    };

    return (
        <div>
            <h3>How many people?</h3>
            <input
                type="number"
                onChange={handleChange}
                placeholder="Enter number of people"
            />
        </div>
    );
}

export default PeopleCount
