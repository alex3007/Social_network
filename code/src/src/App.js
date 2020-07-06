import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import LoginPage from "./Login/Login";
import intro from './Assets/images/intro.png';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-page'>
                <HeaderContainer />
                <Navbar />
                <div className='app-page_content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>

                    <Route path='/login'
                           render={ () => <LoginPage /> }/>

                    <img className="app-page_intro" src={intro} alt='intro'/>
                </div>
                <footer className="footer" />
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);