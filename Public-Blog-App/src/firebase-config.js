// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// o get everything related to firestore
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB-5VKuzEQf3V2Cw_CdtpEQuRCBCMK3gM",
  authDomain: "blog-app-michellegoba.firebaseapp.com",
  projectId: "blog-app-michellegoba",
  storageBucket: "blog-app-michellegoba.appspot.com",
  messagingSenderId: "970388721998",
  appId: "1:970388721998:web:294a323105a1e1beef4e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// connections needed for firebase. These will be accessed outside o the file, therefore they need to be exported
export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;