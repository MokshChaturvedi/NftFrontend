import React , {useState , useEffect} from 'react'
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import { forgotPasswordApi, setAuthApiStatus } from '../redux/authSlice';


const ForgotPassword = ({
    onForgotPassword,
    forgotPasswordApiData,
    onSetForgotPasswordApiStatus
}) => {

    const [email, setEmail] = useState('')
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

    const handleForgot = () => {
        if (!email) {
            toast.warning("Please Enter Email");
        }
        else if (!validateEmail(email)) {
            toast.warning("Please Enter valid Email");
        }
        else {
            onForgotPassword({email: email})
        }
    }

    const handleLoginStatus = () => {
        if (forgotPasswordApiData?.success) {
            toast.success(forgotPasswordApiData?.msg)
            history.push('/')
        }
        else{
            toast.error(forgotPasswordApiData?.data?.error?.msg)
        }
    }

    useEffect(() => {
        handleLoginStatus()
        return () => {
            onSetForgotPasswordApiStatus()
        }
    },[forgotPasswordApiData])

    useEffect(() => {
        loginStatus && history.push('/')
    },[ , loginStatus])


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
                                <h2 className="textwhitecolor signheading">Forgot Password for <span className="textbluecolor">Crypto</span></h2>
                                <div className="sign-from">
                                    <form>
                                        <div className="input-box">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter e-mail" className="form-input" />
                                        </div>
                                    </form>
                                </div>
                                <div className="sign-btn mt-4">
                                    <button className="btn btnlightblue me-3" onClick={handleForgot}>Forgot password</button>
                                    <button className="btn btndarkblue" onClick={goToSignIn}>Sign In</button>

                                </div>
                                <div className="divider">or</div>
                                <div className="signup-link m-0">
                                    Already have an account? <Link to="/signin">Sign In</Link>
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
    return{
        forgotPasswordApiData: state.auth.apiStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    onForgotPassword: (payload) => dispatch(forgotPasswordApi(payload)),
    onSetForgotPasswordApiStatus : () => dispatch(setAuthApiStatus())
});  

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)