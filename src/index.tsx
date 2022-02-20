import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppStateType} from './redux/redux-store';
// import {StateType} from "./redux/store";   // ????


let rerenderEntireTree = (state: AppStateType) => {       // Типизация ??
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
