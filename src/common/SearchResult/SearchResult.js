import React from "react";
import { useHistory } from "react-router-dom";
import cryptonlogo from "../../assets/img/cryptonlogo.svg";
import backendUrl from '../../constants/constants';


const SearchResult = ({searchedData}) => {

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/collection/${id}`)
    }

    const collection = searchedData?.data?.data

  return (
    <div className="searchItemContainer w-100">

        {
            collection?.length === 0 && 
            <div className='text-white p-4 text-center'> No Collection Found</div>
        }
        {
            collection?.map((e,i) => 
            {
            var logo_image = e?.logo_image.replace("public", backendUrl.BACKEND_URL)
            var id = e?._id
            return (<div className="searchItem" onClick={() => handleClick(id)}>
                <img src={logo_image} alt="cryptonlogo" className="searchImage" />
                <span>{e?.collection_name}</span>
            </div>)
            }
            ) 
        }
    </div>
  );
};

export default SearchResult;
