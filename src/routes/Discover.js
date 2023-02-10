import React from "react";
import DiscoverFilterSection from "../components/discoverPage/discoverFilterSection/DiscoverFilterSection";
import DiscoverItemSection from "../components/discoverPage/discoverItemSection/DiscoverItemSection";
import DiscoverMobileviewFilterModel from "../components/discoverPage/discoverMobileViewFilterModel/DiscoverMobileviewFilterModel";

const Discover = () => {
    return (
        <div className="popularCollection mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
            <div className="container">
                <DiscoverFilterSection />
                <DiscoverItemSection />
                <DiscoverMobileviewFilterModel />
            </div>
        </div>
    );
};

export default Discover;
