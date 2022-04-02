import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsConrainer";
import store from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/login/Login";


function App() {

    const myState = store.getState()
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar myState={myState.navbar.NavLinkData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile/'} element={<ProfileContainer/>}>
                        <Route path={':userId'} element={<ProfileContainer/>}/>
                    </Route>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/users/'} element={<UsersContainer />}/>
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
