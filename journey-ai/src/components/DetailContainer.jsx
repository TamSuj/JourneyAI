import ImageContainer from "./ImageContainer";
import UserInfo from "./UserInfo";
import DisplayCard from "./DisplayCard";

function DetailContainer({location}){
    return (

        <div className="detail_container">
            <ImageContainer location={location.state.location} response={location.state.responseData}/>
            <UserInfo/>
            <DisplayCard response={location.state.responseData}/>
        </div>
    )
}

export default DetailContainer;
