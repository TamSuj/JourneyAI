import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function SignOutButton(){
    const handleSignOut = () => {
        signOut(auth)
        .then(() =>console.log("Sign out"))
        .catch((err) => console.log(err));
    }

    return (
        <div>
            <button
                className="absolute right-0 top-0 h-auto text-gray-600 mx-7 mt-2 hover:text-gray-900 hover:underline py-3 px-2 rounded flex items-center justify-center mb-4 space-x-2"
                onClick={handleSignOut}
            ><i className="fa-solid fa-user"></i>
                <span>Sign Out</span>
            </button>
        </div>
    )
}

export default SignOutButton;
