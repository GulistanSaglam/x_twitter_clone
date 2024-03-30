import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDvI96fBLq8lZh4VqvbI4KeuDcgBnIF1I",
    authDomain: "x-clone-31de4.firebaseapp.com",
    projectId: "x-clone-31de4",
    storageBucket: "x-clone-31de4.appspot.com",
    messagingSenderId: "29301055944",
    appId: "1:29301055944:web:11dbfeb88b826a8cfbe0fd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };