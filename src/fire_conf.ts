import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from 'firebase/auth';
import {Dispatch, SetStateAction} from "react";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey:"AIzaSyB0Dg2C1sJv271k736sU3-OFrX0ZGCiX1k",
    authDomain: "react-ts-firebase-b6b11.firebaseapp.com",
    projectId: "react-ts-firebase-b6b11",
    storageBucket: "react-ts-firebase-b6b11.appspot.com",
    messagingSenderId: "823967191861",
    appId: "1:823967191861:web:293f6001f37ae6360d727c",
    measurementId: "G-2G1E23YHSZ"
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