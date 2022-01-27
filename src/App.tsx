import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import state from './redux/state';

function App() {

    return (
        <div className='app-wrapper'>
            <Router>
                <Header logo={state.header.logo}/>
                <Navbar myState={state.navbar.NavLinkData}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path="/" element={<App />}/>*/}
                        <Route path={'/profile/*'} element={<Profile myState={state.profilePage}/>}/> {/*image={ProfileData.image}/>*/}
                        <Route path={'/dialogs/*'} element={<Dialogs myState={state.dialogsPage}/>}/>
                        <Route path={'/music'} element={<Music/>} />
                        <Route path={'/news'} element={<News/>} />
                        <Route path={'/settings'} element={<Settings/>} />
                    </Routes>
                </div>
            </Router>
        </div>

    );
}

export default App;
