import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createCollectionItemApi, getCollectionByUserApi, setCollectionApiStatus } from '../redux/collectionSlice'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';
import constants from '../constants/constants'


const CreateItem = ({
    onGetCollectionByUserApi,
    getCollectionByUserData,
    onCreateCollectionItemApi,
    createCollectionItemApiData,
    onSetCreateCollectionItemApiStatus
}) => {

    const history = useHistory()
    const walletAddress = localStorage.getItem("walletAddress")

    const [auctionStartTime, setAuctionStartTime] = useState(new Date());
    const [auctionEndTime, setAuctionEndTime] = useState(new Date())
    const [singleImage, setSingleImage] = useState('')
    const [multipleImage, setMultipleImage] = useState([])
    const [uploadFile, setUploadFile] = useState('')
    const [uploadMetaFile, setUploadMetaFile] = useState('')
    const [price, setPrice] = useState('')
    const [openBid, setOpenBid] = useState(false)
    const [collectionId, setCollectionId] = useState(null);
    const [collectionType, setCollectionType] = useState(null)
    const [itemName, setItemName] = useState('')
    const [description, setDescription] = useState('')
    const [unlockPurchased, setUnlockPurchased] = useState(false)
    const [tempFileShow, setTempFileShow] = useState('')
    const [tempUploadFile, setTempUploadFile] = useState('')
    const [tempUploadMetaFile, setTempUploadMetaFile] = useState('');
    const [password, setWalletPassword] = useState("");
    const [walletName, setWalletName] = useState("");
    const [getwalletAddress, setwalletAddress] = useState("");



    const chooseCollectionData = getCollectionByUserData && getCollectionByUserData?.data?.data?.map((e) => e)

    console.log("onSetCreateCollectionItemApiStatus", chooseCollectionData)

    const handleSetSingleImage = (e) => {
        setSingleImage(e.target.files[0])

        // for temp image shown
        if (e.target.files && e.target.files[0]) {
            setTempFileShow(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleSetMultipleImage = (e) => {
        let values = e.target
        for (var i = 0; i < values.files.length; i++) {
            setMultipleImage(values.files[i])
            console.log(values.files[i]);
        }
    }

    const handleSetUploadFile = (e) => {
        console.log("e.target.files[0]", e.target.files[0])
        setUploadFile(e.target.files[0])
        setTempUploadFile(URL.createObjectURL(e.target.files[0]));
    }

    const removeUploadFile = () => {
        setUploadFile('')
        setTempUploadFile(null)
    }

    const handleSetUploadMetaFile = e => {
        const fileReader = new FileReader();
        // console.log("e.target.files[0]",e.target.files[0])
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            console.log("e.target.result", JSON.stringify(e.target.result));
            setUploadMetaFile(e.target.result);
            setTempUploadMetaFile(JSON.stringify(e.target.result));
        };
    };





    const removemetaUploadFile = () => {
        setUploadMetaFile('')
        setTempUploadMetaFile(null)
    }

    var data = new FormData();
    data.append("wallet_address", getwalletAddress);
    data.append("wallet_name", walletName);
    data.append("wallet_password", password);
    // data.append("single_image", singleImage );
    // data.append("multiple_image", multipleImage);
    data.append("upload_file", uploadFile);
    console.log("upload_file", uploadFile)
    data.append('upload_meta_file', uploadMetaFile)
    data.append("price", price);
    data.append("open_for_bids", openBid);
    data.append("collection_id", collectionId);
    data.append("user_name", collectionId)
    // data.append("choose_collection", collectionType);
    data.append("item_name", itemName);
    data.append("description", description);
    data.append("unlock_once_purchased", unlockPurchased);
    openBid && data.append("auction_start_date", auctionStartTime);
    openBid && data.append("auction_end_date", auctionEndTime);

    var diff = auctionEndTime.valueOf() - auctionStartTime.valueOf();
    var diffInHours = diff / 1000 / 60 / 60;

    const handleCreate = () => {
        // if (!walletAddress) {
        //     toast.warning("Wallet Not Connected")
        // }
        // else 
        if (!uploadFile) {
            toast.warning("Please Select File")
        }
        else if (!price) {
            toast.warning("Please Enter ItemPrice")
        }
        else if (price < 1) {
            toast.warning("Item Price Must Be More Than Zero")
        }
        else if (!collectionId) {
            toast.warning("Please Select Collection")
        }
        else if ((openBid && !(diffInHours > 1))) {
            toast.warning("End Date Must Be Greater Then Start Date ")
        }
        else if (!itemName) {
            toast.warning("Please Enter Item Name")
        }
        else if (!description) {
            toast.warning("Please Enter Item Description")
        }
        else {
            console.log("Itemdata", data);
            onCreateCollectionItemApi(data)
        }
    }

    const getWalletByCollection = async (e) => {

        if (e.target.name === "collectionName") {

            const headers = {
                'Authorization': "Bearer " + localStorage.getItem("accessToken"),
                'Content-Type': 'application/json'
            }

            try {
                const collection_Data = { collection_id: e.target.value }
                setCollectionId(e.target.value)
                axios.post(`${constants.BACKEND_URL}/item/get-Wallet-by-collection`, collection_Data, { headers: headers }).then((res) => {
                    console.log("res", res.data);
                    setWalletName(res.data.data.wallet.wallet_name);
                    setwalletAddress(res.data.data.wallet.wallet_address);

                    // setuserWallet(res.data.data)
                }).catch((err) => {
                    console.log(err)
                })
            } catch (error) {
                console.log(error)
            }


        }
    }

    getWalletByCollection();

    const handleCreateCollectionItemApiStatus = () => {
        if (createCollectionItemApiData?.success) {
            toast.success(createCollectionItemApiData?.msg)
            history.push(`/collection/${collectionId}`)
        }
        else {
            toast.error(createCollectionItemApiData?.data?.error?.msg)
        }
    }

    useEffect(() => {
        onGetCollectionByUserApi()
    }, [])

    useEffect(() => {
        handleCreateCollectionItemApiStatus()
        return () => {
            onSetCreateCollectionItemApiStatus()
        }
    }, [createCollectionItemApiData])

    return (
        <div className="create-items mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 create-form-outer">
                        <div className="title-heading mb-4 pb-2 pb-lg-0 ">
                            <h2 className="headingWh ">Create collectible item</h2>
                            <p>Meet the rules of NFT-art placement in <a href="#">our help center</a></p>
                        </div>
                        <div className="create-form">
                            {/* <form> */}
                            <div className="row">
                                {/* <div className="col-6 pb-md-4 pb-3 ">
                                        <div className="img-choosen">
                                            <input className='image-upload-input' type="file" onChange={handleSetSingleImage} accept="image/*" />
                                            <img src="img/single.svg" className="img-fluid" alt="choose img" />
                                            <label>Single Image</label>
                                        </div>
                                    </div>
                                    <div className="col-6 pb-md-4 pb-3 ">
                                        <div className="img-choosen">
                                            <input className='image-upload-input' type="file" onChange={handleSetMultipleImage} accept="image/*" multiple/>
                                            <img src="img/multiple.svg" className="img-fluid" alt="choose img" />
                                            <label>Multiple Image</label>
                                        </div>
                                    </div> */}
                                <div className="col-lg-12 pb-md-4 pb-3">
                                    <label>Upload file</label>
                                    <div className="custom-file-upload">
                                        <div className="file-upload">
                                            <div className="image-upload-wrap">
                                                <input className="file-upload-input" type="file" onChange={handleSetUploadFile} accept="image/* , video/mp4 , audio/mp3" />
                                                <div className="drag-text">
                                                    <img src="img/upload-icon.svg" className="img-fluid" alt="upload icon" />
                                                </div>
                                            </div>
                                            {tempUploadFile &&
                                                <div className="file-upload-content mt-3 d-block">
                                                    <div className="title-wrapouter">
                                                        <div className="uploaded-img">
                                                            {uploadFile?.type?.includes("image") &&
                                                                <img className="file-upload-image" src={tempUploadFile} alt="your image" />
                                                            }
                                                            {uploadFile?.type?.includes("video") &&
                                                                <video className="file-upload-image" controls>
                                                                    <source src={tempUploadFile} />
                                                                </video>
                                                            }
                                                        </div>
                                                        <div className="image-title-wrap d-block">
                                                            <span className="image-title">{uploadFile?.name}</span>
                                                            <button type="button" onClick={removeUploadFile} className="remove-image">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-6 pb-md-4 pb-3">
                                    <label>Price in ADA</label>
                                    <input type="number" placeholder="Price" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
                                </div>
                                <div className="col-md-5 col-6 pb-md-4 pb-3">
                                    <label>Open for Bids</label>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" defaultChecked={openBid} onChange={() => setOpenBid(!openBid)} />
                                    </div>
                                </div>

                                {openBid &&
                                    <>
                                        <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                            <label>Auction Start Time</label>
                                            <div className="btn-group w-100 dateTimePicker">
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DateTimePicker
                                                        renderInput={(props) => <TextField {...props} />}
                                                        label="Start Date"
                                                        value={auctionStartTime}
                                                        onChange={(newValue) => {
                                                            setAuctionStartTime(newValue);
                                                        }}
                                                        minDate={auctionStartTime}
                                                        minTime={new Date()}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                            <label>Auction End Time</label>
                                            <div className="btn-group w-100 dateTimePicker">
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DateTimePicker
                                                        renderInput={(props) => <TextField {...props} />}
                                                        label="End Date"
                                                        value={auctionEndTime}
                                                        onChange={(newValue) => {
                                                            setAuctionEndTime(newValue);
                                                        }}
                                                        minDate={auctionStartTime}
                                                        minTime={auctionStartTime}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                    </>
                                }

                                <div className="col-md-7 pb-md-4 pb-3">
                                    <label>Choose collection</label>
                                    <div className="btn-group w-100">
                                        <select className="form-select filterbtn" name='collectionName' value={collectionId} onChange={getWalletByCollection}>
                                            <option value='' className="dropdown-item">Choose collection</option>
                                            {
                                                chooseCollectionData && chooseCollectionData?.map((e, i) =>
                                                    <option value={e?._id} className="dropdown-item" key={i}>{e?.collection_name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-5 col-6 pb-md-4 pb-3">
                                    <label>Unlock once purchased</label>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" defaultChecked={unlockPurchased} onChange={() => setUnlockPurchased(!unlockPurchased)} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Wallet Name</label>
                                    <input
                                        type="text"
                                        value={walletName}
                                        className="form-control"
                                        disabled
                                    />
                                </div>
                                <div className="col-xl-6 col-md-12 pb-md-4 pb-3">
                                    <label>Wallet Address</label>
                                    <input
                                        type="text"
                                        value={getwalletAddress}
                                        className="form-control"
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
                                <div className="col-xl-9 pb-md-4 pb-3">
                                    <label>Item Name</label>
                                    <input type="text" placeholder="Enter Name" className="form-control" value={itemName} onChange={e => setItemName(e.target.value)} />
                                </div>
                                <div className="col-xl-9 pb-md-4 pb-3">
                                    <label>Description</label>
                                    <textarea className="form-control" style={{ color: "white" }} placeholder="Enter the description" value={description} onChange={e => setDescription(e.target.value)} />
                                </div>
                                <div className="col-lg-12 pb-md-4 pb-3">
                                    <label>Upload metafile</label>
                                    <div className="custom-file-upload">
                                        <div className="file-upload">
                                            <div className="image-upload-wrap">
                                                <input className="file-upload-input" type="file" onChange={handleSetUploadMetaFile} accept="image/* , video/mp4 , audio/mp3,.json" />
                                                <div className="drag-text">
                                                    <img src="img/upload-icon.svg" className="img-fluid" alt="upload icon" />
                                                </div>
                                            </div>
                                            {tempUploadMetaFile &&
                                                <div className="file-upload-content mt-3 d-block">
                                                    <div className="title-wrapouter">
                                                        <div className="uploaded-img">
                                                            {uploadMetaFile?.type?.includes("image") &&
                                                                <img className="file-upload-image" src={tempUploadMetaFile} alt="your image" />
                                                            }

                                                            {uploadMetaFile?.type?.includes("file") &&
                                                                <file className="file-upload-image" controls>
                                                                    <source src={tempUploadMetaFile} />
                                                                </file>
                                                            }

                                                        </div>
                                                        <div className="image-title-wrap d-block">
                                                            <span className="image-title">{uploadMetaFile?.name}</span>
                                                            <button type="button" onClick={removemetaUploadFile} className="remove-image"> Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 pt-3 d-none d-lg-block ">
                                    <button className="btn btnlightblue m-auto m-md-0 d-table d-md-block" onClick={handleCreate}>Create</button>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                    {/* <div className="col-lg-5 mt-5 mt-lg-0">
                        <div className="title-heading mb-4">
                            <h2 className="headingWh ">Preview of item</h2>
                        </div>
                        <div className="aboutitem">
                            <div className="aboutitemImg"><img className="img-fluid" src="img/item-prev.png" alt="img" /></div>
                            <div className="bgdarkbluecolor aboutitemcnt">
                                <div className="itemtitlecode">
                                    <h2 className="textgraycolor">Cryptosharks</h2>
                                    <h3 className="textwhitecolor">Cryptosharks #92991</h3>
                                </div>
                                <div className="itemtitlePrice">
                                    <h2 className="textgraycolor">Price</h2>
                                    <h3 className="textwhitecolor"><img src="img/priceicon.svg" /> <strong>0, 006</strong></h3>
                                    <h4 className="textgraycolor"><span><img src="img/hearticon.svg" /></span> 56</h4>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-1 mb-2 ">
                            <button className="btn btnlightblue savebtn d-block m-auto d-lg-none">Save</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        createCollectionItemApiData: state.collection.apiStatus,
        getCollectionByUserData: state.collection.getCollectionByUserApiStatus
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetCollectionByUserApi: () => dispatch(getCollectionByUserApi()),
    onCreateCollectionItemApi: (payload) => dispatch(createCollectionItemApi(payload)),
    onSetCreateCollectionItemApiStatus: () => dispatch(setCollectionApiStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)