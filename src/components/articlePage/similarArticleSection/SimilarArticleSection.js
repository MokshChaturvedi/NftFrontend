import React from 'react'
import BlogPostCard from '../../../common/blogPostCard/BlogPostCard'
import CarouselBanner from '../../../common/CarouselBanner/CarouselBanner'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30,
    },
};

const SimilarArticleSection = () => {
    return (
        <div className="similar-sec pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="headingWh mb-3 mb-sm-3 mb-md-4 mb-xl-5">Similar articles</h2>
                        <div className="similar-aeticle slider">
                            <CarouselBanner responsive={responsive}>
                                <div className="item" style={{ padding: "0 10px" }}>
                                    <BlogPostCard markName={"Spotlight"} cssClass={"catbtn"} />
                                </div>
                                <div className="item" style={{ padding: "0 10px" }}>
                                    <BlogPostCard markName={"Safety"} cssClass={"catbtn green-cate"} />
                                </div>
                                <div className="item" style={{ padding: "0 10px" }}>
                                    <BlogPostCard markName={"Guide"} cssClass={"catbtn pink-cate"} />
                                </div>
                                <div className="item" style={{ padding: "0 10px" }}>
                                    <BlogPostCard markName={"Trending"} cssClass={"catbtn blue-cate"} />
                                </div>
                                <div className="item" style={{ padding: "0 10px" }}>
                                    <BlogPostCard markName={"Spotlight"} cssClass={"catbtn"} />
                                </div>
                            </CarouselBanner>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SimilarArticleSection