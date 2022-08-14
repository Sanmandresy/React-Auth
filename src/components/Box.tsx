import React from 'react';
import '../styles/login.css'


const Box : React.FC <{}> = () => {
    return (<>
        <div className={"max-h-full h-80 flex justify-center items-center"}>
            <div className={"bg-white h-20 flex justify-center items-center max-w-md w-96 space-y-8 rounded-lg"} >
                    <h1 className={"inline-flex text-2xl h-10 pt-2 leading-6 font-mono md:text-6xl overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"} >
                        Welcome !!
                    </h1>
            </div>
        </div>
    </>);
}

export default Box;