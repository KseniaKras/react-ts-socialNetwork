import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header, {headerData} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(props: any) {
    return (
        <div className='app-wrapper'>
            <Router>
                <Header logo={headerData.logo}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path="/" element={<App />}/>*/}
                        <Route path={"/profile/*"} element={<Profile />}/> {/*image={ProfileData.image}/>*/}
                        <Route path={"/dialogs/*"} element={<Dialogs/>}/>
                    {/*<Music/>*/}
                    {/*<News/>*/}
                    {/*<Settings/>*/}
                    </Routes>
                </div>
            </Router>
        </div>

    );
}

export default App;
