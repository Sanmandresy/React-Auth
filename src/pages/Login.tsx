import React from 'react';
import SignInCard from "../components/SignInCard";

const Login : React.FC <{}> = () => {
    return(<>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-eo">
            <SignInCard/>
        </div>
    </>);
}

export default Login;