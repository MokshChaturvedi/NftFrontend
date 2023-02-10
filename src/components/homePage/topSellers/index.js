import React from "react";
import TopSellerContent from "./topSellerContent/TopSellerContent";
import TopSellerTab from "./topSellertab/TopSellerTab";

const TopSellers = () => {
  return (
    <div className="TopsellerSec pt-5 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="headingWh mb-4">Top sellers</h2>
            <div className="tab-sec">
                <TopSellerTab />
                <TopSellerContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
