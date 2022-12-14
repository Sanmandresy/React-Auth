import React, {useState,useEffect} from 'react';
import {Link,useNavigate} from "react-router-dom";
import '../styles/login.css';
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./Loader";
import {logInWithEmailAndPassword, auth, signInWithGoogle,signInWithGithub,signInWithFacebook} from "../fire_conf";


const SignInCard : React.FC <{}> = () => {
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [user,loading] = useAuthState(auth);
    const [visibility,setVisibility] = useState<string>("hidden");
    const [card,setCard] = useState<string>("card bg-eo2 max-w-md w-full space-y-8 rounded-lg");
    const navigate = useNavigate();
    const [error,setError] = useState<string>("hidden");

    useEffect(() => {
        if (!user) navigate("/login");
        else navigate("/");
    },[user,navigate,loading])


    return (<>
        <Loader visibility={visibility}/>
        <div className={card} >
            <div>
                <h2 className="mt-6 text-center text-2xl font-bold text-stone">Login</h2>
            </div>
            <form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className={"mb-5 space-y-2 text-center flex justify-center"}>
                        <input
                            id="email"
                            name="email"
                            type={"email"}
                            className="lg:w-80 w-60 px-3 py-2 rounded-md shadow-md text-sm text-center sm:text-sm focus:outline-none"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target?.value);
                            }}
                        />
                    </div>
                    <div className={"mb-5 space-y-2 flex justify-center"}>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="text-center lg:w-80 w-60 px-3 py-2 rounded-md shadow-md text-sm sm:text-sm focus:outline-none"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target?.value);
                            }}
                        />
                    </div>
                </div>
                <div className={"flex justify-center"}>
                    <button
                        className="group relative lg:w-20 flex py-2 px-4 mb-1 text-sm font-medium rounded-md text-white text-center shadow-lg hover:bg-heid bg-hei"
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibility("spinner");
                            setCard("hidden");
                            logInWithEmailAndPassword(email,password,setVisibility,setCard,setError);
                        }}
                    >
                        <Link to={"/"}>Sign in</Link>
                    </button>
                </div>
                <div className={error}>
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div>
                        Invalid Email or/and Password !
                    </div>
                </div>
                <div className={"flex justify-evenly"}>
                    <span
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibility("spinner");
                            setCard("hidden");
                            signInWithGithub(setVisibility);
                        }}
                        className={"bg-white flex justify-center items-center w-7 h-7 rounded-full mb-2.5 hover:bg-black hover:text-white "}
                    >
                        <i className="fa-brands fa-github"/>
                    </span>
                    <span
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibility("spinner");
                            setCard("hidden");
                            signInWithFacebook(setVisibility);
                        }}
                        className={"bg-facebook flex justify-center items-center w-7 h-7 rounded-full text-center mb-2.5 hover:bg-blue"}>
                        <i className="fa-brands fa-facebook text-white"/>
                    </span>
                    <span
                        onClick={(event) => {
                            event.preventDefault();
                            setVisibility("spinner");
                            setCard("hidden");
                            signInWithGoogle(setVisibility);
                        }}
                        className={"bg-white flex justify-center items-center w-7 h-7 rounded-full text-center mb-2.5 hover:bg-grg"}>
                        <i className="fa-brands fa-google text-google "/>
                    </span>
                </div>
            </form>
        </div>
    </>);
}

export default SignInCard;