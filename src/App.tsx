import React from 'react';
import  './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Comrades} from './components/Comrades/Comrades';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app">
                    <Header/>
                    <Navbar/>
                    <div className="wrapper__content">
                        <Route path='/profile' component={Profile}/>
                        <Route path='/news' component={News}/>
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/comrades' component={Comrades}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/setting' component={Setting}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
