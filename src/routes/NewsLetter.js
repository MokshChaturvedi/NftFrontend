import React from 'react'

const NewsLetter = () => {
    return (
        <div className="newsletter-banner pt-5 pb-5 mt-0 mt-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="bannerImg d-none d-xl-flex">
                            <img className="img-fluid d-sm-block d-md-none" src="img/patterbannerimg.png" alt="img" />
                            <div className="bannerimg01 d-none d-md-block">
                                <img className="img-fluid" src="img/bannerimg01.png" alt="img" />
                            </div>
                            <div className="bannerimg02 d-none d-md-block">
                                <img className="img-fluid" src="img/bannerimg02.png" alt="img" />
                            </div>
                            <div className="bannerimg03 d-none d-md-block">
                                <img className="img-fluid" src="img/bannerimg03.png" alt="img" />
                            </div>
                            <div className="bannerbtn 1d-block d-none d-sm-none d-md-block d-xl-none">
                                <button className="btn btnlightblue me-3">Discover</button>
                                <button className="btn btndarkblue">Create</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="newscnt">
                            <h2 className="textwhitecolor newshead mb-3">Sign Up for the <span className="textbluecolor">Crypto Newsletter!</span></h2>
                            <p className="mb-4">Sign up to receive our monthly newsletter, featuring updates from the team, new decentralized applications and NFT projects, and trends we’re seeing in the space.</p>
                            <form>
                                <div className="input-box">
                                    <input type="text" name="name" placeholder="Enter nickname" className="form-input" />
                                </div>
                                <div className="sign-btn">
                                    <button className="btn btnlightblue">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NewsLetter