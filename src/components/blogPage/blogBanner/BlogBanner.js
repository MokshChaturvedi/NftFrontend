import React from "react";
import CarouselBanner from "../../../common/CarouselBanner/CarouselBanner";
import BlogBannerItem from "./blogBannerItem/BlogBannerItem";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

const BlogBanner = () => {
  return (
    <div className="blogpost">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-slider slider">
              <CarouselBanner responsive={responsive} autoSlide={true}>
                <BlogBannerItem />
                <BlogBannerItem />
                <BlogBannerItem />
                <BlogBannerItem />
                <BlogBannerItem />
                <BlogBannerItem />
              </CarouselBanner>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
