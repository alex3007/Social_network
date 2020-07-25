import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Switch, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import intro from './assets/images/intro.png';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='appPage'>
                <HeaderContainer/>
                <div className='appPageContainer'>
                    <div className='appPageNavbar'>
                        <Navbar/>
                    </div>
                    <div className='appPageContent'>
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={"/profile"}/>}/>

                            <Route path='/dialogs'
                                   render={withSuspense(DialogsContainer)}/>

                            <Route path='/profile/:userId?'
                                   render={withSuspense(ProfileContainer)}/>

                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>

                            <Route path='/login'
                                   render={() => <LoginPage/>}/>

                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>

                        </Switch>
                        <img className="appPageIntro" src={intro} alt='intro'/>
                    </div>
                </div>
                <footer className="footer"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const AppJs = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default AppJs;
