import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {StateType} from './redux/state'
import {addNewPost} from './redux/state'



export const rerenderEntireTree =(state:StateType)=>{
    ReactDOM.render(
        < App state={state} addNewPost={addNewPost}/>, document.getElementById('root')
    )
    ;
}
