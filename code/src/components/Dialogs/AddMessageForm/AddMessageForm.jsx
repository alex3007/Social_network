import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import cls from '../Dialogs.module.css'

const maxLength100 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div className={cls.buttonArea}>
                <button className='button'>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

























