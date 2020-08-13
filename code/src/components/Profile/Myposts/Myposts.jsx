import React from 'react';
import cls from './Myposts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button className={cls.postBtn}>Add post</button>
        </div>
    </form>;
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={cls.postsBlock}>
            <h3>My posts</h3>
            <div className={cls.posts}>
                {postsElements}
            </div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>

        </div>
    )
};


export default MyPosts;
