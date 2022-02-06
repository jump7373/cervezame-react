import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    //PONER ACA LA INFO DE SU APP
    {
        apiKey: "AIzaSyB3960JAo7tYNJjX-tfhBpR5ZWVjdEc510",
        authDomain: "proyecto-mirabile-react.firebaseapp.com",
        projectId: "proyecto-mirabile-react",
        storageBucket: "proyecto-mirabile-react.appspot.com",
        messagingSenderId: "270639492329",
        appId: "1:270639492329:web:e421a39a78d501a4ee5478",
        measurementId: "G-JK10FNJE0W"
    }
);
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}