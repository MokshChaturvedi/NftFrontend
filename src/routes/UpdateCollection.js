import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateCollectionApi, setCollectionApiStatus, getCollectionByIdApi } from '../redux/collectionSlice'
import NotFound from './NotFound'
import single from '../assets/img/single.svg'
import multiple from '../assets/img/multiple.svg'
import backendUrl from "../constants/constants"

const UpdateCollection = ({
    onGetCollectionByIdApi,
    getCollectionByIdData,
    onUpdateCollectionApi,
    updateCollectionApiData,
    onSetUpdateCollectionApiStatus
}) => {

    const history = useHistory()
    const params = useParams();
    const id = params?.id
    let walletAddress = localStorage.getItem("walletAddress")

    const oldCollectionName = getCollectionByIdData?.data?.data?.collection?.collection_name
    const oldCollectionWebsite = getCollectionByIdData?.data?.data?.collection?.collection_website
    const oldDescription = getCollectionByIdData?.data?.data?.collection?.description
    const oldPolicyId = getCollectionByIdData?.data?.data?.collection?.policy_Id
    const oldRoyalty = getCollectionByIdData?.data?.data?.collection?.royalties
    const oldRoyaltyAddress = getCollectionByIdData?.data?.data?.collection?.royalties_address
    const oldCollectionCategories = getCollectionByIdData?.data?.data?.collection?.collection_categories
    const oldTwitter = getCollectionByIdData?.data?.data?.collection?.twitter
    const oldDiscord = getCollectionByIdData?.data?.data?.collection?.discord
    const oldInstagram = getCollectionByIdData?.data?.data?.collection?.instagram
    const oldAdditionalLink = getCollectionByIdData?.data?.data?.collection?.additional_link
    const oldLogoImage = getCollectionByIdData?.data?.data?.collection?.logo_image?.replace("public", backendUrl.BACKEND_URL);
    const oldBannerImage = getCollectionByIdData?.data?.data?.collection?.banner_image?.replace("public", backendUrl.BACKEND_URL);
    const oldFeatureImage = getCollectionByIdData?.data?.data?.collection?.feature_image?.replace("public", backendUrl.BACKEND_URL);


    const [collectionName, setCollectionName] = useState(oldCollectionName)
    const [collectionWebsite, setCollectionWebsite] = useState(oldCollectionWebsite)
    const [description, setDescription] = useState(oldDescription)
    const [policyId, setPolicyId] = useState(oldPolicyId)
    const [royalty, setRoyalty] = useState(oldRoyalty)
    const [royaltyAddress, setRoyaltyAddress] = useState(oldRoyaltyAddress)
    const [collectionCategories, setCollectionCategories] = useState(oldCollectionCategories)
    const [twitter, setTwitter] = useState(oldTwitter)
    const [discord, setDiscord] = useState(oldDiscord)
    const [instagram, setInstagram] = useState(oldInstagram)
    const [additionalLink, setAdditionalLink] = useState(oldAdditionalLink)
    const [logoImage, setLogoImage] = useState(oldLogoImage)
    const [bannerImage, setBannerImage] = useState(oldBannerImage)
    const [featureImage, setFeatureImage] = useState(oldFeatureImage)
    const [tempLogoImage, setTempLogoImage] = useState(oldLogoImage)
    const [tempBannerImage, setTempBannerImage] = useState(oldBannerImage)
    const [tempFeatureImage, setTempFeatureImage] = useState(oldFeatureImage)

    useEffect(() => {
        setCollectionName(oldCollectionName);
        setCollectionWebsite(oldCollectionWebsite);
        setDescription(oldDescription)
        setPolicyId(oldPolicyId)
        setRoyalty(oldRoyalty)
        setRoyaltyAddress(oldRoyaltyAddress)
        setTwitter(oldTwitter)
        setDiscord(oldDiscord)
        setInstagram(oldInstagram)
        setAdditionalLink(oldAdditionalLink)
        setLogoImage(oldLogoImage)
        setBannerImage(oldBannerImage)
        setFeatureImage(oldFeatureImage)
        setTempLogoImage(oldLogoImage)
        setTempBannerImage(oldBannerImage)
        setTempFeatureImage(oldFeatureImage)
    }, [getCollectionByIdData])

    const handleLogoImage = (e) => {
        setLogoImage(e.target.files[0])
        // temp image show
        setTempLogoImage(URL.createObjectURL(e.target.files[0]));
    }

    const handlebannerImage = (e) => {
        setBannerImage(e.target.files[0])
        // temp image show
        setTempBannerImage(URL.createObjectURL(e.target.files[0]));
    }

    const handlefeatureImage = (e) => {
        setFeatureImage(e.target.files[0])
        // temp image show
        setTempFeatureImage(URL.createObjectURL(e.target.files[0]));
    }

    const removeLogoImage = () => {
        setLogoImage('')
        setTempLogoImage('');
    }
    const removeBannerImage = () => {
        setBannerImage('')
        setTempBannerImage('');
    }
    const removeFeatureImage = () => {
        setFeatureImage('')
        setTempFeatureImage('');
    }

    var data = new FormData();
    data.append("wallet_address", walletAddress)
    data.append("collection_id", id)
    data.append("collection_website", collectionWebsite);
    data.append("description", description);
    data.append("collection_categories", collectionCategories);
    data.append("twitter", twitter);
    data.append("discord", discord);
    data.append("instagram", instagram);
    data.append("additional_link", additionalLink);
    data.append("logo_image", logoImage);
    data.append("banner_image", bannerImage);
    data.append("feature_image", featureImage);

    const handleUpdate = () => {
        if (!walletAddress) {
            toast.warning("Please Connect Wallet")
        }
        else if (!collectionName) {
            toast.warning("Please Enter Collection Name")
        }
        else if (!description) {
            toast.warning("Please Enter Description")
        }
        // else if (!policyId) {
        //     toast.warning("Please Enter Policy ID")
        // }
        else if (!royalty) {
            toast.warning("Please Enter Royalty")
        }
        else if (!royaltyAddress) {
            toast.warning("Please Enter Royalty Address")
        }
        else if (!collectionCategories) {
            toast.warning("Please Select Categories")
        }
        else if (!logoImage) {
            toast.warning("Please Select Logo Image")
        }
        else if (!bannerImage) {
            toast.warning("Please Select Banner Image")
        }
        else {
            onUpdateCollectionApi(data)
        }
    }

    const handleUpdateCollectionApiStatus = () => {
        if (updateCollectionApiData?.success) {
            toast.success(updateCollectionApiData?.msg)
            history.push('/collections')
        }
        else {
            toast.error(updateCollectionApiData?.data?.error?.msg)
        }
    }

    useEffect(() => {
        let id = params?.id
        onGetCollectionByIdApi(id)
    }, [])

    useEffect(() => {
        handleUpdateCollectionApiStatus()
        return () => {
            onSetUpdateCollectionApiStatus()
        }
    }, [updateCollectionApiData])

    if (getCollectionByIdData?.data?.data?.error?.msg === "Collection Id not found") {
        return <NotFound data={"Collection"} />
    }

    return (
        <div className="create-items mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 create-form-outer">
                        <div className="title-heading mb-4 pb-2 pb-lg-0 ">
                            <h2 className="headingWh ">Update Collectible Collection</h2>
                            <p>Meet the rules of NFT-art placement in <a href="#">our help center</a></p>
                        </div>
                        <div className="create-form">
                            {/* <form> */}
                            <div className="row">
                                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Collection Name</label>
                                    <input type="text" disabled placeholder="Collection Name" className="form-control" value={collectionName} onChange={e => setCollectionName(e.target.value)} />
                                </div>
                                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Collection Website</label>
                                    <input type="text" placeholder="Collection Website" className="form-control" value={collectionWebsite} onChange={e => setCollectionWebsite(e.target.value)} />
                                </div>
                                <div className="col-xl-12 pb-md-4 pb-3">
                                    <label>Description</label>
                                    <textarea className="form-control" placeholder="Enter the description" defaultValue={description} onChange={e => setDescription(e.target.value)} style={{ color: "white" }} />
                                </div>
                                {/* <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Policy Id</label>
                                    <input type="text" disabled placeholder="Policy Id" className="form-control" value={policyId} onChange={e => setPolicyId(e.target.value)} />
                                </div> */}
                                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Royalties</label>
                                    <input type="number" disabled placeholder=" 0,10,20% or more" className="form-control" value={royalty} onChange={e => setRoyalty(e.target.value)} />
                                </div>

                                <div className="col-md-6 pb-md-4 pb-3">
                                    <label>Collection Categories</label>
                                    <div className="btn-group w-100">
                                        <select className="form-select filterbtn" value={collectionCategories} onChange={(e) => setCollectionCategories(e.target.value)}>
                                            <option value='' className="dropdown-item">Select Categories</option>
                                            <option value="Art" className="dropdown-item" >Art</option>
                                            <option value="Music" className="dropdown-item" >Music</option>
                                            <option value="Gaming" className="dropdown-item" >Gaming</option>
                                            <option value="Photography" className="dropdown-item" >Photography</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Royalty Address</label>
                                    <input type="text" disabled placeholder="02138234858zxnfjshdi2384923" className="form-control" value={royaltyAddress} onChange={e => setRoyaltyAddress(e.target.value)} />
                                </div>
                                <div className="col-xl-12 col-md-12 pb-md-4 pb-3">
                                    <label>Social Media</label>
                                    <input type="text" placeholder="Twiiter" className="form-control my-2" value={twitter} onChange={e => setTwitter(e.target.value)} />
                                    <input type="text" placeholder="Discord" className="form-control my-2" value={discord} onChange={e => setDiscord(e.target.value)} />
                                    <input type="text" placeholder="Instagram" className="form-control my-2" value={instagram} onChange={e => setInstagram(e.target.value)} />
                                    <input type="text" placeholder="Additional Link" className="form-control my-2" value={additionalLink} onChange={e => setAdditionalLink(e.target.value)} />
                                </div>

                                <div className="col-lg-12 pt-3 d-none d-lg-block ">
                                    <button className="btn btnlightblue m-auto m-md-0 d-table d-md-block" onClick={handleUpdate}>Update</button>
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
                                        <input className='image-upload-input' type="file" onChange={handleLogoImage} accept="image/*" />
                                        <img src={single} className="img-fluid" alt="choose img" />
                                        <label>Logo Image</label>
                                    </div>
                                    {tempLogoImage &&
                                        <div className="file-upload-content mt-3 d-block">
                                            <div className="title-wrapouter">
                                                <div className="uploaded-img">
                                                    <img className="file-upload-image" src={tempLogoImage} alt="your image" />
                                                </div>
                                                <div className="image-title-wrap d-block">
                                                    <span className="image-title">{logoImage?.name}</span>
                                                    <button type="button" onClick={removeLogoImage} className="remove-image"> Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="col-xl-12 col-md-12 pb-md-4 pb-3 ">
                                    <div className="img-choosen">
                                        <input className='image-upload-input' type="file" onChange={handlebannerImage} accept="image/*" />
                                        <img src={multiple} className="img-fluid" alt="choose img" />
                                        <label>Banner Image</label>
                                    </div>
                                    {tempBannerImage &&
                                        <div className="file-upload-content mt-3 d-block">
                                            <div className="title-wrapouter">
                                                <div className="uploaded-img">
                                                    <img className="file-upload-image" src={tempBannerImage} alt="your image" />
                                                </div>
                                                <div className="image-title-wrap d-block">
                                                    <span className="image-title">{bannerImage?.name}</span>
                                                    <button type="button" onClick={removeBannerImage} className="remove-image"> Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="col-xl-12 col-md-12 pb-md-4 pb-3 ">
                                    <div className="img-choosen">
                                        <input className='image-upload-input' type="file" onChange={handlefeatureImage} accept="image/*" />
                                        <img src={multiple} className="img-fluid" alt="choose img" />
                                        <label>Feature Image</label>
                                    </div>
                                    {tempFeatureImage &&
                                        <div className="file-upload-content mt-3 d-block">
                                            <div className="title-wrapouter">
                                                <div className="uploaded-img">
                                                    <img className="file-upload-image" src={tempFeatureImage} alt="your image" />
                                                </div>
                                                <div className="image-title-wrap d-block">
                                                    <span className="image-title">{featureImage?.name}</span>
                                                    <button type="button" onClick={removeFeatureImage} className="remove-image"> Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-1 mb-2 ">
                            <button className="btn btnlightblue savebtn d-block m-auto d-lg-none" onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        updateCollectionApiData: state.collection.apiStatus,
        getCollectionByIdData: state.collection.getCollectionByIdApiStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetCollectionByIdApi: (payload) => dispatch(getCollectionByIdApi(payload)),
    onUpdateCollectionApi: (payload) => dispatch(updateCollectionApi(payload)),
    onSetUpdateCollectionApiStatus: () => dispatch(setCollectionApiStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCollection)