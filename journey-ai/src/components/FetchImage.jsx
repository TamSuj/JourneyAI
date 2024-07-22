import {Fragment, useEffect, useState} from "react";
import { createApi } from "unsplash-js";
// import "./FetchImage.css";
function FetchImage({query}){
    const [data, setPhotosResponse] = useState(null);
    const api = createApi({
        // accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
        accessKey: 'pCKjY638XRrEvYTwlpIXdlC2c7ZjLhvkjrJ2qxzl7i0'
    });

    const PhotoComp = ({ photo }) => {
        const { user, urls } = photo;
        return (
            <Fragment>
                <a className="credit"
                    target="_blank"
                    href={`https://unsplash.com/@${user.username}`}
                ><img className="img rounded-lg" src={urls.regular} alt={"Image by ${user.name}"}/>
                </a>
            </Fragment>
        );
    };

    useEffect(() => {
        if(query){
            api.search
                .getPhotos({query: query, orientation: "landscape"})
                .then(result => {
                    setPhotosResponse(result);
                })
                .catch(() => {
                    console.log("something went wrong!");
                });
        }
    }, [query]);

    if (data === null) {
        return <div>Loading...</div>;
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
            </div>
        );
    } else {
        const photo = data.response.results[0]; // Only display the first photo
        return (
            <PhotoComp photo={photo} />
        );
    }
};

export default FetchImage;
