import React from 'react'
const ActivityTableItem = () => {
    return (
        <tr>
            <td className="textwhitecolor offericon">
                <img src="img/cart-icon.svg" alt="img" /> Sale
            </td>
            <td className="textwhitecolor">
                <div className="actiCollect">
                    <div className="activitItem"><img className="img-fluid" src="img/activityItem01.svg" alt="img" /></div>
                    <div className="actiCnt">
                        <span className="textgraycolor">Jungle Freaks</span>
                        Jungle Freaks by Trosley
                        <div className="actiCntSm"><img className="img-fluid" src="img/priceicon.svg" alt="img" /> 0,002</div>
                    </div>
                </div>
            </td>
            <td className="textwhitecolor text-end"><img className="img-fluid" src="img/priceicon.svg" alt="img" /> 0,002</td>
            <td className="textwhitecolor text-center">1</td>
            <td className="textbluecolor text-end">alphabet</td>
            <td className="textbluecolor text-end">barbos2021</td>
            <td className="textbluecolor text-end"><div className="offericonSm"><img src="img/handicon.svg" alt="img" /> Offer</div>20 seconds ago</td>
        </tr>
    )
}

export default ActivityTableItem