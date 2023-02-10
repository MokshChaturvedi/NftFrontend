import React from 'react'
import collectitem01 from "../../../../assets/img/collectitem01.png"
import priceicon from "../../../../assets/img/priceicon.svg"
import hearticon from "../../../../assets/img/hearticon.svg"

const PopularCollectionCard = () => {
    return (
        <div className="aboutitem">
            <div className="aboutitemImg"><img className="img-fluid" src={collectitem01} alt="img" /></div>
            <div className="bgdarkbluecolor aboutitemcnt">
                <div className="itemtitlecode">
                    <h2 className="textgraycolor">Cryptosharks</h2>
                    <h3 className="textwhitecolor">Cryptosharks #4939</h3>
                </div>
                <div className="itemtitlePrice">
                    <h2 className="textgraycolor">Price</h2>
                    <h3 className="textwhitecolor"><img src={priceicon} /> <strong>0, 006</strong></h3>
                    <h4 className="textgraycolor"><span><img src={hearticon} /></span> 56</h4>
                </div>
            </div>
        </div>
    )
}

export default PopularCollectionCard