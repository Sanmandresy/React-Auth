import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/login.css';

const SignInCard : React.FC <{}> = () => {
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    return (<>
        <div className={"card bg-eo2 max-w-md w-full space-y-8 rounded-lg"} >
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
                        className="group relative lg:w-20 flex py-2 text-sm px-4 mb-1 text-sm font-medium rounded-md text-white text-center shadow-lg hover:bg-heid bg-hei"
                        onClick={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <Link to={"/home"}>Sign in</Link>
                    </button>
                </div>
                <div className={"flex justify-evenly"}>
                    <span className={"bg-white w-7 h-7 rounded-full text-center mb-2.5 hover:bg-black hover:text-white "} >
                        <i className="fa fa-github text-lg"/>
                    </span>
                    <span className={"bg-facebook w-7 h-7 rounded-full text-center mb-2.5 hover:bg-blue"}>
                        <i className="fa fa-facebook text-sm text-white"/>
                    </span>
                    <span className={"bg-white w-7 h-7 rounded-full text-center mb-2.5 hover:bg-grg"}>
                        <i className="fa fa-google text-sm text-google "/>
                    </span>
                </div>
            </form>
        </div>
    </>);
}

export default SignInCard;