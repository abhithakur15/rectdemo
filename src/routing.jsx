import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from  "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

const Routing = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />

            
            </Routes>
        </>
    )

}

export default Routing;