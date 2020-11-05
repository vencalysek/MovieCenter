import "./sass/App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from "axios";
import { API_KEY, API_URL } from "./ApiConfig";


const App = () => {
    
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Router>
                    <Sidebar />
                    <MainSection />
                </Router>
            </div>
        </div>
    );
};

export default App;

// TODO
/********
 *
 * // todo: routing - done
 * // todo: movie details - main logic done
 * 
 * // todo: homepage
 * todo: movie details back button
 * // todo: search api
 * todo: save favourit
 * 
 * todo: improving movie details with actors, pic and vids
 * todo: will see
 */
