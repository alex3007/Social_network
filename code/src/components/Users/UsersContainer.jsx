import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow, toggleFollowingProgress, requestUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import cls from './User.module.css'



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers();
    }

    render() {

        return <>
            <div className={cls.preloader}>
            { this.props.isFetching ? <Preloader /> : null }
            </div>
            <Users
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    friends={this.props.friends}
                />
        </>
    }
}


let mapStateToProps = (state) => {
   console.log('mapStateToProps USERS');
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default compose(
    connect(mapStateToProps,{follow, unfollow, toggleFollowingProgress, requestUsers })
)(UsersContainer)