import React , {useState , useEffect} from 'react'
import { connect } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'
import { setAuthApiStatus, verifyOtpApi } from '../redux/authSlice'


const VerifyOtp = ({onVerifyOtpApi , verifyOtpData ,onSetVerifyOtpStatus}) => {

    const [otp, setOtp] = useState('')
    const history = useHistory()

    const goToSignIn = () => {
        history.push('/signin')
    }

    const handleVerify = () => {
        if (!otp) {
            toast.warning("Please Enter OTP");
        }
        else{
            onVerifyOtpApi({otp: otp})
        }   
    }

    const handleVerifyOtpStatus = () => {
        if (verifyOtpData?.success) {
            toast.success(verifyOtpData?.msg)
            history.push('/signin')
        }
        else{
            toast.error(verifyOtpData?.data?.error?.msg)
        }
    }

    console.log("verifyOtpData" ,verifyOtpData);

    useEffect(() => {
        handleVerifyOtpStatus()
        return () => {
            onSetVerifyOtpStatus()
        }
    },[verifyOtpData])

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
                                <h2 className="textwhitecolor signheading">Verify Otp for <span className="textbluecolor">Crypto</span></h2>
                                <div className="sign-from">
                                    <form>
                                        <div className="input-box">
                                            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter Otp" className="form-input" />
                                        </div>
                                    </form>
                                </div>
                                <div className="sign-btn">
                                    <button className="btn btnlightblue me-3" onClick={handleVerify}>Verify</button>
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
        verifyOtpData: state.auth.apiStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    onVerifyOtpApi: (payload) => dispatch(verifyOtpApi(payload)),
    onSetVerifyOtpStatus : () => dispatch(setAuthApiStatus())
});  

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtp)