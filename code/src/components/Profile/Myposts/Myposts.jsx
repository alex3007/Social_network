import React from 'react';
import cls from './Myposts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(55);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button className='button'>Add post</button>
        </div>
    </form>;
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        !props.isOwner ?
            (props.profilePosts && props.profilePosts.posts.map(p => <Post message={p.message}
                                                                           likesCount={p.likesCount}/>)) :
            props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={cls.postsBlock}>
            <h2>My posts</h2>
            <div className={cls.posts}>
                {postsElements}
            </div>

            <div className={cls.textArea}>
                {props.isOwner &&
                <AddNewPostFormRedux onSubmit={onAddPost}/>}
            </div>
        </div>
    )
};


export default MyPosts;
