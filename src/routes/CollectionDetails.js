import React, { useEffect, useState } from "react";
import constants from "../constants/constants";
import { connect } from "react-redux";
import { getUserApi } from '../redux/authSlice';
import { Link, useParams, useHistory } from "react-router-dom";
import { getCollectionByIdApi } from "../redux/collectionSlice";
import CollectionItemCard from "../common/CollectionItemCard/CollectionItemCard";
import authoprofilebannerimg from "../assets/img/authoprofilebannerimg.png";
import authprobannersm01 from "../assets/img/authprobannersm01.png";
import authorproicon01 from "../assets/img/authorproicon01.png";
import activityicon from "../assets/img/activityicon.svg";
import discordbutton from "../assets/img/discordbutton.svg";
import insta from "../assets/img/insta.svg";
import twitter from "../assets/img/twitter.svg";
import menudots from "../assets/img/menudots.svg";
import priceicon from "../assets/img/priceicon.svg";
import cardanoicon from "../assets/img/cardano.png";
import fourdots from "../assets/img/fours-dots.png";
import menubar from "../assets/img/menu.png";
import NoDataFound from "../common/NoDataFound/NoDataFound";
import estatue from "../assets/img/a-statue.jpg";
import NotFound from "./NotFound";
import backendUrl from "../constants/constants";
import LoadingPage from "../common/LoadingBackdrop/LoadingPage";
import axios from "axios";

const CollectionDetails = ({
  onGetCollectionByIdApi,
  getCollectionByIdData,
  loginData
}) => {
  const history = useHistory();
  const params = useParams();
  const id = params?.id;
  const isLogin = localStorage.getItem("isLogin");
  const role_type = localStorage.getItem("roleType");



  useEffect(() => {
    let id = params?.id;
    onGetCollectionByIdApi(id);
  }, [, id]);

  const [collectionData, setcollectionData] = useState([])
  const [StaticcollectionData, setStaticcollectionData] = useState([])
  console.log("getUserApi", loginData)

  const collectionId = getCollectionByIdData?.data?.data?.collection?._id;

  const additionalLink = StaticcollectionData?.additional_link;
  const twitterLink = StaticcollectionData?.twitter;
  const instaLink = StaticcollectionData?.instagram;
  const discordLink = StaticcollectionData?.discord;


  useEffect(() => {
    setcollectionData(getCollectionByIdData?.data?.data?.collection);
    setStaticcollectionData(getCollectionByIdData?.data?.data?.collection);
  }, [getCollectionByIdData])

  const handleHighPrice = async (e) => {
    try {
      console.log(e.target.value)
      const setData = { id: collectionId, sort: e.target.value };
      const headers = { 'Content-Type': 'application/json' }
      await axios.post(`${constants.BACKEND_URL}/collection/get-high-collection-by-id`, setData, headers,).then((resData) => {
        // console.log("resData", resData)
        // console.log("collectionData", resData?.data?.data?.collection)
        if (resData?.data?.success == true) {
          console.log("AmanSahu")
          setcollectionData(resData?.data?.data);
        }
      }).catch((err) => {
        console.log(err);
      })

    } catch (error) {
      console.log(error)
    }

  }

  let time = new Date(Date.parse(StaticcollectionData?.updated_date));

  const actualDate = time.toDateString();
  const actualTime = time.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  let logo_image = StaticcollectionData?.logo_image?.replace(
    "public",
    backendUrl.BACKEND_URL
  );
  let banner_image = StaticcollectionData?.banner_image?.replace(
    "public",
    backendUrl.BACKEND_URL
  );

  if (
    getCollectionByIdData?.data?.data?.error?.msg === "Collection Id not found"
  ) {
    return <NotFound data={"Collection"} />;
  }

  return (
    <>
      <LoadingPage open={getCollectionByIdData?.status === "pending"} />
      <main className="main">
        <section className="banner-layer ringersGlow">
          <div className="container banner-layerContainer">
            <div className="row banner-layerRow">
              <div className="col-md-12 banner-layerCol">
                <div className="banner-itemlayer">
                  <div className="banner-itemImage">
                    {/* <img src="img/banner_image.png" alt="" /> */}
                    <img
                      className="img-fluid"
                      src={banner_image}
                      alt="authoprofilebannerimg"
                      style={{ height: "300px" }}
                    />
                  </div>
                  <div className="banner-pic">
                    {/* <img src="img/daviditem.png" alt="" /> */}
                    <img className="img-fluid" src={logo_image} alt="" />
                  </div>
                  <div className="user-profileBanner">
                    <div className="socialMedia">
                      <div className="social-icons banner-social">
                        <ul>
                          <li>
                            <a href={`${additionalLink?.split("/")[0]}`}>
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
                                <g
                                  id="XMLID_496_"
                                  transform="translate(0 -19.401)"
                                >
                                  <path
                                    id="XMLID_497_"
                                    d="M.369,28.114l4.809,1.795L7.04,35.9a.566.566,0,0,0,.9.271l2.681-2.185a.8.8,0,0,1,.975-.027l4.835,3.51a.567.567,0,0,0,.888-.343L20.86,20.084a.567.567,0,0,0-.759-.644L.363,27.054A.567.567,0,0,0,.369,28.114Zm6.371.839,9.4-5.789a.164.164,0,0,1,.2.259L8.579,30.634a1.608,1.608,0,0,0-.5.962l-.264,1.958a.243.243,0,0,1-.474.034L6.326,30.018A.946.946,0,0,1,6.74,28.954Z"
                                    transform="translate(0 0)"
                                    fill="#fff"
                                  ></path>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="colletion-title createdbyGlow">
          <div className="container colletion-titleCont">
            <div className="row colletion-titleRow">
              <div className="col-md-12 colletion-titleCol">
                <div className="title-collection">
                  <div className="ringerby">
                    {/* <h3>
                      Ringers by <span>Dmitri Cherniak</span>
                    </h3> */}
                    <h2>
                      {StaticcollectionData?.collection_name} by{" "}
                      <span>{StaticcollectionData?.user_id?.username}</span>

                    </h2>
                  </div>
                  <div className="titleItemdetails">
                    <p>{StaticcollectionData?.description}</p>
                  </div>
                </div>
                <div className="line-detailsblock">
                  <div className="line-detailElements">
                    {/* <div className="line-detailblockinner boxfirst">
                      <div className="line-itemlayer">
                        <h3>Items</h3>
                        <p>{StaticcollectionData?.item?.length}</p>
                      </div>
                    </div> */}
                    <div className="line-detailblockinner boxsecond">
                      <div className="line-itemlayer">
                        <h3>Owners</h3>
                        <p>11.0 K</p>
                      </div>
                    </div>
                    <div className="line-detailblockinner boxthird">
                      <div className="line-itemlayer">
                        <h3>Launch</h3>
                        <p>
                          {actualDate}
                        </p>
                      </div>
                    </div>
                    {/* <div className="line-detailblockinner boxfour">
                      <div className="line-itemlayer">
                        <h3>Floor Price</h3>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45.527"
                            height="42.069"
                            viewBox="0 0 45.527 42.069"
                          >
                            <g
                              id="Layer_2_1_"
                              transform="translate(0.008 0.015)"
                            >
                              <g
                                id="Layer_1-2"
                                transform="translate(-0.008 -0.015)"
                              >
                                <path
                                  id="Path_11635"
                                  data-name="Path 11635"
                                  d="M102.763,151a3.066,3.066,0,0,0,2.889,3.229h.182A3.065,3.065,0,1,0,102.763,151Z"
                                  transform="translate(-90.282 -130.118)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11636"
                                  data-name="Path 11636"
                                  d="M1.037,165.484a.991.991,0,1,0,.935,1.044.983.983,0,0,0-.935-1.044Z"
                                  transform="translate(0.008 -145.391)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11637"
                                  data-name="Path 11637"
                                  d="M90.779,11.816a.994.994,0,1,0-.9-1.772.994.994,0,0,0,.9,1.772Z"
                                  transform="translate(-78.492 -8.731)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11638"
                                  data-name="Path 11638"
                                  d="M110.783,49.163a1.528,1.528,0,1,0-2.052-.68A1.532,1.532,0,0,0,110.783,49.163Z"
                                  transform="translate(-95.388 -40.651)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11639"
                                  data-name="Path 11639"
                                  d="M36.45,84.037a1.263,1.263,0,1,0-.364-1.748h0A1.257,1.257,0,0,0,36.45,84.037Z"
                                  transform="translate(-31.52 -71.798)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11640"
                                  data-name="Path 11640"
                                  d="M44.2,160.981a1.532,1.532,0,1,0,1.445,1.615h0A1.533,1.533,0,0,0,44.2,160.981Z"
                                  transform="translate(-37.409 -141.434)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11641"
                                  data-name="Path 11641"
                                  d="M36.976,244.718a1.265,1.265,0,1,0,1.7.558h0a1.27,1.27,0,0,0-1.7-.558Z"
                                  transform="translate(-31.877 -214.888)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11642"
                                  data-name="Path 11642"
                                  d="M85.08,110.969a1.8,1.8,0,1,0-.522-2.489,1.787,1.787,0,0,0,.522,2.489Z"
                                  transform="translate(-74.032 -94.59)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11643"
                                  data-name="Path 11643"
                                  d="M241.465,48.751a1.534,1.534,0,1,0-.437-2.125h0a1.517,1.517,0,0,0,.437,2.125Z"
                                  transform="translate(-211.539 -40.36)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11644"
                                  data-name="Path 11644"
                                  d="M269.073,11.379A.992.992,0,1,0,268.781,10a1.023,1.023,0,0,0,.291,1.384Z"
                                  transform="translate(-236.014 -8.391)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11645"
                                  data-name="Path 11645"
                                  d="M224.992,147.863a3.064,3.064,0,1,0-.34,6.119h.17a3.062,3.062,0,0,0,.17-6.119Z"
                                  transform="translate(-194.835 -129.906)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11646"
                                  data-name="Path 11646"
                                  d="M132.708,100.835a3.068,3.068,0,1,0,1.36-4.128,3.072,3.072,0,0,0-1.36,4.128Z"
                                  transform="translate(-116.305 -84.675)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11647"
                                  data-name="Path 11647"
                                  d="M319.668,83.546a1.262,1.262,0,1,0-1.712-.558,1.284,1.284,0,0,0,1.712.558Z"
                                  transform="translate(-279.241 -71.307)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11648"
                                  data-name="Path 11648"
                                  d="M261.807,107.444a1.8,1.8,0,1,0,2.416.8A1.8,1.8,0,0,0,261.807,107.444Z"
                                  transform="translate(-229.149 -94.234)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11649"
                                  data-name="Path 11649"
                                  d="M177.877,2.512a1.279,1.279,0,0,0,1.335-1.19,1.265,1.265,0,0,0-2.525-.158,1.283,1.283,0,0,0,1.19,1.348Z"
                                  transform="translate(-155.235 0.015)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11650"
                                  data-name="Path 11650"
                                  d="M174.083,60.069a1.8,1.8,0,1,0-1.7-1.894,1.788,1.788,0,0,0,1.7,1.894Z"
                                  transform="translate(-151.453 -49.615)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11651"
                                  data-name="Path 11651"
                                  d="M87.121,213.023a1.8,1.8,0,1,0-2.416-.8A1.8,1.8,0,0,0,87.121,213.023Z"
                                  transform="translate(-74.252 -184.164)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11652"
                                  data-name="Path 11652"
                                  d="M192.382,97.784a3.065,3.065,0,1,0,2.562-1.384A3.056,3.056,0,0,0,192.382,97.784Z"
                                  transform="translate(-168.587 -84.695)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11653"
                                  data-name="Path 11653"
                                  d="M197.883,201.167a3.065,3.065,0,1,0-1.36,4.115h0a3.05,3.05,0,0,0,1.372-4.091C197.895,201.179,197.895,201.179,197.883,201.167Z"
                                  transform="translate(-168.758 -175.259)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11654"
                                  data-name="Path 11654"
                                  d="M263.847,209.458a1.8,1.8,0,1,0,.522,2.489,1.787,1.787,0,0,0-.522-2.489Z"
                                  transform="translate(-229.368 -183.768)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11655"
                                  data-name="Path 11655"
                                  d="M310.241,162a1.532,1.532,0,1,0-1.615,1.445h0A1.541,1.541,0,0,0,310.241,162Z"
                                  transform="translate(-269.886 -140.907)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11656"
                                  data-name="Path 11656"
                                  d="M359.737,164.684a.991.991,0,1,0,.935,1.044A1,1,0,0,0,359.737,164.684Z"
                                  transform="translate(-315.145 -144.688)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11657"
                                  data-name="Path 11657"
                                  d="M320.272,244.224a1.263,1.263,0,1,0,.364,1.748,1.257,1.257,0,0,0-.364-1.748Z"
                                  transform="translate(-279.675 -214.394)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11658"
                                  data-name="Path 11658"
                                  d="M91.488,320.716a.99.99,0,1,0,.279,1.372h0A.975.975,0,0,0,91.488,320.716Z"
                                  transform="translate(-79.031 -281.636)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11659"
                                  data-name="Path 11659"
                                  d="M269.881,320.307a.994.994,0,0,0,.9,1.772.994.994,0,0,0-.9-1.772Z"
                                  transform="translate(-236.64 -281.324)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11660"
                                  data-name="Path 11660"
                                  d="M138.179,204.331a3.069,3.069,0,1,0-4.249.886,3.079,3.079,0,0,0,4.249-.886Z"
                                  transform="translate(-116.447 -175.351)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11661"
                                  data-name="Path 11661"
                                  d="M111.314,275.589a1.534,1.534,0,1,0,.437,2.125h0A1.519,1.519,0,0,0,111.314,275.589Z"
                                  transform="translate(-95.713 -241.911)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11662"
                                  data-name="Path 11662"
                                  d="M177.714,325.687a1.265,1.265,0,1,0,1.19,1.348,1.279,1.279,0,0,0-1.19-1.348Z"
                                  transform="translate(-154.962 -286.146)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11663"
                                  data-name="Path 11663"
                                  d="M173.769,260.376a1.8,1.8,0,1,0,1.7,1.894,1.788,1.788,0,0,0-1.7-1.894Z"
                                  transform="translate(-151.006 -228.761)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_11664"
                                  data-name="Path 11664"
                                  d="M242.142,275.192a1.534,1.534,0,1,0,2.076.68,1.534,1.534,0,0,0-2.076-.68Z"
                                  transform="translate(-212.009 -241.636)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                          </svg>
                          0,006
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="item-detailsblock">
          <div className="container">
            <div className=" multiple-drops">
              <div className="dropDowninner_block">
                <select onChange={(e) => { handleHighPrice(e) }}>
                  <option value={"high"}>Highest price</option>
                  <option value={"low"}>Lowest price</option>
                </select>
              </div>

              <div className="dropDowninner_block">
                <select onChange={(e) => { handleHighPrice(e) }}>
                  <option value={"createdDatehigh"}>Newest</option>
                  <option value={"createdDatelow"}>Oldest</option>
                </select>
              </div>

              <div className="dropDowninner_block">
                <select>
                  <option>All items</option>
                  <option>Bundles</option>
                </select>
              </div>
              <div className="dropDowninner_block">
                <select>
                  <option>USD</option>
                  <option>Ethereum</option>
                </select>
              </div>
              <div className="dashboard">
                <div className="dashboard-icon">
                  <a href="#">
                    <img src={fourdots} alt="" />
                  </a>
                </div>
                <div className="dashboard-iconInner">
                  <a href="#">
                    <img src={menubar} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                {loginData?.userData?.data?.role_type == "admin" ? (
                  <>
                    <div className="item-price-blockouter">
                      {collectionData?.item?.length < 1 && (
                        <NoDataFound
                          data={"Collection Items"}
                          onClickToGo={"/create-item"}
                        />
                      )}
                      {collectionData?.item?.map((item, index) => (
                        <div className="col-md-6 col-xl-3 mb-4" key={index}>
                          <CollectionItemCard
                            user={loginData}
                            collectionName={collectionData?.collection_name}
                            item={item}
                            hide={item?.hide_status}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="item-price-blockouter">
                      {collectionData?.item?.map((item, index) => (
                        (item?.hide_status == false ? (
                          <div className="col-md-6 col-xl-3 mb-4" key={index}>
                            <CollectionItemCard
                              user={loginData}
                              collectionName={collectionData?.collection_name}
                              item={item?.hide_status == false ? item : ""}
                            />
                          </div>
                        ) :"")

                      ))}
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state.", state.auth)
  return {
    getCollectionByIdData: state.collection.getCollectionByIdApiStatus,
    loginData: state.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetCollectionByIdApi: (payload) => dispatch(getCollectionByIdApi(payload)),


});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetails);
