import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import constants from "../constants/constants";
import {
  createCollectionApi,
  setCollectionApiStatus,
} from "../redux/collectionSlice";
import { getUserApi } from "../redux/authSlice";

const CreateCollection = ({
  onCreateCollectionApi,
  createCollectionApiData,
  onSetCreateCollectionApiStatus,
  getUser,
  userData,
}) => {
  const history = useHistory();
  const [userWallet, setuserWallet] = useState([]);
  const [collectionName, setCollectionName] = useState("");
  const [collectionWebsite, setCollectionWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [policyId, setPolicyId] = useState("");
  const [royalty, setRoyalty] = useState("");
  const [royaltyAddress, setRoyaltyAddress] = useState("");
  const [password, setWalletPassword] = useState("");
  const [collectionCategories, setCollectionCategories] = useState("");
  const [walletName, setwalletName] = useState("");
  const [walletaddress, setWalletAddress] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [instagram, setInstagram] = useState("");
  const [additionalLink, setAdditionalLink] = useState("");
  const [logoImage, setLogoImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [featureImage, setFeatureImage] = useState("");
  const [tempLogoImage, setTempLogoImage] = useState("");
  const [tempBannerImage, setTempBannerImage] = useState("");
  const [tempFeatureImage, setTempFeatureImage] = useState("");
  const [userDetail, setUserDetail] = useState({});

  const handWalletData = (e) => {

    let name = e.target.name;
    let Value = e.target.value;
    if (name === "royaltyAddress") {
      setRoyaltyAddress(Value)
    }
    if (name === 'wallet') {
      console.log("name", name)
      let data = JSON.parse(Value);
      console.log("data", data)
      setWalletAddress(data.wallet_address);
      setwalletName(data.wallet_name);



    }
    // setWalletData({ ...walletData, [name]: Value });

  }

  const handleLogoImage = (e) => {
    setLogoImage(e.target.files[0]);
    // temp image show
    setTempLogoImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlebannerImage = (e) => {
    setBannerImage(e.target.files[0]);
    // temp image show
    setTempBannerImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlefeatureImage = (e) => {
    setFeatureImage(e.target.files[0]);
    // temp image show
    setTempFeatureImage(URL.createObjectURL(e.target.files[0]));
  };

  const removeLogoImage = () => {
    setLogoImage("");
    setTempLogoImage("");
  };
  const removeBannerImage = () => {
    setBannerImage("");
    setTempBannerImage("");
  };
  const removeFeatureImage = () => {
    setFeatureImage("");
    setTempFeatureImage("");
  };

  // Load user API
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

  let walletAddress = localStorage.getItem("walletAddress");


  const handleCreate = () => {
    var data = new FormData();
    // data.append("wallet_address", userDetail && userDetail.wallet_address && userDetail.wallet_address.length > 0 && userDetail.wallet_address[0]);
    data.append("collection_name", collectionName);
    // data.append("walletaddress", "fkdjfklsdjlf");

    data.append("collection_website", collectionWebsite);
    data.append("description", description);
    data.append("policy_Id", policyId);
    data.append("royalties", royalty);
    data.append("royalties_address", royaltyAddress);
    data.append("collection_categories", collectionCategories);
    data.append("twitter", twitter);
    data.append("discord", discord);
    data.append("instagram", instagram);
    data.append("additional_link", additionalLink);
    data.append("logo_image", logoImage);
    data.append("banner_image", bannerImage);
    data.append("feature_image", featureImage);
    data.append("wallet_name", walletName);
    data.append("wallet_address", walletaddress);
    data.append("wallet_password", password)
    // console.log("get walletaddress", data.wallet_address);
    // if (!walletAddress) {
    //   toast.warning("Please Connect Wallet");
    // } else 
    if (!collectionName) {
      toast.warning("Please Enter Collection Name");
    } else if (!description) {
      toast.warning("Please Enter Description");
    }
    // else if (!policyId) {
    //     toast.warning("Please Enter Policy ID")
    // }
    else if (!royalty) {
      toast.warning("Please Enter Royalty");
    } else if (!royaltyAddress) {
      toast.warning("Please Enter Royalty Address");
    } else if (!collectionCategories) {
      toast.warning("Please Select Categories");
    } else if (!logoImage) {
      toast.warning("Please Select Logo Image");
    } else if (!bannerImage) {
      toast.warning("Please Select Banner Image");
    } else {
      onCreateCollectionApi(data);
    }
  };

  const handleCreateCollectionApiStatus = () => {
    if (createCollectionApiData?.success) {
      toast.success(createCollectionApiData?.msg);
      history.push("/collections");
    } else {
      toast.error(createCollectionApiData?.data?.error?.msg);
    }
  };

  useEffect(() => {
    handleCreateCollectionApiStatus();
    return () => {
      onSetCreateCollectionApiStatus();
    };
  }, [createCollectionApiData]);

  console.log("userDataAaman", userData)


  return (
    <div className="create-items mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 create-form-outer">
            <div className="title-heading mb-4 pb-2 pb-lg-0 ">
              <h2 className="headingWh ">Create Collectible Collection</h2>
              <p>
                Meet the rules of NFT-art placement in{" "}
                <a href="#">our help center</a>
              </p>
            </div>
            <div className="create-form">
              {/* <form> */}
              <div className="row">
                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                  <label>Collection Name</label>
                  <input
                    type="text"
                    placeholder="Collection Name"
                    className="form-control"
                    value={collectionName}
                    onChange={(e) => setCollectionName(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                  <label>Collection Website</label>
                  <input
                    type="url"
                    placeholder="Collection Website"
                    className="form-control"
                    value={collectionWebsite}
                    onChange={(e) => setCollectionWebsite(e.target.value)}
                  />
                </div>
                <div className="col-xl-12 pb-md-4 pb-3">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter the description"
                    defaultValue={""}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ color: "white" }}
                  />
                </div>
                {/* <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Policy Id</label>
                                    <input type="text" placeholder="Policy Id" className="form-control" value={policyId} onChange={e => setPolicyId(e.target.value)} />
                                </div> */}
                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                  <label>Royalties</label>
                  <input
                    type="number"
                    placeholder=" 0,10,20% or more"
                    className="form-control"
                    value={royalty}
                    onChange={(e) => setRoyalty(e.target.value)}
                  />
                </div>

                <div className="col-md-6 pb-md-4 pb-3">
                  <label>Collection Categories</label>
                  <div className="btn-group w-100">
                    <select
                      className="form-select filterbtn"
                      value={collectionCategories}
                      onChange={(e) => setCollectionCategories(e.target.value)}
                    >
                      <option value="" className="dropdown-item">
                        Select Categories
                      </option>
                      <option value="Art" className="dropdown-item">
                        Art
                      </option>
                      <option value="Digital" className="dropdown-item">
                        Digital
                      </option>
                      <option value="Gaming" className="dropdown-item">
                        Gaming
                      </option>
                      <option value="Memes" className="dropdown-item">
                        Memes
                      </option>
                      <option value="Music" className="dropdown-item">
                        Music
                      </option>
                      <option value="News" className="dropdown-item">
                        News
                      </option>
                      <option value="Photography" className="dropdown-item">
                        Photography
                      </option>
                      <option value="Sports" className="dropdown-item">
                        Sports
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                  <label>Royalty Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="royaltyAddress"
                    value={royaltyAddress}
                    onChange={handWalletData}
                  />
                </div>
                <div className="col-md-6 pb-md-4 pb-3">
                  <label>Select Wallet</label>
                  <div className="btn-group w-100">
                    <select
                      className="form-select filterbtn"

                      name="wallet"
                      onChange={handWalletData}
                    >
                      <option value="" className="dropdown-item">
                        Select Categories
                      </option>
                      {userWallet?.map((elemt, ind, arr) => {
                        return elemt?.wallet_used?.used == true ? (
                          <option value={""} disabled="disabled" className="dropdown-item">
                            {`${elemt.wallet_name} (Already in used by  ${elemt.wallet_used.collection_name})`}
                          </option>
                        ) : (
                          <option value={JSON.stringify({ wallet_name: elemt.wallet_name, wallet_address: elemt?.response?.paymentAddr })} className="dropdown-item">
                            {elemt.wallet_name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                  <label>Wallet Address</label>
                  <input
                    type="text"
                    value={walletaddress}
                    className="form-control"
                    onChange={handWalletData}
                    disabled
                  />
                </div>
                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                  <label>Wallet password</label>
                  <input
                    type="password"
                    value={password}
                    className="form-control"
                    onChange={(e) => setWalletPassword(e.target.value)}
                    placeholder="Create wallet password"
                  />
                </div>

                <div className="col-xl-12 col-md-12 pb-md-4 pb-3">
                  <label>Social Media</label>
                  <input
                    type="url"
                    placeholder="Twiiter Link"
                    className="form-control my-2"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                  <input
                    type="url"
                    placeholder="Discord Link"
                    className="form-control my-2"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                  />
                  <input
                    type="url"
                    placeholder="Instagram Link"
                    className="form-control my-2"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                  <input
                    type="url"
                    placeholder="Additional Link"
                    className="form-control my-2"
                    value={additionalLink}
                    onChange={(e) => setAdditionalLink(e.target.value)}
                  />
                </div>

                <div className="col-lg-12 pt-3 d-none d-lg-block ">
                  <button
                    className="btn btnlightblue m-auto m-md-0 d-table d-md-block"
                    onClick={handleCreate}
                  >
                    Create
                  </button>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="create-form">
              <div className="row">
                <div className="col-xl-12 col-md-12 pb-md-4 pb-3 ">
                  <div className="img-choosen">
                    <input
                      className="image-upload-input"
                      type="file"
                      onChange={handleLogoImage}
                      accept="image/*"
                    />
                    <img
                      src="img/single.svg"
                      className="img-fluid"
                      alt="choose img"
                    />
                    <label>Logo Image</label>
                  </div>
                  {tempLogoImage && (
                    <div className="file-upload-content mt-3 d-block">
                      <div className="title-wrapouter">
                        <div className="uploaded-img">
                          <img
                            className="file-upload-image"
                            src={tempLogoImage}
                            alt="your image"
                          />
                        </div>
                        <div className="image-title-wrap d-block">
                          <span className="image-title">{logoImage?.name}</span>
                          <button
                            type="button"
                            onClick={removeLogoImage}
                            className="remove-image"
                          >
                            {" "}
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-xl-12 col-md-12 pb-md-4 pb-3 ">
                  <div className="img-choosen">
                    <input
                      className="image-upload-input"
                      type="file"
                      onChange={handlebannerImage}
                      accept="image/*"
                    />
                    <img
                      src="img/multiple.svg"
                      className="img-fluid"
                      alt="choose img"
                    />
                    <label>Banner Image</label>
                  </div>
                  {tempBannerImage && (
                    <div className="file-upload-content mt-3 d-block">
                      <div className="title-wrapouter">
                        <div className="uploaded-img">
                          <img
                            className="file-upload-image"
                            src={tempBannerImage}
                            alt="your image"
                          />
                        </div>
                        <div className="image-title-wrap d-block">
                          <span className="image-title">
                            {bannerImage?.name}
                          </span>
                          <button
                            type="button"
                            onClick={removeBannerImage}
                            className="remove-image"
                          >
                            {" "}
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-xl-12 col-md-12 pb-md-4 pb-3 ">
                  <div className="img-choosen">
                    <input
                      className="image-upload-input"
                      type="file"
                      onChange={handlefeatureImage}
                      accept="image/*"
                    />
                    <img
                      src="img/multiple.svg"
                      className="img-fluid"
                      alt="choose img"
                    />
                    <label>Feature Image</label>
                  </div>
                  {tempFeatureImage && (
                    <div className="file-upload-content mt-3 d-block">
                      <div className="title-wrapouter">
                        <div className="uploaded-img">
                          <img
                            className="file-upload-image"
                            src={tempFeatureImage}
                            alt="your image"
                          />
                        </div>
                        <div className="image-title-wrap d-block">
                          <span className="image-title">
                            {featureImage?.name}
                          </span>
                          <button
                            type="button"
                            onClick={removeFeatureImage}
                            className="remove-image"
                          >
                            {" "}
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 pt-1 mb-2 ">
              <button
                className="btn btnlightblue savebtn d-block m-auto d-lg-none"
                onClick={handleCreate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    createCollectionApiData: state.collection.apiStatus,
    userData: state.auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCreateCollectionApi: (payload) => dispatch(createCollectionApi(payload)),
  onSetCreateCollectionApiStatus: () => dispatch(setCollectionApiStatus()),
  getUser: (payload) => dispatch(getUserApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCollection);
