import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";

function App(props) {

    return (

        <div className="app-page">
            <Header/>
            <Navbar store={props.store}/>
            <div className="app-page_content">

                <Route path='/Dialogs' render=
                    {() => <DialogsContainer store={props.store}
                                     />}/>
                <Route path='/Profile' render=
                    {() => <Profile store={props.store}
                                    />}/>
              <img className="app-page_intro"  src="./intro.png"/>
             </div>
            <footer className="footer" />
        </div>
    );
}

export default App;