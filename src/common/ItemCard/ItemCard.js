import React from 'react'
import lastaddeditemimg01 from '../../assets/img/last-added-itemimg01.png'
import priceicon from '../../assets/img/priceicon.svg'
import cardanoicon from '../../assets/img/cardano.png'
import hearticon from '../../assets/img/hearticon.svg'
import backendUrl from "../../constants/constants"
import { useHistory } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const ItemCard = ({item}) => {
        
    const history = useHistory()
    const itemImage = item?.upload_file?.replace("public", backendUrl.BACKEND_URL) || lastaddeditemimg01;
    const itemName  = item?.item_name 
    const itemPrice = item?.price
    const itemId = item?._id
    const collectionName = item?.collection_id?.collection_name

    const goToItemDetails = (id) => {
        history.push(`/item/${id}`)
        window?.scrollTo(0, 0)
    }

    let imageType = ['png' , 'jpg' , 'jpeg' , 'gif' , 'svg' , 'webp']
    let videoType = 'mp4'
    let audioType = 'mp3'
    let fileType = itemImage?.split(".")?.slice(-1)[0]

    const fileToShow = () => {
        if (imageType.includes(fileType)) {
            return <img src={itemImage} className="img-fluid" alt="lastaddeditemimg01" style={{height: "252px"}}/>
        }
        else if(fileType === videoType){
            return <video src={itemImage} controls style={{height: "252px" , display:"list-item" , width: '100%' , background:"white"}} />
        }
        else if(fileType === audioType){
            return <AudioPlayer src={itemImage}  style={{height: "252px"}}/>
        }
         else {
            return <img src={lastaddeditemimg01} className="img-fluid" alt="lastaddeditemimg01" />
        }
    }

    return (
        <div className="aboutitem" onClick={() => goToItemDetails(itemId)} style={{cursor: "pointer"}}>
            <div className="aboutitemImg">
                {fileToShow()}
            </div>
            <div className="bgdarkbluecolor aboutitemcnt">
                <div className="itemtitlecode">
                    <h2 className="textgraycolor">{collectionName}</h2>
                    <h3 className="textwhitecolor">{itemName}</h3>
                </div>
                <div className="itemtitlePrice">
                    <h2 className="textgraycolor">Price</h2>
                    <h3 className="textwhitecolor">
                        <img src={cardanoicon} alt='priceicon'className='me-1'/> 
                        <strong>{itemPrice + " ADA"}</strong>
                        </h3>
                    <h4 className="textgraycolor"><span><img src={hearticon} /></span> 56</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemCard