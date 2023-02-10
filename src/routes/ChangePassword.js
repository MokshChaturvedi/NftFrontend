import React , {useState} from 'react'
import { connect } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { changePasswordApi, setAuthApiStatus } from '../redux/authSlice';


const ChangePassword = ({
    changePasswordApiData,
    onChangePassword,
    onSetChangePasswordApiStatus
}) => {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const history = useHistory()
    const isLogin = localStorage.getItem("isLogin")

    const changePasswordData = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confPassword: confirmNewPassword
    }

    const backToHome = () => {
        history.push('/')
    }

    const handleChangePassword = () => {
        if (!oldPassword) {
            toast.warning("Please Enter Old Password");
        }
        else if (!newPassword) {
            toast.warning("Please Enter New Password");
        }
        else if (newPassword.length <= 7 ) {
            toast.warning("Password Must Be 8 digit");
        }
        else if (!confirmNewPassword) {
            toast.warning("Please Enter Confirm New Password");
        }
        else if (newPassword !== confirmNewPassword) {
            toast.warning("Password Are Not Same");
        }
        else {
            onChangePassword(changePasswordData)
        }
    }

    const handleChangePasswordStatus = () => {
        if (changePasswordApiData?.success) {
            toast.success(changePasswordApiData?.msg)
            history.push('/')
        }
        else{
            toast.error(changePasswordApiData?.data?.error?.msg)
        }
    }

    useEffect(() => {
        handleChangePasswordStatus()
        return () => {
            onSetChangePasswordApiStatus()
        }
    },[changePasswordApiData])

    useEffect(() => {
        isLogin !== "true" && history.push('/')
      },[])


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
                                <h2 className="textwhitecolor signheading">Change Password for <span className="textbluecolor">Crypto</span></h2>
                                <div className="sign-from">
                                    <form>
                                        <div className="input-box">
                                            <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter Old password" className="form-input" />
                                        </div>
                                        <div className="input-box">
                                            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter New password" className="form-input" />
                                        </div>
                                        <div className="input-box">
                                            <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="Re-Enter New password" className="form-input" />
                                        </div>
                                    </form>
                                </div>
                                <div className="sign-btn mt-4">
                                    <button className="btn btnlightblue me-3" onClick={handleChangePassword}>Change Password</button>
                                    <button className="btn btndarkblue" onClick={backToHome}>Back To Home</button>
                                </div>
                                {/* <div className="divider">or</div>
                                <div className="signup-link m-0">
                                    Already have an account? <Link to="/signin">Sign In</Link>
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
        changePasswordApiData: state.auth.apiStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangePassword: (payload) => dispatch(changePasswordApi(payload)),
    onSetChangePasswordApiStatus : () => dispatch(setAuthApiStatus())
});  

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)