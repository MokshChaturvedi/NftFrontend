import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import OwlCarousel from "react-owl-carousel";

import mobile from "../../../assets/img/Mobile-Mockup.png";
import banner1 from "../../../assets/img/Banner-2.gif";
// import b1 from "../../../assets/img/B-2.webm";
// import b2 from "../../../assets/img/B-3.webm"
import banner2 from "../../../assets/img/Banne-3.gif";
import rays from "../../../assets/img/rays.png";
import video from "../../../assets/video/Banner-1-BG-animation.mp4";

const BannerSection = () => {
  const history = useHistory();

  const disCover = () => {
    history.push("/discover");
  };

  const create = () => {
    const roleType = localStorage.getItem("roleType");
    const isLogin = localStorage.getItem("isLogin");
    if (roleType === "admin" && isLogin === "true") {
      history.push("/create-collection");
    } else if (isLogin === "true") {
      toast.warn("You Don't Have Access To Create Collection");
    } else {
      toast.warning("Please Login To Continue");
    }
  };

  return (
    <main className="main">
      <section className="banner-section">
        <div className="banner-slider">
          <div className="contain">
            <OwlCarousel
              id="owl-carousel"
              className="owl-theme"
              items={1}
              dots={true}
              margin={10}
              nav={false}
              autoHeight={true}
              mouseDrag={true}
              responsiveClass={true}
            >
              <div className="item">
                <div className="slide-one slide-overlay">
                  <video autoPlay muted loop className="myVideo">
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                  <div className="container">
                    <div className="row center-div ">
                      <div className="col-md-6">
                        <div className="marketplace">
                          <div className="marketplace-head">
                            <div className="tild">
                              <h6 className="vilvi-nft"> Vivli NFT</h6>
                              <h6 className="vilvi-nft vilvi-space">
                                Marketplace
                              </h6>
                            </div>
                            <p>
                              A new era of collecting and discovering music and
                              art built on the ethical Cardano blockchain.
                              Providing a mechanism for direct Artist royalty
                              payments.
                            </p>
                          </div>
                          <div className="back-homeBtn browse">
                            <a href="#" className="back-home preview">
                              PREVIEW NFT LAUNCH
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="marketplace-image mobile-img">
                          <img src={mobile} alt="" />
                        </div>
                      </div>
                      <div className="reponsive-blockBtnouter">
                        <a href="#" className="reponsive-blockBtn">
                          PREVIEW NFT LAUNCH
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className=" slide-one">
                  <div className="container">
                    <div className="row  center-div">
                      <div className="col-md-6">
                        <div className="marketplace">
                          <div className="marketplace-head collection-head">
                            <div className="tild">
                              <h6 className="vilvi-nft browse-new">
                                Browse New
                              </h6>
                              <h6 className="vilvi-nft vilvi-space browse-new">
                                Collections
                              </h6>
                            </div>
                            <p>
                              Launching a curated collection to browse and
                              discover new Music and NFT Art.
                            </p>
                          </div>
                          <div className="back-homeBtn browse">
                            <a
                              href="/collections"
                              className="back-home preview"
                            >
                              Browse Collection
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="marketplace-image slide-two">
                          {/* <img src={banner1} alt="" /> */}
                          <video className="banner-second" autoPlay={true} loop={true} muted={true}>
                            <source src="img/B-2.webm" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="reponsive-blockBtnouterwrap">
                      <a href="#" className="reponsive-blockBtncollection">
                        Browse Collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="slide-three-item slide-one">
                  <div className="container">
                    <div className="row bitcoin-responsive">
                      <div className="col-md-6  center-artist">
                        <div className="marketplace">
                          <div className="marketplace-head collection-head">
                            <div className="tild">
                              <h6 className="vilvi-nft merging-head">
                                MERGING NFT &
                              </h6>
                              <h6 className="vilvi-nft vilvi-space merging-head">
                                PHYSICAL
                              </h6>
                            </div>
                            <p className="dropping">
                              Imagine owning a physical item like vinyl linked
                              to your NFT, proving ownership of the collectible
                              NFT Music and Art.
                            </p>
                          </div>
                          <div className="back-homeBtn browse ">
                            <a href="/about" className="back-home preview">
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bitcoin"></div>
                        <div className="marketplace-image unbox nft-img nft-glow">
                          {/* <img src={banner2} className="nft-round" alt="" />
                          <img src={rays} className="nft-rays" alt="" /> */}
                          <video className="third-banner"  autoPlay={true} loop={true} muted={true}>
                            <source src="img/B-3.webm" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="reponsive-blockBtnouterwrap">
                      <a href="#" className="reponsive-blockBtncollection">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BannerSection;
