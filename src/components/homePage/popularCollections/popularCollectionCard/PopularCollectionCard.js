import React from "react";

const PopularCollectionCard = () => {
  return (
    <div className="creators">
      <div className="creatorImg">
        <img className="img-fluid" src="img/popularcolimg03.png" alt="img" />
      </div>
      <div className="creatorIcon">
        <img className="img-fluid" src="img/popularcolicon03.png" alt="imig" />
        <div className="creatorcheck">
          <img src="img/checkicon.svg" alt="img" />
        </div>
      </div>
      <div className="creatorsText text-center">
        <h2 className="textwhitecolor">RTFKT Creators</h2>
        <h3 className="textbluecolor">by RTFKT</h3>
        <p className="textgraycolor">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default PopularCollectionCard;
