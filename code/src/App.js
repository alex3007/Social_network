import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Switch, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";
import MusicPage from "./components/pages/MusicPage/MusicPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";
import Preloader from "./components/common/Preloader/Preloader";

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
        return (
            <div className='appPage'>
                <HeaderContainer/>
                <div className='appPageContainer'>
                    <div className='appPageNavbar'>
                        <Navbar/>
                    </div>
                    {!this.props.initialized ?
                    <div className='preloaderArea'>
                        <Preloader/>
                    </div>:
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

                            <Route path='/music'
                                   render={() => <MusicPage/>}/>

                            <Route path='/video'
                                   render={() => <VideoPage/>}/>

                            <Route path='/friends'
                                   render={() => <UsersContainer
                                       friends='visible'
                                   />}/>

                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>

                        </Switch>
                    </div>}
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
