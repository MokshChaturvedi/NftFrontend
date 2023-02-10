import React from 'react'

const BlogBannerItem = () => {
    return (
        <div className="item">
            <div className="blog-wraper d-flex align-middle justify-content-between">
                <div className="blogcnt">
                    <a href="#" className="greenbtn mb-4">Safety</a>
                    <h2 className="headingWh mb-3">7 tips for selecting NFT for beginners</h2>
                    <div className="blogdate mb-3"><a href="#">October 10 , 2021</a></div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                </div>
                <div className="blog-img">
                    <img src="img/blog-img1.png" alt="img" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default BlogBannerItem