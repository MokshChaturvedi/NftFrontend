import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import WalletContent from './walletContent/WalletContent';
import WalletTab from './wallettab/WalletTab';
import { getUserApi } from "../../../redux/authSlice";
import { setAuthApiStatus, updateUserApi } from '../../../redux/authSlice';
import { addWalletData } from "../../../services/apiServices";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard";
import constants from "../../../constants/constants";
import axios from "axios";




const Wallet = ({
    getUser,
    userData,
}) => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [userDetail, setUserDetail] = useState({});
    const [userWallet, setuserWallet] = useState([]);


    const [open, setOpen] = React.useState(false);
    const [openModalWithWallet, setOpenModalWithWallet] = React.useState(false);
    const [openWalletAddress, setOpenWalletAddress] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCloseWalletModal = () => setOpenModalWithWallet(false);
    const handleCloseWallet = () => setOpenWalletAddress(false);

    const walletData = {
        wallet_name: name,
        wallet_password: password,
    };

    const handleModal = async () => {
        addWalletData("/create-wallet", walletData).then( async (res) => {
            // document.querySelector('#auctionWallet').modal('toggle');
            // document.ready(function(){
            // });
            setName("");
            setPassword("");

            console.log("response ==========", res);
            if (res.status == 200) {
                setData(res.data);
                if (res.data && res.data.isWallet) {
                    handleClose();
                    setOpenModalWithWallet(true);     
                    toast.success(res.data.message);
                    
                    window.location.reload()
                    // const headers = {
                    //     'Authorization': "Bearer " + localStorage.getItem("accessToken"),
                    //     'Content-Type': 'application/json'
                    // }
        
                    // let obj = {
                    //     userid: userDetail.data._id,
                    // };
                    // console.log(obj)
                    // try {
                    //     await axios.post(`${constants.BACKEND_URL}/get-wallet`, obj, { headers: headers }).then((res) => {
                    //         console.log("res", res);
                    //         setuserWallet(res.data.data)
                            
                    //     }).catch((err) => {
                    //         console.log(err)
                    //     })
                    // } catch (error) {
                    //     console.log(error)
                    // }
                    
                } else {
                    toast.warning(res.data.message);
                }
            } else {
                setData(res.data);
            }
        });
    };



    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        let obj = {
            // userid: userData._id,
            accessToken: localStorage.getItem("accessToken"),
        };
        getUser(obj);
    }, []);


    useEffect(async () => {

        if (userData && userData.data) {
            console.log("userData", userData)
            setUserDetail(userData.data);

            const headers = {
                'Authorization': "Bearer " + localStorage.getItem("accessToken"),
                'Content-Type': 'application/json'
            }

            let obj = {
                userid: userData.data._id,
            };
            console.log(obj)
            try {
                await axios.post(`${constants.BACKEND_URL}/get-wallet`, obj, { headers: headers }).then((res) => {
                    console.log("res", res);
                    setuserWallet(res.data.data)
                }).catch((err) => {
                    console.log(err)
                })
            } catch (error) {
                console.log(error)
            }
        }





    }, [userData]);

    console.log("userWallet", userWallet)


    return (
        <div className="TopsellerSec pt-5 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="headingWh mb-4">My Wallet</h2>

                        {userWallet.length > 0 ? (
                            <WalletContent data={userWallet} />
                        ) : ("")}


                    </div>
                    <div className="headingWh col-3" style={{ marginTop: "-86px" }}>
                        <div className="back-homeBtn browse" >
                            <a className="back-home headingWh" onClick={handleOpen} style={{ display: "block", textAlign: "center", cursor: "pointer" }}>
                                Create Wallet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <Box sx={style}>
                        <Box>
                            <Typography
                                color={"black"}
                                textAlign="center"
                                variant="h5"
                                component="div"
                            >
                                Create New Wallet
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                mt: 5,
                            }}
                        >
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                fullWidth
                                sx={{ background: "#0E2542" }}
                            >
                                Close
                            </Button>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={handleModal}
                                sx={{ ml: 2, background: "#019DEA" }}
                            >
                                {" "}
                                Create
                            </Button>
                        </Box>
                    </Box>
                </div>
            </Modal>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        updateUserData: state.auth.apiStatus,
        userData: state.auth.userData,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onUpdateUser: (payload) => dispatch(updateUserApi(payload)),
    onSetUpdateUserApiStatus: () => dispatch(setAuthApiStatus()),
    getUser: (payload) => dispatch(getUserApi(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)