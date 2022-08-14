import React, {useEffect} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth,logOut} from "../fire_conf";
import {useNavigate} from "react-router-dom";

const NavBar : React.FC <{visible:string}> = (props) => {
    const { visible } = props;
    const [user,loading] = useAuthState(auth);
    const navigate = useNavigate();
    const link = user?.photoURL;

    useEffect(() => {
        if (user) navigate("/home");
        else if (!user) {
            navigate("/");
        }
    }, [user, loading,navigate]);

    return (<>
        <nav className={visible}>
            <div className={"flex flex-wrap justify-between items-center mx-auto"} >
                <h1 className={"text-white text-sm ml-2 flex flex-row items-center justify-center"} ><img src={link?.trim()} className={"h-10 mr-2 rounded-3xl"} alt={""}/>{user?.email}</h1>
                <button className={"lg:w-20 flex py-2 text-sm px-4 mb-1 text-sm font-medium rounded-md text-white text-center shadow-lg hover:bg-gray-500 bg-zinc"}
                onClick={() => {
                    logOut();
                }}
                >Sign out</button>
            </div>
        </nav>
    </>);
}



export default NavBar;