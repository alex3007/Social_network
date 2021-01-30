import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import cls from "./Login.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            <p> Enter: <b>user@gmail.com</b></p>
            {createField("Password", "password", [required], Input, {type: "password"})}
            <p> Enter: <b>123</b></p>
            <div className={cls.checkBox}>
                {createField(null, "rememberMe", [], Input, {type: "checkbox"})}
                <p>- remember me</p>
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
            {error && <div className={cls.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button className='button'>Log in</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={cls.formContainer}>
        <div className={cls.formCard}>
            <h2>Log in</h2>
            <div className={cls.formBody}>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
                <br/>
            </div>
        </div>
    </div>
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);