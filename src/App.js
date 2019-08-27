import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {

    return (

        <div className="app-page">
            <Header/>
            <Navbar sitebar={props.state.sitebar}/>
            <div className="app-page__content">


                <Route path='/Dialogs' render=
                    {() => <Dialogs store={props.store}
                                     />}/>
                <Route path='/Profile' render=
                    {() => <Profile profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}
                                    />}/>


            </div>
            <footer className="footer"></footer>
        </div>

    );
}

export default App;