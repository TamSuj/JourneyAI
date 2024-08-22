import "../css/UserInfo.css";
import { useState, useCallback, useEffect } from "react";
import { useUser } from "../UserContext";

function UserInfo({ likeOption }) {
    // Get the current date and time
    const currentDate = new Date();
    const [liked, setLiked] = useState(likeOption);
    const { savePlan } = useUser();

    // Retrieve liked state from localStorage on component mount
    useEffect(() => {
        const savedLikeState = localStorage.getItem("liked");
        if (savedLikeState !== null) {
            setLiked(JSON.parse(savedLikeState));
        }
    }, []);

    // When the user clicks the like button
    const clickLike = useCallback(() => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        localStorage.setItem("liked", JSON.stringify(newLikedState));
        
        if (newLikedState) {
            // Add new activity
            savePlan();
            console.log("Plan saved to cloud");
        } else {
            // Delete activity logic
            console.log("Activity removed from the list");
        }
    }, [liked, savePlan]);

    // Options for formatting the date
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    // Format the date
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    return (
        <div className="post_info">
            <div className="user_info">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>

                <div className="user_name_date">
                    <p>User</p>
                    <p>{formattedDate}</p>
                </div>
            </div>

            <div className="like_info">
                <button onClick={clickLike}>
                    <i className={`fa-heart ${liked ? 'fa-solid text-red-500' : 'fa-regular text-gray-500'} text-2xl`}></i>
                </button>
            </div>
        </div>
    );
}

export default UserInfo;
