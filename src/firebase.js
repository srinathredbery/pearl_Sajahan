// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {

// };


import firebase from 'firebase';
// import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD84LNC-75xEu9ANWeoRDa7Yu96-HOzqqg",
    authDomain: "pearl-268f7.firebaseapp.com",
    projectId: "pearl-268f7",
    storageBucket: "pearl-268f7.appspot.com",
    messagingSenderId: "886935263804",
    appId: "1:886935263804:web:2924f33c52f60743c54139",
    measurementId: "G-3C5XG47SRJ"
});

const fdb = firebaseApp.firestore();
export const auth = firebase.auth();

export default fdb;
// export default app;


