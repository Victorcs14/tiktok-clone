import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCI31DnHlq98BGMyM-HmAwONsJ7c5UEXM0",
  authDomain: "tik-tok-do-vitao.firebaseapp.com",
  projectId: "tik-tok-do-vitao",
  storageBucket: "tik-tok-do-vitao.appspot.com",
  messagingSenderId: "648195462575",
  appId: "1:648195462575:web:8c813ccea79cf1755a0b5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;