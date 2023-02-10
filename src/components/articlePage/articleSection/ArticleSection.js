import React from 'react'

const ArticleSection = () => {
    return (
        <div className="articlesec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="article-wrap">
                            <div className="article-img mb-4">
                                <img src="img/article-mainimg.png" alt="img" className="img-fluid" />
                            </div>
                            <div className="article-detail">
                                <div className="tagbox mb-5 d-flex align-items-center justify-content-between">
                                    <a href="#" className="greenbtn">Photography</a>
                                    <div className="blogdate"><a href="#">October 10 , 2021</a></div>
                                </div>
                                <h2 className="mb-4">Lorem Ipsum is simply dummy text of the <span className="textbluecolor">printing and typesetting industry</span></h2>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="social-contact">
                                    <a href="#" className="twiter-icon">
                                        <img src="img/twittericon.svg" alt="icon" />
                                        tweet
                                    </a>
                                    <a href="#" className="fb-icon">
                                        <img src="img/facebookicon.svg" alt="icon" />
                                        share
                                    </a>
                                    <a href="#" className="vk-icon">
                                        <img src="img/vk.svg" alt="icon" />
                                        share
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ArticleSection