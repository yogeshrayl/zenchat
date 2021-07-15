import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCxN1HL_9VKvQ_dFLGRQW3DgfMzI31faw8",
    authDomain: "zenchat-b09d1.firebaseapp.com",
    projectId: "zenchat-b09d1",
    storageBucket: "zenchat-b09d1.appspot.com",
    messagingSenderId: "124548588004",
    appId: "1:124548588004:web:499810557b48cbdde427f1"
}).auth();