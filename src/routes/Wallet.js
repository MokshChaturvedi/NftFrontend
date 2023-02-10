import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAuthApiStatus,updateUserApi } from '../redux/authSlice';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'



const Wallet = ({ updateUserData, onUpdateUser, onSetUpdateUserApiStatus }) => {

    const history = useHistory()
    const isLogin = localStorage.getItem("isLogin")

    const goToSignIn = () => {
        history.push('/signin')
    }

    // const getBalance = () => {
    //     window.cardano.getBalance().then((result) => {
    //         toast.success(`Your Balance : ${result}`)
    //     }).catch((err) => {
    //         console.log("err", err);
    //     });
    // }

    const walletAddress = () => {
        window.cardano.getUsedAddresses().then((result) => {
            console.log("get walletAddress", result);
            localStorage.setItem("walletAddress", result)
            onUpdateUser({ wallet_address: result[0] })
        }).catch((err) => {
            console.log("err", err);
        });
    }

    const namiWalletConnect = () => {
        if (!window.cardano) {
            toast.warning("Please Install Nami Wallet")
        }
        else if (isLogin !== "true") {
            toast.warning("Please Login To Connect Your Wallet")
            history.push('/signin')
        }
        else {
            window.cardano.enable().then((result) => {
                // toast.success("Wallet Connected")
                walletAddress()
                localStorage.setItem("isWalletConnected", result)
            }).catch((err) => {
                console.log("err", err);
                toast.error("Wallet Not Connected")
            });
        }
    }

    const handleUpdateUserStatus = () => {
        if (updateUserData?.success) {
            // toast.success(updateUserData?.msg)
            toast.success("Wallet Connected Successfully")
        }
        else {
            toast.error(updateUserData?.data?.error?.msg)
        }
    }

    useEffect(() => {
        handleUpdateUserStatus()
        return () => {
            onSetUpdateUserApiStatus()
        }
    }, [updateUserData])

    useEffect(() => {
        !isLogin && history.push('/')
    }, [, isLogin])

    return (
        <div className="bannerSec walletSec">
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
                                <h2 className="textwhitecolor signheading">My wallet</h2>
                                <h3 className="textgraycolor mb-5">Connect with one of our available <br /><span className="textbluecolor">wallet providers</span> to buy and place NFTs.</h3>
                                <div className="walletApp">
                                    <ul>
                                        <li onClick={namiWalletConnect} style={{ cursor: "pointer" }}>
                                            <img className="img-fluid" src="img/nami.svg" alt="img" />
                                            <strong>Nami</strong>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="img/metamaskicon.svg" alt="img" />
                                            <strong>Metamask</strong>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="img/fortmatic.svg" alt="img" />
                                            <strong>Fortmatic</strong>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="img/coinbaseicon.svg" alt="img" />
                                            <strong>Coinbase Wallet</strong>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="img/kaikasicon.svg" alt="img" />
                                            <strong>Kaikas</strong>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="img/walletconnecticon.svg" alt="img" />
                                            <strong>WalletConnect</strong>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="img/bitskicon.svg" alt="img" />
                                            <strong>Bitski</strong>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sign-btn">
                                    <button className="btn btnlightblue me-3">More options</button>
                                    <button className="btn btndarkblue" onClick={goToSignIn}>Sign In with e-mail</button>
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
    return {
        updateUserData: state.auth.apiStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    onUpdateUser: (payload) => dispatch(updateUserApi(payload)),
    onSetUpdateUserApiStatus: () => dispatch(setAuthApiStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)