import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import FicheLogement from './pages/FicheLogement/FicheLogement';


// Set all application routes
function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="*" element={<Error />} />
                <Route exact path="/logement/:id" element={<FicheLogement />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;