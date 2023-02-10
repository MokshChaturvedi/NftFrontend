import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import cryptonlogo from "../../assets/img/cryptonlogo.svg";
import searchicon from "../../assets/img/searchicon.svg";
import usericon from "../../assets/img/usericon.svg";
import walleticon from "../../assets/img/walleticon.svg";
import SearchResult from "../../common/SearchResult/SearchResult";
import { setLogout, getUserApi } from "../../redux/authSlice";
import { searchCollectionApi } from "../../redux/collectionSlice";
import { addWalletData } from "../../services/apiServices";
import walletplus from "../../assets/img/walletplus.svg";
import Mainlogo from "../../assets/img/logo.png";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard";

const Header = ({
  isLogin,
  onLogout,
  isLogout,
  onSearch,
  searchedData,
  getUser,
  userData,
}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [userDetail, setUserDetail] = useState({});

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
    addWalletData("/create-wallet", walletData).then((res) => {
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
        } else {
          toast.warning(res.data.message);
        }
      } else {
        setData(res.data);
      }
    });
  };

  const loginStatus = localStorage.getItem("isLogin");
  const login_Status = isLogin?.success;
  const role_type = localStorage.getItem("roleType");
  const roleType = isLogin?.role_type;

  const logout = () => {
    toast.success("Logout Success !!!");
    localStorage.clear();
    onLogout();
    window.location.reload(false);
  };

  const [searchText, setSearchText] = React.useState("");

  useEffect(() => {
    searchText.length > 0 && onSearch({ search: searchText });
  }, [searchText]);

  // Load user API
  useEffect(() => {
    let obj = {
      // userid: userData._id,
      accessToken: localStorage.getItem("accessToken"),
    };
    getUser(obj);
  }, []);

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
    if (userData && userData.data) {
      console.log("userData", userData)
      setUserDetail(userData.data);
    }
  }, [userData]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="logo">
              <a href="/">
                <img src={Mainlogo} alt="" />
              </a>
              {role_type === "admin" ? (
                <h6 className="mx-3 text-success">You are logged in as an admin</h6>
              ) : ("")}
            </div>
            <div className="header-right d-flex align-items-center set_header">
              <div className="side-menu">
                <div
                  className="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <button
                      type="button"
                      className="text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="menu-offcanvas">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/discover">Discover</a>
                        </li>
                        <li>
                          <a aria-current="page" href="/activity">
                            Activity
                          </a>
                        </li>
                        {loginStatus && !isLogout && (
                          <>
                            <li>
                              <a href="/change-password">Change Password</a>
                            </li>
                            <li>
                              <a href="/" onClick={logout}>
                                Logout
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {role_type === "admin" ? (

                <Link to={"/wallet"} className="btn btn-wallet">
                  <svg
                    data-name="Group 23"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.81"
                    height="24.898"
                  >
                    <path
                      data-name="Path 16"
                      d="M25.37 24.898H2.15a5.647 5.647 0 0 1-.66-.206A2.229 2.229 0 0 1 0 22.575V8.905a2.486 2.486 0 0 1 2.36-2.1c.73-.06 1.46-.02 2.19-.033a1.41 1.41 0 0 0 .66-.153q5.04-2.548 10.1-5.083c.91-.445 1.79-.942 2.73-1.334a2.8 2.8 0 0 1 1.89-.066 2.677 2.677 0 0 1 1.53 1.161c1.15 1.759 2.32 3.51 3.48 5.269a.647.647 0 0 0 .48.292 2.416 2.416 0 0 1 2.06 1.851 11.624 11.624 0 0 1 .05 1.865c.01.564-.25.783-.9.783h-4.02a9.675 9.675 0 0 0-.98.04 4.955 4.955 0 0 0-4.48 3.657 4.365 4.365 0 0 0 2.75 4.787 6.878 6.878 0 0 0 2.77.5c1.35.007 2.69 0 4.05 0 .54 0 .8.226.8.7q.015.776 0 1.553a2.008 2.008 0 0 1-.28 1.029 2.725 2.725 0 0 1-1.87 1.275ZM7.78 6.715a.079.079 0 0 0 .01.046H10a.569.569 0 0 0 .26-.08q4.815-2.429 9.64-4.844c.21-.106.21-.192.05-.332a1.456 1.456 0 0 0-1.63-.106q-5.16 2.6-10.34 5.2a1.648 1.648 0 0 0-.2.116Zm10.31.013a.824.824 0 0 0 .11.04c1.68 0 3.37 0 5.05.007.23 0 .19-.086.11-.206-.36-.544-.73-1.088-1.08-1.646-.12-.179-.22-.2-.42-.093-1 .518-2.02 1.022-3.02 1.526-.24.12-.48.24-.75.372Z"
                      fill="#fff"
                    />
                    <path
                      data-name="Path 17"
                      d="M28.81 17.903a2.124 2.124 0 0 1-2.29 1.38c-1.39-.027-2.78 0-4.18-.007a3.842 3.842 0 0 1-3.98-2.867 3.5 3.5 0 0 1 3.16-3.915 5.359 5.359 0 0 1 .79-.053c1.38 0 2.77.027 4.15-.007a2.166 2.166 0 0 1 2.35 1.34Zm-5.3-2.057a1.164 1.164 0 0 0-1.26-1.088 1.177 1.177 0 0 0-1.25 1.1 1.189 1.189 0 0 0 1.27 1.095 1.171 1.171 0 0 0 1.24-1.102Z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              ) : null}
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              {role_type === "admin" && (
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    type="button"
                    id="dropdownMenuLink"
                    aria-haspopup="true"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/collections">
                        My Collection
                      </a>
                    </li>
                    {/* <li><a className="dropdown-item" href="author-page.html">Author Page</a></li> */}
                    {/* <li><a className="dropdown-item" href="authors.html">Authors</a></li> */}
                    <li>
                      <a className="dropdown-item" href="/create-collection">
                        Create Collection
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/create-item">
                        Create Item's
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div>
                {(!loginStatus || isLogout) && (
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      type="button"
                      id="dropdownMenuLink"
                      aria-haspopup="true"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={usericon} alt="img" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <>
                        <li>
                          <a className="dropdown-item" href="/signin">
                            Sign in
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/signup">
                            Sign up
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/forgot-password">
                            Forgot password
                          </a>
                        </li>
                      </>
                    </ul>
                  </div>
                )}

              </div>
              {/* {(loginStatus === "true" || login_Status) && !isLogout && (
                <a className="btn" href="/wallet">
                  <img src={walleticon} alt="img" />
                </a>
              )} */}
              {/* For Mobile */}
              {loginStatus === "true" &&
                userDetail &&
                userDetail.username &&
                userDetail.username !== "" && (
                  <>
                    {role_type === "admin" &&
                      userDetail &&
                      userDetail.wallet_address &&
                      userDetail.wallet_address.length > 0 && (
                        <div className="mob-wallet">
                          <div className="wallet-btns">
                            {" "}
                            <p
                              className="mob-signup"
                              onClick={() => setOpenWalletAddress(true)}
                              style={{ color: "white" }}
                            >
                              {" "}
                              {userDetail &&
                                userDetail.wallet_address[0].replace(
                                  /(.{9})..+/,
                                  "$1..."
                                )}
                            </p>
                          </div>
                        </div>
                      )}
                  </>
                )}

            </div>
            <button
              className="bg-transparent btn-toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className="mobile-nav">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MUI Modal here */}
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

      {/* MUI Modal with Success wallet address */}

      <Modal
        open={openModalWithWallet}
        onClose={handleCloseWalletModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <Box>
              <Typography textAlign="center" variant="h5" component="div">
                Your Wallet Address
              </Typography>
            </Box>

            <Box
              sx={{ mt: 5, border: "1px solid silver", p: 3, borderRadius: 4 }}
            >
              <Typography textAlign="left" variant="subtitle1" component="p">
                {data && data.wallet_address}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                color={"black"}
                variant="subtitle2"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                component="p"
                onClick={() => {
                  if (
                    userDetail &&
                    userDetail.wallet_address &&
                    userDetail.wallet_address.length > 0
                  ) {
                    copy(userDetail.wallet_address[0], {
                      debug: true,
                      message: "Press #{key} to copy",
                    });
                    toast.success("Copied Success !!!");
                  }
                }}
              >
                Copy Address
              </Typography>
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
                onClick={handleCloseWalletModal}
                variant="contained"
                fullWidth
                sx={{ background: "#0E2542" }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </div>
      </Modal>

      {/* MUI modal with wallet address */}
      <Modal
        open={openWalletAddress}
        onClose={handleCloseWallet}
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
                Your Wallet Address
              </Typography>
            </Box>

            <Box
              sx={{ mt: 5, border: "1px solid silver", p: 3, borderRadius: 4 }}
            >
              <Typography
                color={"black"}
                textAlign="left"
                variant="subtitle1"
                component="p"
              >
                {userDetail &&
                  userDetail.wallet_address &&
                  userDetail.wallet_address.length > 0 &&
                  userDetail.wallet_address[0]}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                color={"black"}
                variant="subtitle2"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                component="p"
                onClick={() => {
                  if (
                    userDetail &&
                    userDetail.wallet_address &&
                    userDetail.wallet_address.length > 0
                  ) {
                    copy(userDetail.wallet_address[0], {
                      debug: true,
                      message: "Press #{key} to copy",
                    });
                    toast.success("Copied Success !!!");
                  }
                }}
              >
                Copy Address
              </Typography>
            </Box>
            {userDetail &&
              userDetail.wallet_address &&
              userDetail.wallet_address.length > 0 && (
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <QRCode
                    value={userDetail.wallet_address[0]}
                    renderAs="canvas"
                  />
                </Box>
              )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                mt: 5,
              }}
            >
              <Button
                onClick={handleCloseWallet}
                variant="contained"
                fullWidth
                sx={{ background: "#0E2542" }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.apiStatus,
    isLogout: state.auth.logout,
    searchedData: state.collection.searchCollectionApiStatus,
    userData: state.auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(setLogout()),
  onSearch: (payload) => dispatch(searchCollectionApi(payload)),
  getUser: (payload) => dispatch(getUserApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
