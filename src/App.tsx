import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsConrainer";
import store from "./redux/redux-store";


function App() {
    // console.log(store)
    const myState = store.getState()

    return (
        <div className='app-wrapper'>
            <Router>

                <Header logo={myState.header.logo}/>
                <Navbar myState={myState.navbar.NavLinkData}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile/*'} element={<Profile store={store}/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer store={store} />}/>
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
