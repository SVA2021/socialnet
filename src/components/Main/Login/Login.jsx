import React from "react";
import main from "./Login.module.css";
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className={main.parent}>
            <p>please login to https://social-network.samuraijs.com</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Login</label>
                    <div>
                        <Field
                            name="Login"
                            component="input"
                            type="text"
                            placeholder="Login"
                        />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="Password"
                            component="input"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="remember">Remember Me</label>
                    <div>
                        <Field
                            name="remember"
                            id="remember"
                            component="input"
                            type="checkbox"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>

            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    return (
        <div className={main.parent}>
            <h2>Login</h2>
            <LoginReduxForm />
        </div>
    )
}

export default Login;