import "../css/ImageContainer.css"
import FetchImage from "./FetchImage.jsx";
import DisplayTitle from "./DisplayTitle.jsx";

function ImageContainer(props){
    
    return (
        <div className="image_container">
            <FetchImage query={props.location}/>
            <DisplayTitle response={props.response}/>
        </div>   
    )
}

export default ImageContainer;