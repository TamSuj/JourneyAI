import "../../css/LogIn.css";
import { useAuth } from "../../contexts/authContext/index.jsx";
import { useState } from "react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth.js";
import CreateAccountPage from "./CreateAccountPage.jsx";

function CreateAccount() {
    const { userLoggedIn } = useAuth();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (err) {
                setError(err.message);
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle().catch((err) => {
                setError(err.message);
                setIsSigningIn(false);
            });
        }
    };

    return (
        <div>
            {userLoggedIn}

            <div className="container-fluid loginbg">
                <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 col-xs-12 login-box">
                    <div>
                        <p className="login-title text-center">Join Journey AI</p>
                    </div>
                    <form className="login-login-form" onSubmit={onSubmit}>
                        <fieldset className="login-input-container min-w-72">
                            <div className="login-input-item">
                                <input
                                    type="name"
                                    className="login-user-input-name login-user-input"
                                    name="name"
                                    placeholder="Your name (First Last)"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="login-input-item">
                                <input
                                    type="email"
                                    className="login-user-input-email login-user-input"
                                    name="email"
                                    placeholder="Your Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login-input-item">
                                <input
                                    type="password"
                                    className="login-user-input-password login-user-input"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </fieldset>
                        <fieldset className="login-login-button-container">
                            <button className="login-login-button" type="submit">Create account</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
