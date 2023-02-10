import React, { useState , useEffect } from 'react'
import { connect } from 'react-redux'
import {signUpApi , setAuthApiStatus} from '../redux/authSlice'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const SignUp = ({
    onSignUp,
    signUpApiStatusData,
    onSetSignUpApiStatus
}) => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const history = useHistory()
    const loginStatus = localStorage.getItem("isLogin")

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const goToSignIn = () => {
        history.push('/signin')
    }

    const signUpData = {
        username: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    }

    
    const handleSignUp = () => {
        if (!userName) {
            toast.warning("Please Enter UserName");
        }
        else if (!email) {
            toast.warning("Please Enter Email");
        }
        else if (!validateEmail(email)) {
            toast.warning("Please Enter valid Email");
        }
        else if (!password) {
            toast.warning("Please Enter Password");
        }
        else if (password.length <= 7) {
            toast.warning("Password must be 8 digit");
        }
        else if (password !== confirmPassword) {
            toast.warning("Password are not same");
        }
        else {
            onSignUp(signUpData)
        }
    }


    const handleSignUpStatus = () => {
        if (signUpApiStatusData?.success) {
            toast.success(signUpApiStatusData?.msg)
            history.push('/')
        }
        else{
            toast.error(signUpApiStatusData?.data?.error?.email)
        }
    }

    useEffect(() => {
        handleSignUpStatus()
        return () => {
            onSetSignUpApiStatus()
        }
    },[signUpApiStatusData])

    useEffect(() => {
        loginStatus && history.push('/')
    },[ , loginStatus])



    return (
        <div className="bannerSec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bannercntSec signupsec">
                            <div className="bannerImg mt-5 d-none d-xl-flex">
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
                            <div className="bannercnt signctn" style={{flexDirection: "column"}}>
                                <h2 className="textwhitecolor signheading">Sign Up for <span className="textbluecolor">Crypto</span></h2>
                                <p className="textwhitecolor">Sign Up with e-mail or connect with one of<br /> our available <a href="#">wallet providers.</a></p>
                                <div className="sign-from signup-form">
                                    <form>
                                        <div className="input-box">
                                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter nickname" className="form-input" />
                                        </div>
                                        <div className="input-box">
                                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter e-mail" className="form-input" />
                                        </div>
                                        <div className="row input-box">
                                            <div className="col-md-6">
                                                <input type="password" name="pas" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="form-input" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="password" name="cpass" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" className="form-input" />
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                I agree with Privacy Policy
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="sign-btn">
                                    <button className="btn btnlightblue me-3" onClick={()=>handleSignUp()}>Sign Up</button>
                                    <button className="btn btndarkblue" onClick={goToSignIn}>Sign In by e-mail</button>
                                </div>
                                {/* <div className="divider">or</div>
                                <div className="social-wrap">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    
    return{
        signUpApiStatusData: state.auth.apiStatus
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSignUp: (payload) => dispatch(signUpApi(payload)),
    onSetSignUpApiStatus : () => dispatch(setAuthApiStatus())
});  

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)