import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Comrades} from './components/Comrades/Comrades';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {StateType} from './redux/state';


type AppPropsType = {
    state: StateType
    addNewPost:(text:string)=>void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app">
                    <Header/>
                    <Navbar/>
                    <div className="wrapper__content">
                        <Route path="/profile" render={() =>
                            <Profile posts={props.state.profilePage.posts} addNewPost={props.addNewPost}/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messeges={props.state.dialogsPage.messeges}/>}/>
                        <Route path="/comrades" render={() => <Comrades/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/setting" render={() => <Setting/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
