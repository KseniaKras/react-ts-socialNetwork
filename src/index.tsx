import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppStateType} from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import {StateType} from "./redux/store";   // ????


// let rerenderEntireTree = (state: AppStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

// }
//
// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     debugger
//     let state = store.getState()
//     rerenderEntireTree(state)
// })   delete function due to connect in container component
