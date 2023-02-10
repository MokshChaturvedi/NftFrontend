import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setAuthApiStatus, signInApi, getUserApi } from '../redux/authSlice';
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import constants from '../constants/constants';
import axios from 'axios';

const SignIn = ({
    onSignIn,
    loginData,
    onSetSignInApiStatus,
    getUser
}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const loginStatus = localStorage.getItem("isLogin")

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const signInData = {
        email: email,
        password: password,
    }

    const googleAuth = async () => {
        try {

            let googleRes = await axios.get(`${constants.BACKEND_URL}/google/callback`);
            // windowData['request'] = "ByGoogle";
            console.log("googleRes", googleRes)

        } catch (error) {
            console.log(error)
        }
    }

    const handleForgot = () => {
        history.push('/forgot-password')
    }

    const handleSignIn = () => {
        if (!email) {
            toast.warning("Please Enter Email");
        }
        else if (!validateEmail(email)) {
            toast.warning("Please Enter valid Email");
        }
        else if (!password) {
            toast.warning("Please Enter Password");
        }
        else {
            onSignIn(signInData)
        }
    }

    const handleLoginStatus = () => {
        if (loginData?.success) {
            toast.success(loginData?.msg)
            localStorage.setItem("accessToken", loginData?.accessToken)
            localStorage.setItem("roleType", loginData?.role_type)
            localStorage.setItem("isLogin", true)
            history.push('/')
            let obj = {
                accessToken: loginData.accessToken
            }
            getUser(obj)
        }
        else {
            toast.error(loginData?.data?.error?.msg)
        }
    }

    useEffect(() => {
        handleLoginStatus()
        return () => {
            onSetSignInApiStatus()
        }
    }, [loginData])

    useEffect(() => {
        loginStatus && history.push('/')
    }, [, loginStatus])


    return (
        <div className="bannerSec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bannercntSec signcntsec">
                            <div className="bannerImg d-none d-xl-flex">
                                <img className="img-fluid d-sm-block d-md-none" src="img/patterbannerimg.png" alt="img" />
                                <div className="bannerimg01 d-none d-md-block">
                                    <img className="img-fluid" src="img/bannerimg01.png" alt="img" />
                                </div>
                                <div className="bannerimg02 d-none d-md-block">
                                    <img className="img-fluid" src="img/bannerimg02.png" alt="img" />
                                </div>
                                <div className="bannerimg03 d-none d-md-block">
                                    <img className="img-fluid" src="img/bannerimg03.png" alt="img" />
                                </div>
                                <div className="bannerbtn 1d-block d-none d-sm-none d-md-block d-xl-none">
                                    <button className="btn btnlightblue me-3">Discover</button>
                                    <button className="btn btndarkblue">Create</button>
                                </div>
                            </div>
                            <div className="signctn">
                                <h2 className="textwhitecolor signheading">Sign In for <span className="textbluecolor">Crypto</span></h2>
                                <div className="sign-from">
                                    <form>
                                        <div className="input-box">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter e-mail" className="form-input" />
                                        </div>
                                        <div className="input-box">
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="form-input" />
                                        </div>
                                        <div className="form-check d-none d-md-flex">
                                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                I agree with Privacy Policy
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="sign-btn">
                                    <button className="btn btnlightblue me-3" onClick={handleSignIn}>Sign In</button>
                                    <button className="btn btnlightblue me-3" onClick={googleAuth}>Sign In With Google</button>
                                    <button className="btn btndarkblue" onClick={handleForgot}>Forgot password</button>
                                </div>
                                <div className="divider">or</div>
                                {/* <div className="social-wrap">
                                    <a href="#" className="twiter">
                                        <img src="img/twittericon.svg" alt="icon" />
                                    </a>
                                    <a href="#" className="google">
                                        <img src="img/googleicon.svg" alt="icon" />
                                    </a>
                                    <a href="#" className="facebook">
                                        <img src="img/facebookicon.svg" alt="icon" />
                                    </a>
                                </div> */}
                                <div className="signup-link mt-0">
                                    Do not have an account? <Link to="/signup">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return {
        loginData: state.auth.apiStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSignIn: (payload) => dispatch(signInApi(payload)),
    onSetSignInApiStatus: () => dispatch(setAuthApiStatus()),
    getUser: (payload) => dispatch(getUserApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)