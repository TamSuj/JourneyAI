import {doPasswordReset, doSignInWithEmailAndPassword} from "../../firebase/auth.js";

function ForgetPasswordPage() {
    const onSubmit = async (e) => {
        doPasswordReset(email, password);
    };
    return(
        <div className={"absolute right-5 top-16 h-auto"}>
            doPasswordReset
        </div>
    );

}

export default ForgetPasswordPage