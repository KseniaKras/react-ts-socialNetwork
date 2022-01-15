import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header, {headerData} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {ProfileData} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

function App(props: any) {
    return (
        <div className='app-wrapper'>
            <Header logo={headerData.logo}/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Profile image={ProfileData.image}/>
                <Dialogs/>
               {/* <Music />
                <News />
                <Settings />*/}
            </div>
        </div>
    );
}

export default App;
