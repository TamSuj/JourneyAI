import {Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { createApi } from "unsplash-js";
function FetchImage(){
    const [data, setPhotosResponse] = useState(null);
    const api = createApi({
        accessKey: "pCKjY638XRrEvYTwlpIXdlC2c7ZjLhvkjrJ2qxzl7i0"
    });

    const PhotoComp = ({ photo }) => {
        const { user, urls } = photo;

        return (
            <Fragment>
                <img className="img" src={urls.regular} />
                <a
                    className="credit"
                    target="_blank"
                    href={`https://unsplash.com/@${user.username}`}
                >
                    {user.name}
                </a>
            </Fragment>
        );
    };

    useEffect(() => {
        api.search
            .getPhotos({ query: "Bangkok, Thailand", orientation: "landscape" })
            .then(result => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
                <div>PS: Make sure to set your access token!</div>
            </div>
        );
    } else {
        return (
            <div className="feed">
                <ul className="columnUl">
                    {data.response.results.map(photo => (
                        <li key={photo.id} className="li">
                            <PhotoComp photo={photo} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default FetchImage;
