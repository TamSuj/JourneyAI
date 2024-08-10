import "../../css/LogIn.css";
import { useAuth } from "../../contexts/authContext/index.jsx";
import { useState } from "react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth.js";
import LogInPage from "./LogInPage.jsx";
import CreateAccountPage from "./CreateAccountPage.jsx";

function LogIn() {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);

    const [showCreateAccount, setshowCreateAccount] = useState(false)
    const [showForgetPassword, setshowForgetPassword] = useState(false)

    const handleCreateAccount = () => {
        setshowCreateAccount(!showCreateAccount)
    }

    const handleForgetPassword = () => {
        setshowForgetPassword(!showForgetPassword)
    }

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
                        <p className="login-title text-center">Login</p>
                    </div>
                    <div className="login-third-party-login">
                        <p className="login-button-info-text login-info-text text-center">EASILY USING</p>
                        <div className="login-button-container container-fluid">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <button
                                    className="login-google login-button"
                                    id="gPlusLogin"
                                    onClick={onGoogleSignIn}
                                >
                                    <span className="header-sprite login-gplus-logo"></span>Google
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="login-info-text text-center">- OR USING EMAIL -</p>
                    <form className="login-login-form" onSubmit={onSubmit}>
                        <fieldset className="login-input-container">
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
                            <button className="login-login-button" type="submit">Log in</button>
                        </fieldset>
                    </form>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="login-link-container">
                    <button className="login-link" onClick={handleForgetPassword}>Forgot Password
                    </button>
                    {/*{showForgetPassword && <ForgetPasswordPage />}*/}
                    <div className="login-right-links">
                        <button className="login-create-account-link login-link" onClick={handleCreateAccount}>Create Account</button>
                    </div>
                    {showCreateAccount && <CreateAccountPage />}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LogIn;
