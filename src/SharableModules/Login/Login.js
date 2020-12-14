import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MDBBtn } from 'mdbreact';
import { userActions } from '../../Redux/Actions/user.actions';
import logo from '../../images/tic_background.png';
import './style.css'

function Login() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {

            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }

    return (
        <div className="">
             <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                         <img src={logo} id="icon" alt="User Icon" />
                    </div>
                    <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="fadeIn fourth login_button">Username</label>
                        <input type="text" id="login" className="fadeIn second"  name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')}/>
                        {/* <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} /> */}
                        {submitted && !username &&
                            <div className="invalid-feedback">Username is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label className="fadeIn fourth login_button">Password</label>
                         {/* <input type="text" id="password" class="fadeIn third"  placeholder="password"/> */}
                    <input type="password" className="fadeIn third" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                    </div>
                    {/* <input type="submit" className="fadeIn fourth" value="Log In"/> */}
                    <MDBBtn type="submit" className="fadeIn fourth login_button" value="Log In" outline color="primary">Login</MDBBtn>              
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Login
