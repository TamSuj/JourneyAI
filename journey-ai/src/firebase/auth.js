import { auth } from ".firebase";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)

    return result
}

export const doSignOut = () => {
    return auth.signOut();
}

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// }
//
// export const dpPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// }
//
// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser), {
//         url: "http://localhost:3000"
//     };
// }
