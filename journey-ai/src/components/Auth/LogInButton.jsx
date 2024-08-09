import '@fortawesome/fontawesome-free/css/all.min.css';
import LogInPage from "./LogInPage.jsx";
import {useState} from "react";
function LogInButton() {
    const [showLogIn, setShowLogIn] = useState(false);

    const handleClick = () => {
        if(!showLogIn){
            setShowLogIn(true);
        } else {
            setShowLogIn(false);
        }

    };
    return (
        <div>
            <button
                className="absolute right-0 top-0 h-auto text-gray-600 mx-7 mt-2 hover:text-gray-900 hover:underline py-3 px-2 rounded flex items-center justify-center mb-4 space-x-2"
                onClick={handleClick}
            ><i className="fa-solid fa-user"></i>
                <span>Login</span>
            </button>
            {showLogIn && <LogInPage />}
        </div>
    );
}

export default LogInButton;
