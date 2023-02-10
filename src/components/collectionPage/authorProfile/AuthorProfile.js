import React from 'react'
import authoprofilebannerimg from "../../../assets/img/authoprofilebannerimg.png"
import authprobannersm01 from "../../../assets/img/authprobannersm01.png"
import authorproicon01 from "../../../assets/img/authorproicon01.png"
import activityicon from "../../../assets/img/activityicon.svg"
import discordbutton from "../../../assets/img/discordbutton.svg"
import insta from "../../../assets/img/insta.svg"
import twitter from "../../../assets/img/twitter.svg"
import priceicon from "../../../assets/img/priceicon.svg"

const AuthorProfile = () => {

    return (
        <div className="authoreprofile authoSm mt-0 mt-md-5 pt-0 pt-md-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="authoreproimg">
                            <div className="authoreproimgBox">
                                <img className="img-fluid d-none d-md-block" src={authoprofilebannerimg} alt="img" />
                                <img className="img-fluid d-block d-md-none" src={authprobannersm01} alt="img" />
                            </div>
                            <div className="authoreproicon"><img className="img-fluid" src={authorproicon01} alt="img" /></div>
                        </div>
                        <div className="auProfileDetail">
                            <div className="joincommunity auSocial">
                                <ul>
                                    <li><a href="#"><img className="img-fluid" src={activityicon} alt="img" /></a></li>
                                    <li><a href="#"><img className="img-fluid" src={discordbutton} alt="img" /></a></li>
                                    <li><a href="#"><img className="img-fluid" src={insta} alt="img" /></a></li>
                                    <li><a href="#"><img className="img-fluid" src={twitter} alt="img" /></a></li>
                                </ul>
                            </div>
                            <div className="prCnt">
                                <h2 className="textwhitecolor">Ringers by Dmitri Cherniak</h2>
                                <h3 className="textgraycolor mt-3 mb-4"><span className="textbluecolor">Last updated:</span> October 21st,  2021 at 3 AM</h3>
                                <p className="textgraycolor">There are many variations of passages of Lorem Ipsum available, but<br /> the majority have suffered alteration in some form, by injected</p>
                            </div>
                        </div>
                        <div className="showResultTop">
                            <ul>
                                <li>
                                    <span className="textgraycolor">Items</span>
                                    <strong className="textwhitecolor">10.0 K</strong>
                                </li>
                                <li>
                                    <span className="textgraycolor">Owners</span>
                                    <strong className="textwhitecolor">11.0 K</strong>
                                </li>
                                <li>
                                    <span className="textgraycolor">Floor Price</span>
                                    <strong className="textwhitecolor"><img className="img-fluid" src={priceicon} alt="img" /> 0,006</strong>
                                </li>
                                <li>
                                    <span className="textgraycolor">Volume Traded</span>
                                    <strong className="textwhitecolor"><img className="img-fluid" src={priceicon} alt="img" /> 0,068</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AuthorProfile