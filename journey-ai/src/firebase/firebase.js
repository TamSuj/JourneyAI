import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAp8a4pizk-xB_QCq9yPUMyhIzzoqYcAwA",
    authDomain: "journey-ai-375aa.firebaseapp.com",
    projectId: "journey-ai-375aa",
    storageBucket: "journey-ai-375aa.appspot.com",
    messagingSenderId: "136550060760",
    appId: "1:136550060760:web:e74a1af5fe5d7aa889bdad",
    measurementId: "G-HY66M9D22L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth};