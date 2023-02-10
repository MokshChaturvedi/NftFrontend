import React , {useEffect} from "react";
import { connect } from "react-redux";
import BannerSection from "../components/homePage/bannerSection/BannerSection";
import CreateAndSellNft from "../components/homePage/createAndSellNft";
import LastAddedItem from "../components/homePage/lastAddedItem";
import LiveAuction from "../components/homePage/liveAuction";
import PopularCollections from "../components/homePage/popularCollections";
import TopSellers from "../components/homePage/topSellers";
import { getAllCollectionApi, getAllLiveAuctionItemApi, getLastAddedItemApi } from "../redux/collectionSlice";


const Home = ({
  onGetAllCollection , 
  getAllCollectonData,
  onGetLastAddedItem,
  getLastAddedItemData,
  onGetAllLiveAuctionItem,
  getAllLiveAuctionItemData

}) => {

  useEffect(() => {
    onGetAllCollection()
    onGetLastAddedItem()
    onGetAllLiveAuctionItem()
  },[])

  return (
    <>
      <BannerSection />
      <PopularCollections collection = {getAllCollectonData}/>
      <TopSellers />
      <LastAddedItem item={getLastAddedItemData}/>
      <LiveAuction item={getAllLiveAuctionItemData}/>
      <CreateAndSellNft />
    </>
  );
};

const mapStateToProps = (state) => {
  return{
    getAllCollectonData: state.collection.getAllCollectionApiStatus,
    getLastAddedItemData: state.collection.getLastAddedItemApiStatus,
    getAllLiveAuctionItemData: state.collection.getAllLiveAuctionItemStatus
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetAllCollection: () => dispatch(getAllCollectionApi()),
  onGetLastAddedItem: () => dispatch(getLastAddedItemApi()),
  onGetAllLiveAuctionItem: () => dispatch(getAllLiveAuctionItemApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
