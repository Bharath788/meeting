import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCkLDDOzrbM2NJev5rqjlQwiQ-lappI2CI",
    authDomain: "meeting-tool-fd49c.firebaseapp.com",
    databaseURL: "https://meeting-tool-fd49c-default-rtdb.firebaseio.com",
    projectId: "meeting-tool-fd49c",
    storageBucket: "meeting-tool-fd49c.appspot.com",
    messagingSenderId: "351224581513",
    appId: "1:351224581513:web:c64e70ea55aa9f2c186558",
    measurementId: "G-K00VBQ17H4"
};

const fire = firebase.initializeApp(config);
export default fire;