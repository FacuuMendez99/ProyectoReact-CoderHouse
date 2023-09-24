import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCCyqWunUBzM2qmkk7RQKWBM4CIanl54Bc",
    authDomain: "chandelier-shop-71e65.firebaseapp.com",
    projectId: "chandelier-shop-71e65",
    storageBucket: "chandelier-shop-71e65.appspot.com",
    messagingSenderId: "709583534675",
    appId: "1:709583534675:web:ffa921aab081b5a11364a6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)