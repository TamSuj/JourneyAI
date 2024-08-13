import SignOutButton from "./Auth/SignOutButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function Header(){
    const navigate = useNavigate();

    const navigateToSavePlanPage = () => {
        navigate('/saved_plans');
    }
    
    return(
        <div className="header flex flex-row h-10 justify-between items-center">
            <div className="icon flex items-center h-full">
                <img className="logo-orange" src={"logo-orange.png"} alt='journeyAI Icon' />
            </div>

            <div className="flex flex-row gap-7 pr-10 items-center h-full">
                <button className="flex items-center" onClick={navigateToSavePlanPage}>
                    <FontAwesomeIcon icon="fa-solid fa-box-archive" />
                    <span className="ml-2">Saved Plan</span>
                </button>
                <SignOutButton></SignOutButton>
            </div>
        </div>


    )
}

export default Header;