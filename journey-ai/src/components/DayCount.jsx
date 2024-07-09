
function DayCount({setNumOfDay}){
    const handleChange = (event) =>{
        setNumOfDay(event.target.value)
    }

    return(
        <div>
            <h3>How many days?</h3>
            <input 
                type="number"
                onChange={handleChange}
                placeholder="Enter Number of Travelling Day">
            </input>
        </div>

    )
}

export default DayCount;
