import React from 'react'
import { useHistory } from 'react-router-dom';
import local_banner_image from '../../assets/img/popularcolimg03.png'
import local_logo_image from '../../assets/img/popularcolicon03.png'
import local_checkIcon_image from '../../assets/img/checkicon.svg'
import backendUrl from "../../constants/constants"


const CollectionCard = ({ collection }) => {

    const history = useHistory()
    const goToCollectionDetails = (id) => {
        history.push(`collection/${id}`)
        window?.scrollTo(0, 0)
    }

    let logo_image = collection?.logo_image.replace("public", backendUrl.BACKEND_URL);
    let banner_image = collection?.banner_image.replace("public", backendUrl.BACKEND_URL);

    var maxLength = 80;
    var description;
    if (collection?.description.length > maxLength) {
        description = collection?.description.substring(0, maxLength) + '...'
    } else {
        description = collection?.description.substring(0, maxLength)
    }

    return (
        <>
            <div className="creators" onClick={() => goToCollectionDetails(collection?._id)} style={{ cursor: "pointer" }}>
                <div className="creatorImg">
                    <img className="img-fluid" src={banner_image} alt="img" style={{height: '174px'}}/>
                </div>
                <div className="creatorIcon">
                    <img className="img-fluid" src={logo_image} alt="local_logo_image" style={{height: '65px'}}/>
                    <div className="creatorcheck">
                        <img src={local_checkIcon_image} alt="img" />
                    </div>
                </div>
                <div className="creatorsText text-center">
                    <h2 className="textwhitecolor">{collection?.collection_name}</h2>
                    <h3 className="textbluecolor">by {collection?.user_id?.username}</h3>
                    <p className="textgraycolor" style={{height: "20px"}}>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CollectionCard