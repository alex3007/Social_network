import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import cls from "./ProfileInfo.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={cls.profileForm}>

            {error && <div className={cls.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField("My professional skills", "scills", [], Textarea)}
            </div>
            <div>
                <b>About me</b>:
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
            <button className='button'>Save</button>
        </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;