import React from 'react'

const BlogPostCard = ({markName , cssClass}) => {
    return (
        <div className="post-wrap mb-4">
            <div className="post-img">
                <img src="img/post-img1.png" alt="img" className="img-fluid" />
            </div>
            <div className="postcnt">
                <div className="tagbox mb-3 d-flex align-items-center justify-content-between">
                    <a href="#" className={cssClass}>{markName}</a>
                    <div className="blogdate"><a href="#">October 10 , 2021</a></div>
                </div>
                <h4>Trending NFTs: Steph Curry, Creature World, and more</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
            </div>
        </div>
    )
}

export default BlogPostCard