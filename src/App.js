import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import UsersContainer from './Users/UsersContainer';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import intro from "./Assets/images/intro.png";

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
                <Route path='/Users' render=
                    {() => <UsersContainer />
                   }/>
              <img className="app-page_intro" src={intro} alt='intro'/>
             </div>
            <footer className="footer" />
        </div>
    );
}

export default App;