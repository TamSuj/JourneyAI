import FetchImage from "./FetchImage.jsx"
import "../css/SavedPlanCard.css"

function SavedPlanPage({tripname, city, days}){


    return (
        <div className="flex flex-col w-52">
            <FetchImage className="rounded-t-lg" query={city}/>

            <a class="card1 rounded-b-lg" href="#">
                <h3>{tripname}</h3>
                <p class="small">{days} days</p>
                <div class="go-corner" href="#">
                <div class="go-arrow">
                    →
                </div>
                </div>
            </a>
            
        </div>
    )
}

export default SavedPlanPage;
