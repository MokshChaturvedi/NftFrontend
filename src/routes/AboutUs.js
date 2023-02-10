import React from 'react'

const AboutUs = () => {
    return (
        <div className="about-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-content">
                            <h2 className="textwhitecolor abouth">Lorem Ipsum - <span>is simply dummy</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.</p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-img">
                            <img src="img/about-img1.png" alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2 className="headingWh mb-4 mb-sm-4 mb-md-4 mb-xl-5">Create and Sell your NFTs</h2>
                    </div>
                </div>
                <div className="row mb-3 mb-lg-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="createsell">
                            <div className="createsellHead">
                                <div className="creatsellicon"><img src="img/setupwalleticon.svg" alt="img" /></div>
                                <h3 className="textwhitecolor">Set up your wallet</h3>
                            </div>
                            <p className="textgraycolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="createsell">
                            <div className="createsellHead">
                                <div className="creatsellicon"><img src="img/collectionicon.svg" alt="img" /></div>
                                <h3 className="textwhitecolor">Create your collection</h3>
                            </div>
                            <p className="textgraycolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="createsell">
                            <div className="createsellHead">
                                <div className="creatsellicon"><img src="img/addyouricon.svg" alt="img" /></div>
                                <h3 className="textwhitecolor">Add your NFTs</h3>
                            </div>
                            <p className="textgraycolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="createsell">
                            <div className="createsellHead">
                                <div className="creatsellicon"><img src="img/listthemicon.svg" alt="img" /></div>
                                <h3 className="textwhitecolor">List them for sale</h3>
                            </div>
                            <p className="textgraycolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                        </div>
                    </div>
                </div>
                <div className="row about-row2 mt-3 mt-lg-3 mt-xl-5 pt-3 pt-lg-3 pt-xl-5">
                    <div className="col-xl-6">
                        <div className="about-img">
                            <img src="img/about-img2.png" alt="img" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-xl-6 pb-5 pb-md-0">
                        <div className="about-content">
                            <h2 className="textwhitecolor abouth">Lorem Ipsum - is simply dummy</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className="watch-btn">
                                <button className="btn btnlightblue mt-5">Watch video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs