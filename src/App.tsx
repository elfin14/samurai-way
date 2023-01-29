import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Comrades} from './components/Comrades/Comrades';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


function App() {
    return (
            <div className="container">
                <div className="app">
                    <Header/>
                    <Navbar/>
                    <div className="wrapper__content">
                        <Route path="/profile" render={() => <Profile />}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer />}/>
                        <Route path="/comrades" render={() => <Comrades/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/setting" render={() => <Setting/>}/>
                    </div>
                </div>
            </div>


    );
}

export default App;
