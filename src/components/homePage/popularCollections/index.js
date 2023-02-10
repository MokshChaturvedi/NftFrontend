import React from "react";
import CarouselBanner from "../../../common/CarouselBanner/CarouselBanner";
import PopularCollectionCard from "./popularCollectionCard/PopularCollectionCard";
import CollectionCard from '../../../common/CollectionCard/CollectionCard'
import NoDataFound from "../../../common/NoDataFound/NoDataFound";
import { connect } from "react-redux";
import { getCollectionByCategoriesApi } from "../../../redux/collectionSlice";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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


const PopularCollections = ({
  collection,
  onGetCollectionByCategories,
  collectionByCategoriesData
}) => {

  const [tabs, setTabs] = React.useState("AllCategories")
  const handleTabs = (name) => {
    setTabs(name)
    name !== "AllCategories" && onGetCollectionByCategories({ collection_categories: name })
  }

  let collectionLength = collection?.data?.data?.length > 0

  const categoriesCollectionLenght = collectionByCategoriesData?.data?.data?.length > 0

  return (
    <div className="popularCollection">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="headingWh mb-4">Popular collections</h2>
            <div className="tab-sec">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className={`nav-link d-none d-sm-none d-md-block ${tabs === "AllCategories" && "active"}`} onClick={() => handleTabs('AllCategories')}>All categories</button>
                  <button className={`nav-link d-none d-sm-none d-md-block ${tabs === "Art" && "active"}`} onClick={() => handleTabs('Art')} >Art</button>
                  <button className={`nav-link d-none d-sm-none d-md-block ${tabs === "Digital" && "active"}`} onClick={() => handleTabs('Digital')} >Digital</button>
                  <button className={`nav-link d-none d-sm-none d-md-block ${tabs === "Gaming" && "active"}`} onClick={() => handleTabs('Gaming')}>Gaming</button>
                  <div className="more-tab">
                    <a href="#" className="textbluecolor dropdown-toggle categorytab" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Choose category <img src="img/bluedown.png" alt="arrow-down" /></a>
                    <div className="more-box nav nav-tabs dropdown-menu" aria-labelledby="dropdownMenuLink" role="tablist">
                      <button className={`nav-link dropdown-item d-sm-block d-md-none d-xl-none ${tabs === "AllCategories" && "active"}`} onClick={() => handleTabs('AllCategories')}>All categories</button>
                      <button className={`nav-link dropdown-item d-sm-block d-md-none d-xl-none ${tabs === "Art" && "active"}`} onClick={() => handleTabs('Art')} >Art</button>
                      <button className={`nav-link dropdown-item d-sm-block d-md-none d-xl-none ${tabs === "Digital" && "active"}`} onClick={() => handleTabs('Digital')} >Digital</button>
                      <button className={`nav-link dropdown-item d-sm-block d-md-none d-xl-none ${tabs === "Gaming" && "active"}`} onClick={() => handleTabs('Gaming')}>Gaming</button>
                      <button className={`nav-link dropdown-item ${tabs === "Memes" && "catActive"}`} onClick={() => handleTabs('Memes')}>Memes</button>
                      <button className={`nav-link dropdown-item ${tabs === "Music" && "catActive"}`} onClick={() => handleTabs('Music')}>Music</button>
                      <button className={`nav-link dropdown-item ${tabs === "News" && "catActive"}`} onClick={() => handleTabs('News')}>News</button>
                      <button className={`nav-link dropdown-item ${tabs === "Photography" && "catActive"}`} onClick={() => handleTabs('Photography')}>Photography</button>
                      <button className={`nav-link dropdown-item ${tabs === "Sports" && "catActive"}`} onClick={() => handleTabs('Sports')}>Sports</button>
                      <button className={`nav-link dropdown-item ${tabs === "Utility" && "catActive"}`} onClick={() => handleTabs('Utility')}>Utility</button>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="tab-content" id="nav-tabContent">
                {tabs === "AllCategories" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!collectionLength && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          collectionLength && collection?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Art" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Digital" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Gaming" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Memes" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Music" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "News" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Photography" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Sports" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
                {tabs === "Utility" &&
                  <div className="tab-pane fade show active">
                    <div className="popular slider">
                      {!categoriesCollectionLenght && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
                      <CarouselBanner responsive={responsive}>
                        {
                          categoriesCollectionLenght && collectionByCategoriesData?.data?.data?.map((e, i) =>
                            <CollectionCard collection={e} key={i} />
                          )
                        }
                      </CarouselBanner>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collectionByCategoriesData: state.collection.getCollectionByCategoriesApiStatus
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetCollectionByCategories: (payload) => dispatch(getCollectionByCategoriesApi(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopularCollections);
