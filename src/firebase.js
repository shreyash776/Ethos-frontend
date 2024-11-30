import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB8T6L8rzOCBlEuH9FJRhL99AeGNrcPxOE",
    authDomain: "pixelface-665a0.firebaseapp.com",
    projectId: "pixelface-665a0",
    storageBucket: "pixelface-665a0.appspot.com",
    messagingSenderId: "1033272372469",
    appId: "1:1033272372469:web:d228157133ba3c81fee9bc",
    measurementId: "G-58N97VJVG5"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);