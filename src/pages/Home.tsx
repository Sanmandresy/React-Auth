import React from 'react';
import Navbar from "../components/Navbar";
import Box from "../components/Box";

const Home : React.FC <{}> = (props) => {
    const nav = "bg-zinc border-gray px-5 sm:px-4 py-1";
    return(<>
        <Navbar visible={nav}/>
        <Box/>
    </>);
}

export default Home;