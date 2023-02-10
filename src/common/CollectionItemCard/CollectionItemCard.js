import React, { useEffect, useState } from "react";
import collectitem01 from "../../assets/img/collectitem01.png";
import priceicon from "../../assets/img/priceicon.svg";
import cardanoicon from "../../assets/img/cardano.png";
import hearticon from "../../assets/img/icon-heart-filled.png";
import layer from "../../assets/img/Layer_1-2.png";
import { useHistory } from "react-router-dom";
import backendUrl from "../../constants/constants";
import AudioPlayer from "react-h5-audio-player";
import axios from "axios";
import constants from "../../constants/constants";
import Switch from "react-switch";
import "react-h5-audio-player/lib/styles.css";
import { toast } from "react-toastify";

const CollectionItemCard = ({ item, collectionName, user, hide }) => {
  const history = useHistory();
  console.log("user", user)
  const goToItemDetails = (id) => {
    history.push(`/item/${id}`);
    window?.scrollTo(0, 0);
  };

  console.log("item", hide)
  let itemImage = item?.upload_file?.replace("public", backendUrl.BACKEND_URL);
  const [checked, sethidestatus] = useState(hide)
  let imageType = ["png", "jpg", "jpeg", "gif", "svg", "webp"];
  let videoType = "mp4";
  let audioType = "mp3";
  let fileType = itemImage?.split(".")?.slice(-1)[0];

  const fileToShow = () => {
    if (imageType.includes(fileType)) {
      return (
        <img
          src="/img/a-statue.jpg"
          className="item-blockimage"
          alt="collectitem01"
          style={{ height: "176px" }}
        />
      );
    } else if (fileType === videoType) {
      return (
        <video
          src={itemImage}
          controls
          className="img-fluid"
          style={{
            height: "176px",
            width: "100%",
            display: "list-item",
            background: "white",
          }}
        />
      );
    } else if (fileType === audioType) {
      return (
        <AudioPlayer src={itemImage} style={{ height: "176px" }} />
      );
    } else {
      return (
        <img src={collectitem01} className="img-fluid" alt="collectitem01" />
      );
    }
  };

  const hideItem = async (checkedPerem) => {
    console.log("checkedPerem", checkedPerem)
    if (checkedPerem == true) {
      sethidestatus(false)
    } else {
      sethidestatus(true)
    }
    try {
      const itemData = { item_id: item?._id, hide_status: checkedPerem }
      const headers = {
        'Authorization': "Bearer " + localStorage.getItem("accessToken"),
        'Content-Type': 'application/json'
      }
      await axios.post(`${constants.BACKEND_URL}/item/hide-item`, itemData, { headers: headers }).then((res) => {
        console.log(res);
        if (res?.data?.status) {
          toast.success(res?.data?.data)
        }
      }).catch((err) => {
        console.log(err);
      })
    } catch (error) {
      console.log(error)
    }

  }

  // useEffect(() => {
  //   console.log("hide", hide)
  //   sethidestatus(hide);
  // }, [])

  return (
    <div>
      <div
        className="aboutitem"
        style={{ cursor: "pointer" }}
      >

        {/* <img className="img-fluid" src={itemImage} alt="collectitem01" style={{height: "176px"}} /> */}
        <div onClick={() => goToItemDetails(item?._id)} className="item-blockimage">{fileToShow()}</div>
        <div className="item-priceblockinner">
          <div className="priceBlock-content">
            <div className="cryptoshark">
              <p>{collectionName}</p>
              <div className="likes-count">
                <div className="heart-icon">
                  <a href="" >
                    <img src={hearticon} alt="" />
                  </a>
                </div>
                <div className="count">
                  <p>56</p>
                </div>
              </div>
            </div>
            <div className="crypto">
              <p>{item?.item_name}</p>
            </div>
            <div className="bide-priceBuy">
              <div className="bid-price">
                <p>Price</p>
                <div className="actual-price">
                  <img onClick={() => goToItemDetails(item?._id)} src={layer} alt="" />
                  <p>{item?.price}&nbsp;ADA</p>
                </div>
              </div>
              <div className="buy-bidBtn">
                <a onClick={() => goToItemDetails(item?._id)} href="#">BUY BID</a>
              </div>
            </div>
            {user?.userData?.data?.role_type == "admin" ? (
              <div className="" style={{ justifyContent: "end" }}>
                <div className="">
                  <Switch onChange={() => { hideItem(checked) }} checked={!checked} />
                </div>
              </div>
            ) : ""}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItemCard;
