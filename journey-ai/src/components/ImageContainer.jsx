import "../css/ImageContainer.css"
import hollywood_pic from "../pictures/hollywood.jpg"


function ImageContainer(){
    return (
        <div className="image_container">
            <img src={hollywood_pic} alt="hollywood" />
            <h1 className="title">3-Day Adventure in Los Angeles</h1>
        </div>   
    )
}

export default ImageContainer;