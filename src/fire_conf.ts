import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from 'firebase/auth';
import {Dispatch, SetStateAction} from "react";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const logInWithEmailAndPassword  = async (email:string, password:string,setVisibility:Dispatch<SetStateAction<any>>) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setVisibility("hidden");
    } catch (error) {
        console.error(error);
    }
};

const signInWithGithub = async(setVisibility:Dispatch<SetStateAction<any>>) => {
    try{
        const response = await signInWithPopup(auth,githubProvider);
        const user = response.user;
        const statement = query(collection(db,"users"),where("uid", "==", user.uid))
        const check = await getDocs(statement);

        if (check.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "github",
                email: user.email,
            });
        }
        setVisibility("hidden");
    }
    catch(error){
        console.error(error);
    }
}

const signInWithFacebook = async(setVisibility:Dispatch<SetStateAction<any>>) => {
    try{
        const response = await signInWithPopup(auth,facebookProvider);
        const user = response.user;
        const statement = query(collection(db,"users"),where("uid", "==", user.uid))
        const check = await getDocs(statement);

        if (check.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "facebook",
                email: user.email,
            });
        }
        setVisibility("hidden");
    }
    catch(error){
        console.error(error);
    }
}


const signInWithGoogle = async(setVisibility:Dispatch<SetStateAction<any>>) => {
    try{
        const response = await signInWithPopup(auth,googleProvider);
        const user = response.user;
        const statement = query(collection(db,"users"),where("uid", "==", user.uid))
        const check = await getDocs(statement);

        if (check.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
        setVisibility("hidden");
    }
    catch (error){
        console.error(error);
    }
}


const logOut = () => {
    signOut(auth);
}


export  {auth,logInWithEmailAndPassword,logOut,signInWithGoogle,signInWithGithub,signInWithFacebook};