import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';


// Set all application routes
function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;