import React from 'react';
import './App.css';
import HeaderContainer from './Header/HeaderContainer';
import Navbar from './Navbar/Navbar';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import intro from './Assets/images/intro.png';

function App(props) {

    return (

        <div className="app-page">
            <HeaderContainer/>
            <Navbar store={props.store}/>
            <div className="app-page_content">

                <Route path='/Dialogs' render=
                    {() => <DialogsContainer />}/>
                <Route path='/Profile' render=
                    {() => <ProfileContainer/>}/>
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