// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBPke_RaqQHeM9Bm-NDyWRB0eiucgwejaA",

  authDomain: "camara-cipolletti.firebaseapp.com",

  projectId: "camara-cipolletti",

  storageBucket: "camara-cipolletti.appspot.com",

  messagingSenderId: "439931190596",

  appId: "1:439931190596:web:7bac8288d0a46740fc2b11",
};

// Initialize Firebase

const blogApp = initializeApp(firebaseConfig);

export default blogApp;
