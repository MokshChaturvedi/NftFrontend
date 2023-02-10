import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import moment from 'moment';
import { useParams } from "react-router-dom";
import {
  createBookingApi,
  getCollectionItemByIdApi,
  getLastAddedItemApi,
} from "../redux/collectionSlice";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import LastAddedItem from "../components/homePage/lastAddedItem";
import circlebg21 from "../assets/img/circlebg21.svg";
import largeitemprev from "../assets/img/large-item-prev.png";
import wishlist from "../assets/img/wishlist.svg";
import priceicon from "../assets/img/priceicon.svg";
import mension1 from "../assets/img/mension-1.png";
import mension2 from "../assets/img/mension-2.png";
import userImage from "../assets/img/user.png";
import twitter1 from "../assets/img/twitter1.svg";
import Facebook_logo from "../assets/img/Facebook_logo.svg";
import shareicon from "../assets/img/share-icon.svg";
import shareVector from "../assets/img/share-Vector.svg";
import davidhead from "../assets/img/david-head.png";
import profile1 from "../assets/img/profile-1.png";
import layout1 from "../assets/img/Layer_1-2.png";
import audio1 from "../assets/img/audio.png";
import indianmen1 from "../assets/img/indian-man.png";
import NotFound from "./NotFound";
import backendUrl from "../constants/constants";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Countdown from "react-countdown";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { v4 as uuidv4 } from 'uuid';
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Stack from "@mui/material/Stack";
import {
  createAuctionApi,
  createBidApi,
  setAuctionApiStatus,
  setBidApiStatus,
} from "../redux/auctionSlice";
import ReturnCreated from "../utils/ReturnCreatedDate";
uuidv4();
const Item = ({
  collectionItemData,
  onGetCollectionItem,
  onGetLastAddedItem,
  getLastAddedItemData,
  onCreateAuction,
  onCreateBid,
  createAuctionApiStatus,
  createBidApiStatus,
  onClearAuctionStatus,
  onClearBidStatus,
  onCreateBooking,
  createBookingApiStatus,
}) => {
  const params = useParams();
  const id = params?.id;

  const role_type = localStorage.getItem("roleType");
  const isLogin = localStorage.getItem("isLogin");

  const [auctionStartTime, setAuctionStartTime] = useState(new Date());
  const [auctionEndTime, setAuctionEndTime] = useState(new Date());
  const [bidAmount, setBidAmount] = useState();
  const [buyBtn, setbuybtn] = useState(false)

  const [yourBalance, setYourBalance] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);

  console.log("get CollectionItem Data", collectionItemData?.data?.data?.history);

  const isWalletConnected = () => {
    window?.cardano
      ?.isEnabled()
      ?.then((result) => {
        setWalletConnected(result);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getBalance = () => {
    window?.cardano
      ?.getBalance()
      .then((result) => {
        setYourBalance(Number(result));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    isWalletConnected();
    walletConnected && getBalance();
  }, [walletConnected]);

  useEffect(() => {
    let id = params?.id;
    onGetCollectionItem(id);
    onGetLastAddedItem();
  }, [, id]);

  const itemName = collectionItemData?.data?.data?.item_name;
  const itemPrice = collectionItemData?.data?.data?.price;
  const itemDescription = collectionItemData?.data?.data?.description;
  const createrName =
    collectionItemData?.data?.data?.collection_id?.user_id?.username;
  const collectionName =
    collectionItemData?.data?.data?.collection_id?.collection_name;
  const priceABid = collectionItemData?.data?.data?.open_for_bids;
  let itemImage = collectionItemData?.data?.data?.upload_file?.replace(
    "public",
    backendUrl.BACKEND_URL
  );
  let collectionLogoImage =
    collectionItemData?.data?.data?.collection_id?.logo_image.replace(
      "public",
      backendUrl.BACKEND_URL
    );

  let auction = collectionItemData?.data?.data?.auction;
  console.log("collectionItemData?.data?.data?.auction", collectionItemData)
  const isAuction = auction?.length > 0;
  const AuctionId = isAuction && auction[0]?._id;
  const auctionStartDate = isAuction && auction[0]?.auction_start_date;
  const auctionEndDate = isAuction && auction[0]?.auction_end_date;

  // let historyData = collectionItemData?.data?.data;
  // const ishistory = historyData?.length > 0;
  // const historyId = ishistory && historyData[0]?._id;
  // const historymessage = ishistory && historyData[0]?.message;
  // const create_Date = ishistory && historyData[0]?.created_date;
  // console.log("get hitory Data1", historyData);

  var diff = auctionEndTime.valueOf() - auctionStartTime.valueOf();
  var diffInHours = diff / 1000 / 60 / 60;

  let placeBidEnable =
    new Date().valueOf() >= new Date(auctionStartDate).valueOf() &&
    new Date().valueOf() <= new Date(auctionEndDate).valueOf();

  const bidListItem = isAuction && auction[0]?.bid;
  console.log("bidListItem", isAuction && auction[0]?.bid)


  const createAuctionData = {
    item_id: id,
    auction_start_date: auctionStartTime,
    auction_end_date: auctionEndTime,
  };

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }



  const saveAuction = () => {
    if (!(diffInHours > 1)) {
      toast.warning("End Date Must Be Greater Then Start Date ");
    } else {
      onCreateAuction(createAuctionData);
    }
  };

  useEffect(() => {
    if (createAuctionApiStatus?.success) {
      toast.success(createAuctionApiStatus?.msg);
      let id = params?.id;
      onGetCollectionItem(id);
    } else {
      toast.error(createAuctionApiStatus?.data?.error?.msg);
    }
    return () => {
      onClearAuctionStatus();
    };
  }, [createAuctionApiStatus]);

  const createBidData = {
    auction_id: AuctionId,
    item_id: id,
    price: bidAmount,
    user_name: createrName
  };

  const saveBid = () => {
    if (isLogin !== "true") {
      toast.warning("Please Login To Continue");
    } else if (!bidAmount) {
      toast.warning("Please Enter Bid Price");
    } else if (bidAmount < 1) {
      toast.warning("Bid Price Must Be Grether than 1");
    } else {
      onCreateBid(createBidData);
    }
  };

  useEffect(() => {
    if (createBidApiStatus?.success) {
      toast.success(createBidApiStatus?.msg);
    } else {
      toast.error(createBidApiStatus?.data?.error?.msg);
    }
    return () => {
      onClearBidStatus();
    };
  }, [createBidApiStatus]);

  const createBookingData = {
    price_amount: itemPrice,
    price_currency: "usd",
    order_id: `${uuidv4()}`,
    order_description: `${itemName} NFT Item Buy`,
    ipn_callback_url: "https://nowpayments.io",
    success_url: `${window.location.origin}/success_payment`,
    cancel_url: `${window.location.origin}/failed_payment`,
  };

  console.log("get description", itemDescription);

  const BuyNow = () => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin !== "true") {
      toast.warn("Please Login To Continue");
    }
    // else if (!walletConnected) {
    //   toast.warn("Please Connect Your Wallet");
    // } 
    else {
      onCreateBooking(createBookingData);
    }
  };

  useEffect(() => {
    if (createBookingApiStatus?.data?.success) {
      let invoice_url = createBookingApiStatus?.data?.data?.invoice_url;
      window.open(invoice_url,);
    } else {
      toast.error(createBookingApiStatus?.error?.msg);
    }
  }, [, createBookingApiStatus]);

  if (collectionItemData?.data?.data?.error?.msg === "Item Id not found") {
    return <NotFound data={"Item"} />;
  }

  let imageType = ["png", "jpg", "jpeg", "gif", "svg", "webp"];
  let videoType = ["mp4", "webm"];
  let audioType = ["mp3", "wav", "ogg"];
  console.log("imageType", imageType);
  let fileType = itemImage?.split(".")?.slice(-1)[0];

  const fileToShow = () => {
    console.log("fileType", fileType)
    if (imageType.includes(fileType)) {
      return <img src={itemImage} className="img-fluid" alt="largeitemprev" />;
    } else if (videoType.includes(fileType)) {
      console.log("videoType", itemImage);
      return <video src={itemImage} controls className="img-fluid" />;
    } else if (audioType.includes(fileType)) {
      console.log("itemImage", itemImage)
      return <AudioPlayer src={itemImage} style={{ height: "340px" }} />;
    }
  };
  const tracks = [
    {
      url: "",
      title: "",
      tags: [],
    },
  ];
  const AudioToShow = () => {
    console.log("AmanSahu", audioType, fileType)
    if (audioType.includes(fileType)) {
      tracks[0].url = itemImage;
      tracks[0].title = "Test";
      return <Player includeSearch={false} trackList={tracks} />;
    }
  };

  const Completionist = () => <h4>Auction Ended !</h4>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <h4>
          {days} days {hours}:{minutes}:{seconds}
        </h4>
      );
    }
  };

  const showAuctionStatus = () => {
    if (isAuction && priceABid) {
      if (new Date().valueOf() >= new Date(auctionStartDate).valueOf()) {
        return (
          < Countdown
            date={Date.parse(String(auctionEndDate))}
            renderer={renderer}
          />
        );
      } else {
        return <h4>Coming Soon !! </h4>;
      }
    } else {
      return <h4>No Auction</h4>;
    }
  };


  return (
    <main className="main">
      <section className="ringersBy-section ringersGlow">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="headImg">
                <div>{fileToShow()}</div>
                <div className="play-pauseBtns">
                  <div className="btns-block">
                    <svg
                      id="vinyl-svgrepo-com"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <circle
                        id="Ellipse_51"
                        data-name="Ellipse 51"
                        cx="2.259"
                        cy="2.259"
                        r="2.259"
                        transform="translate(17.795 17.687)"
                        fill="#1eaae6"
                      />
                      <path
                        id="Path_11665"
                        data-name="Path 11665"
                        d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0ZM13.069,34.676a16.327,16.327,0,0,1-7.745-7.745l4.648-1.859a11.308,11.308,0,0,0,4.956,4.956ZM25.4,23.3A5.028,5.028,0,0,1,23.3,25.4a6.351,6.351,0,0,1-8.7-8.7A5.027,5.027,0,0,1,16.7,14.6,6.351,6.351,0,0,1,25.4,23.3Zm4.632-8.375a11.308,11.308,0,0,0-4.956-4.956l1.859-4.648a16.328,16.328,0,0,1,7.745,7.745Z"
                        fill="#1eaae6"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43.351"
                      height="40"
                      viewBox="0 0 43.351 40"
                    >
                      <g
                        id="Group_123"
                        data-name="Group 123"
                        transform="translate(-2844.277 -591.509)"
                      >
                        <path
                          id="Path_11666"
                          data-name="Path 11666"
                          d="M2881.289,631.8c-.375.795-.7,1.617-1.131,2.379a18.676,18.676,0,0,1-14.3,9.879,19.075,19.075,0,1,1,13.505-29.254,1.273,1.273,0,0,1,.175.818c-.664,3.989-1.36,7.973-2.03,11.961a1.182,1.182,0,0,1-.7,1.007,4.353,4.353,0,0,0-.807.466,2.36,2.36,0,0,1-2.349.423,3.416,3.416,0,0,0-1.923.048,7.734,7.734,0,0,0-3.419,2.018,4.488,4.488,0,0,0,5.241,7.1,16.888,16.888,0,0,0,1.854-1.077,4.17,4.17,0,0,0,1.836-2.763,1.022,1.022,0,0,1,.566-.77c.866-.488,1.717-1.007,2.553-1.544a7.617,7.617,0,0,0,.844-.729Zm-18.477,8.8c.2,0,.406.013.607,0a.854.854,0,0,0,.068-1.7c-.245-.036-.5-.035-.744-.05a13.468,13.468,0,0,1-10.553-5.769,13.1,13.1,0,0,1-2.529-7.583c-.019-.817-.33-1.224-.911-1.206s-.894.432-.829,1.257a22.47,22.47,0,0,0,.375,3A15.454,15.454,0,0,0,2862.812,640.605Zm.551-11.758a3.692,3.692,0,1,0-3.691-3.671A3.684,3.684,0,0,0,2863.364,628.847Zm11.818-4.03a11.769,11.769,0,0,0-6.828-10.364,11.353,11.353,0,0,0-4.87-1.12.8.8,0,0,0-.875.483,1.338,1.338,0,0,0,.056.87c.16.365.552.395.927.4a10.05,10.05,0,0,1,9.643,8.105c.128.652.136,1.328.212,1.991a.859.859,0,0,0,.889.837.872.872,0,0,0,.847-.926C2875.184,625,2875.182,624.91,2875.182,624.817Zm-12.267,12.153h.022c.86.021,1.288-.26,1.292-.848,0-.561-.38-.835-1.234-.878a10.034,10.034,0,0,1-9.324-7.385,19.291,19.291,0,0,1-.383-2.668c-.073-.577-.424-.925-.932-.892a.842.842,0,0,0-.8.958,17.745,17.745,0,0,0,.184,1.994A11.837,11.837,0,0,0,2862.914,636.97Zm1.26-27.274c-.2,0-.4,0-.606,0-.643,0-1.061.322-1.08.844-.021.54.395.875,1.067.906a13.575,13.575,0,0,1,12.326,8.107,2.894,2.894,0,0,0,.236.454.814.814,0,0,0,.994.3.792.792,0,0,0,.555-.831,1.688,1.688,0,0,0-.2-.616C2874.79,613.264,2870.308,610.292,2864.174,609.7Zm7.371,15.21a8.123,8.123,0,0,0-5.228-7.359,13.749,13.749,0,0,0-2.906-.565.832.832,0,0,0-.923.84.893.893,0,0,0,.847.888c.092.011.186.009.279.012a6.422,6.422,0,0,1,6.066,5.194c.084.441.093.9.154,1.342a.839.839,0,0,0,.9.765.857.857,0,0,0,.813-.857C2871.55,625.04,2871.545,624.915,2871.545,624.905Zm-8.671,8.43a5.276,5.276,0,0,0,.6,0,.8.8,0,0,0,.726-.685c.125-.557-.292-1-.959-1.025a6.4,6.4,0,0,1-5.206-2.822,6.307,6.307,0,0,1-1.131-3.545.876.876,0,0,0-.587-.91c-.615-.213-1.136.224-1.14.942A8.167,8.167,0,0,0,2862.874,633.335Z"
                          transform="translate(0 -12.729)"
                          fill="#1eaae6"
                        />
                        <path
                          id="Path_11667"
                          data-name="Path 11667"
                          d="M3055.982,599.869c-.448,2.595-.89,5.151-1.331,7.706-.482,2.8-.95,5.609-1.45,8.41a4.015,4.015,0,0,1-2.021,2.855q-1.477.864-2.963,1.715a.494.494,0,0,0-.291.548,2.625,2.625,0,0,1-1.183,2.458,14.045,14.045,0,0,1-1.577.925,2.768,2.768,0,0,1-3.666-1.086,2.724,2.724,0,0,1,.947-3.731,11.6,11.6,0,0,1,2.213-1.089,2.317,2.317,0,0,1,2.125.459.406.406,0,0,0,.533.027q1.428-.855,2.879-1.673a2.531,2.531,0,0,0,1.322-1.882q1.033-6.079,2.088-12.154c.191-1.109.369-2.22.578-3.326a.528.528,0,0,0-.331-.678,4.132,4.132,0,0,1-2.1-4.684,4.177,4.177,0,0,1,8.1.008,4.157,4.157,0,0,1-3.379,5.112C3056.33,599.809,3056.176,599.836,3055.982,599.869Zm-1.35-4.212a1.184,1.184,0,1,0,1.209-1.154A1.17,1.17,0,0,0,3054.633,595.656Z"
                          transform="translate(-172.362 0)"
                          fill="#1eaae6"
                        />
                        <path
                          id="Path_11668"
                          data-name="Path 11668"
                          d="M2990.167,750.718a1.206,1.206,0,0,1-1.207,1.185,1.182,1.182,0,0,1-1.17-1.213,1.189,1.189,0,1,1,2.377.029Z"
                          transform="translate(-125.6 -138.276)"
                          fill="#1eaae6"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="plus-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                    >
                      <g
                        id="Group_159"
                        data-name="Group 159"
                        transform="translate(-960.529 -2136)"
                      >
                        <g
                          id="Rectangle_49"
                          data-name="Rectangle 49"
                          transform="translate(960.529 2136)"
                          fill="#010610"
                          stroke="#1eaae6"
                          stroke-width="1"
                        >
                          <rect width="46" height="46" rx="23" stroke="none" />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="45"
                            height="45"
                            rx="22.5"
                            fill="none"
                          />
                        </g>
                        <g
                          id="Group_120"
                          data-name="Group 120"
                          transform="translate(973.529 2149)"
                        >
                          <line
                            id="Line_38"
                            data-name="Line 38"
                            x2="19.754"
                            transform="translate(0 10)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-width="5"
                          />
                          <line
                            id="Line_39"
                            data-name="Line 39"
                            x2="19.755"
                            transform="translate(10) rotate(90)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-width="5"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="socialMedia">
                <div className="social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.872"
                          height="18.172"
                          viewBox="0 0 20.872 18.172"
                        >
                          <g id="XMLID_496_" transform="translate(0 -19.401)">
                            <path
                              id="XMLID_497_"
                              d="M.369,28.114l4.809,1.795L7.04,35.9a.566.566,0,0,0,.9.271l2.681-2.185a.8.8,0,0,1,.975-.027l4.835,3.51a.567.567,0,0,0,.888-.343L20.86,20.084a.567.567,0,0,0-.759-.644L.363,27.054A.567.567,0,0,0,.369,28.114Zm6.371.839,9.4-5.789a.164.164,0,0,1,.2.259L8.579,30.634a1.608,1.608,0,0,0-.5.962l-.264,1.958a.243.243,0,0,1-.474.034L6.326,30.018A.946.946,0,0,1,6.74,28.954Z"
                              transform="translate(0 0)"
                              fill="#fff"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-share-nodes"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ringerby">
                <h3>
                  {itemName} by <span>{createrName}</span>
                </h3>
                <div className="profile-block">
                  <div className="profile-inner">
                    <div className="profile-head">
                      <p>Creator</p>
                    </div>
                    <div className="profile-pic">
                      <a href="#">
                        <img src={profile1} alt="" />
                      </a>
                      <p>@{createrName}</p>
                    </div>
                  </div>

                  <div className="profile-inner">
                    <div className="profile-head">
                      <p>Collection</p>
                    </div>
                    <div className="profile-pic">
                      <a href="#">
                        <img src={profile1} alt="" />
                      </a>
                      <p>@{collectionName}</p>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <div className="detail-price">
                    <div className="currentPrice-inner">
                      <div className="current-price">
                        <p>Current Price</p>
                      </div>
                      <div className="price-detail">
                        <img src={layout1} alt="" />
                        <p>{itemPrice + " ADA"}</p>
                      </div>
                    </div>
                    <div className="currentPrice-inner">
                      <div className="current-price">
                        <p>Auction ends in</p>
                      </div>
                      <div className="price-detail">
                        <p>{showAuctionStatus()}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*for user*/}
                <div className="btn-block">
                  {(role_type === "user" || role_type === null) && (
                    <div className="buy-nowBtn">
                      <a
                        href="#"
                        disabled={role_type === "admin"}
                        onClick={BuyNow}
                        className="buy-now"
                      >
                        BUY NOW
                      </a>
                    </div>
                  )}
                  {(role_type === "user" || role_type === null) && (
                    <div className="place-bidBtn">
                      {isLogin === "true" && (
                        <a
                          href="#"
                          className="place-bid"
                          disabled={!placeBidEnable}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          PLACE A BID
                        </a>
                      )}
                    </div>
                  )}
                  {(role_type === "user" || role_type === null) && (
                    <div className="place-bidBtn">
                      {isLogin !== "true" && (
                        <a className="place-bid " onClick={saveBid}>
                          PLACE A BID
                        </a>
                      )}
                    </div>
                  )}

                </div>
                {/*For Admin */}
                {role_type === "admin" &&
                  <div className="btn-block">
                    <div className="buy-nowBtn">
                      <a
                        href="#"
                        onClick={BuyNow}
                        className="buy-now"
                        disabled={role_type === "admin"}
                      >
                        Buy Now
                      </a>
                    </div>
                    {!isAuction && (
                      <div className="place-bidBtn">
                        <a
                          href="#"
                          className="place-bid"
                          data-bs-toggle="modal"
                          data-bs-target="#auctionModal"
                        >
                          Start Auction
                        </a>
                      </div>
                    )}
                    {priceABid && isAuction && (
                      <div className="place-bidBtn">
                        <a className="place-bid">Auction Running</a>
                      </div>
                    )}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="createdBy">
        <div className="container">
          <div className="row createdbyGlow">
            <div className="col-md-6">
              <div className="createdBy-block">
                <h3>Created by {createrName}</h3>
                <div className="created-detail">
                  <p>
                    {itemDescription}
                  </p>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, Lorem Ipsum is
                    simply dummy text
                  </p> */}
                </div>
                <div className="audio">
                  {audioType.includes(fileType) ? (AudioToShow()) : ("")}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bid-tab">
                <div className="history-tab">
                  <ul
                    className="nav nav-tabs history-innerBlock"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item btn-outer" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        History
                      </button>
                    </li>
                    <li className="nav-item btn-outer" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Bid
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="historyTab-content">
                      <div className="history-bid">
                        <ul>
                          {collectionItemData?.data?.data?.history.map((currentelm, indx, arr) => {
                            if (currentelm.type == "item") {

                              return (
                                <>
                                  <li>
                                    <div className="history-listing">
                                      <div className="history-profile">
                                        <div key={indx} className="profilePic">
                                          <a href="#">
                                            <img src={indianmen1} alt="" />
                                          </a>
                                        </div>
                                        <div className="profile-content">
                                          <h4>11.00 ETH</h4>
                                          <p>
                                            {currentelm.message}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="time">
                                        <p>{moment(currentelm.created_at).fromNow()}</p>
                                      </div>
                                    </div>
                                  </li>
                                </>
                              )
                            }

                          })
                          }

                          {/* <li>
                            <div className="history-listing">
                              <div className="history-profile">
                                <div className="profilePic">
                                  <a href="#">
                                    <img src={indianmen1} alt="" />
                                  </a>
                                </div>
                                <div className="profile-content">
                                  <h4>11.00 ETH</h4>
                                  <p>
                                    Bid placed by <span>@erikkk</span>
                                  </p>
                                </div>
                              </div>
                              <div className="time">
                                <p>4 hours ago</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="history-listing">
                              <div className="history-profile">
                                <div className="profilePic">
                                  <a href="#">
                                    <img src={indianmen1} alt="" />
                                  </a>
                                </div>
                                <div className="profile-content">
                                  <h4>11.00 ETH</h4>
                                  <p>
                                    Bid placed by <span>@erikkk</span>
                                  </p>
                                </div>
                              </div>
                              <div className="time">
                                <p>4 hours ago</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="history-listing">
                              <div className="history-profile">
                                <div className="profilePic">
                                  <a href="#">
                                    <img src={indianmen1} alt="" />
                                  </a>
                                </div>
                                <div className="profile-content">
                                  <h4>11.00 ETH</h4>
                                  <p>
                                    Bid placed by <span>@erikkk</span>
                                  </p>
                                </div>
                              </div>
                              <div className="time">
                                <p>4 hours ago</p>
                              </div>
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="historyTab-content">
                      <div className="history-bid">
                        <ul>
                          {!bidListItem ? (
                            <p style={{ color: "white" }}>No Bids Found</p>
                          ) : ("")}
                          {bidListItem &&
                            bidListItem?.map((e, i) => (
                              <li>
                                <div className="history-listing">
                                  <div key={i} className="history-profile">
                                    <div className="profilePic">
                                      <a href="#">
                                        <img src={indianmen1} alt="" />
                                      </a>
                                    </div>
                                    <div className="profile-content">
                                      <h4>{e?.item_price} ADA</h4>
                                      <p>
                                        {ReturnCreated(e?.created_date)} by{" "}
                                        <span>{e?.user_name}</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="time">
                                    <p>{moment(e.created_date).fromNow()}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="historyTab-content">
                      <div className="history-bid">

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* price a bid model model code */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" color="black" id="exampleModalLabel">
                      PLACE A BID
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Bid Price In ADA:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          placeholder="Enter Bid Price In ADA"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={saveBid}
                    >
                      Save Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* start auction model code */}
            <div
              className="modal fade"
              id="auctionModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Start Auction
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
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
                      </Stack>
                    </LocalizationProvider>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={saveAuction}
                    >
                      Save Auction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    collectionItemData: state.collection.getCollectionItemByIdApiStatus,
    getLastAddedItemData: state.collection.getLastAddedItemApiStatus,
    createAuctionApiStatus: state.auction.createAuctionApiStatus,
    createBidApiStatus: state.auction.createBidApiStatus,
    createBookingApiStatus: state.collection.createBookingApiStatus,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetCollectionItem: (payload) => dispatch(getCollectionItemByIdApi(payload)),
  onGetLastAddedItem: () => dispatch(getLastAddedItemApi()),
  onCreateAuction: (payload) => dispatch(createAuctionApi(payload)),
  onCreateBid: (payload) => dispatch(createBidApi(payload)),
  onClearAuctionStatus: () => dispatch(setAuctionApiStatus()),
  onClearBidStatus: () => dispatch(setBidApiStatus()),
  onCreateBooking: (payload) => dispatch(createBookingApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
