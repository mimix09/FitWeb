import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const app = initializeApp({
    apiKey: "AIzaSyAAjcac-TLHoJn5t1iJiD8esC5C3xgfUSU",
    authDomain: "kopcza.firebaseapp.com",
    projectId: "kopcza",
    storageBucket: "kopcza.appspot.com",
    messagingSenderId: "113083672860",
    appId: "1:113083672860:web:683a3751bb1f1ff83232d9",
    measurementId: "G-RDK7P6RVGD"
  });


const analytics = getAnalytics(app)
const auth = getAuth(app)
const firebase = app

export { auth, analytics, firebase}
