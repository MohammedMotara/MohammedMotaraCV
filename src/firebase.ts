import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAR8duuCXGyix2M1uwjxhQjPGH4YoL3pjw",
    authDomain: "online-cv-1bbb4.firebaseapp.com",
    databaseURL: "https://online-cv-1bbb4.firebaseio.com",
    projectId: "online-cv-1bbb4",
    storageBucket: "online-cv-1bbb4.appspot.com",
    messagingSenderId: "123181769306",
    appId: "1:123181769306:web:f4264ed78f2eb541712e63",
    measurementId: "G-K6XW69L0T8"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storage = firebase.storage();
// export const auth = firebase.auth();

export default firebase;