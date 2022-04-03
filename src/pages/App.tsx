import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "../templates/Navigation";
import MainPage from "./MainPage";
import DummyPage from "./DummyPage";

const App = () => {
    return (
        <div id={'app'} className={"home-page"}>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/test"} element={<DummyPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
