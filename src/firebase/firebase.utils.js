import app from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBNAKJYqc9DiVJNy4AHPgafGuJ49JFeZ44",
    authDomain: "portfolio-e3a05.firebaseapp.com",
    projectId: "portfolio-e3a05",
    storageBucket: "portfolio-e3a05.appspot.com",
    messagingSenderId: "415759580081",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

app.initializeApp(firebaseConfig);
app.analytics();

// app.initializeApp(firebaseConfig);
export const analytics = app.analytics();