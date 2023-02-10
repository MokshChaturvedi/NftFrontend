import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CollectionCard from '../common/CollectionCard/CollectionCard'
import LoadingBackdrop from '../common/LoadingBackdrop/LoadingBackdrop'
import NoDataFound from '../common/NoDataFound/NoDataFound'
import { getCollectionByUserApi } from '../redux/collectionSlice'

const Collections = ({ getCollectionByUserData, onGetCollectionByUserApi }) => {

  const collectionStatus = getCollectionByUserData?.status
  const collectionData = getCollectionByUserData?.data?.data

  useEffect(() => {
    onGetCollectionByUserApi()
  }, [])

  return (
    <div>
      <div className="popularCollection mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
        <div className="container">
          <h2 className="headingWh mb-2 mb-md-4"> My Collections</h2>
          <div className='row'>
            {collectionStatus === 'pending' && <LoadingBackdrop />}
            {collectionData?.length < 1 && <NoDataFound data={"Collections"} onClickToGo={'/create-collection'} />}
            {collectionData?.length > 0 && collectionData?.map((data, i) =>
              <div className="col-md-6 col-xl-4 mb-4" key={i}>
                <CollectionCard collection={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    getCollectionByUserData: state.collection.getCollectionByUserApiStatus
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetCollectionByUserApi: () => dispatch(getCollectionByUserApi()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Collections)

