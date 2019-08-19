import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import {BrowserRouter,Route} from "react-router-dom";


function App(props) {

    return (
        <BrowserRouter>
        <div className="app-page">
            <Header />
            <Navbar />
                <div className="app-page__content">

                    { /*<Route path='/Dialogs' component={Dialogs} />
                <Route path='/Profile' component={Profile} />*/}

                <Route path='/Dialogs' render=
                    { () => <Dialogs state={props.state.messagesPage}/>} />
                <Route path='/Profile' render=
                    { () => <Profile state={props.state.profilePage} />} />


            </div>
            <footer className="footer"></footer>
        </div>
        </BrowserRouter>
    );
}

export default App;