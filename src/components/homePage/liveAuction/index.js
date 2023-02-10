import React from "react";
import CarouselBanner from "../../../common/CarouselBanner/CarouselBanner";
import ItemCard from "../../../common/ItemCard/ItemCard";
import NoDataFound from "../../../common/NoDataFound/NoDataFound";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const LiveAuction = ({item}) => {

  let itemLength = item?.data?.data?.length > 0

  return (
    <div className="LastAddedItems mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="headingWh mb-3 mb-sm-3 mb-md-4 mb-xl-4">
              Live Auction
            </h2>
            <div className="lastAdded slider">
              {!itemLength && <NoDataFound data={"Items"} onClickToGo={'/create-item'} />}

              <CarouselBanner responsive={responsive}>
                {
                  itemLength && item?.data?.data?.map((e, i) =>
                    <ItemCard item={e?.item_id} key={i} />
                  )
                }
              </CarouselBanner>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
