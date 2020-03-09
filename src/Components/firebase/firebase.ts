import firebase from "firebase";
var config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDUojvhR_1JTr8Ccbt04A3xM5Lm3xQNknI",
  authDomain: "wedding-website-bd600.firebaseapp.com",
  databaseURL: "https://wedding-website-bd600.firebaseio.com",
  projectId: "wedding-website-bd600",
  storageBucket: "wedding-website-bd600.appspot.com",
  messagingSenderId: "168420849341",
  appId: "1:168420849341:web:dd3eedf5dd0e283eb869d4",
  measurementId: "G-6DZ44X69ZJ"
};

// const app = firebase.initializeApp(config);
// const fire = firebase.firestore(app);
var fire = firebase.initializeApp(config);
export default fire;
