import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBY4KergmnOtmLXmfbAheUfp2rKI4Ngg18",
    authDomain: "subscription-82909.firebaseapp.com",
    databaseURL: "https://subscription-82909-default-rtdb.firebaseio.com",
    projectId: "subscription-82909",
    storageBucket: "subscription-82909.appspot.com",
    messagingSenderId: "217451852812",
    appId: "1:217451852812:web:98e4729d862185b8f1ea29",
    measurementId: "G-NG1YPJLH8F"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, listAll, getDownloadURL };
