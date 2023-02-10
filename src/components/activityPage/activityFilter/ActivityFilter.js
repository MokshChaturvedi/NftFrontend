import React from 'react'

const ActivityFilter = () => {
    return (
        <div className="row">
            <div className="col-md-12 col-lg-6">
                <div className="row">
                    <div className="col-md-6 col-xl-4  mb-3 mt-2 mb-md-0 mt-md-0">
                        <div className="btn-group">
                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Event type
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Listings</a></li>
                                <li><a className="dropdown-item" href="#">Sales</a></li>
                                <li><a className="dropdown-item" href="#">Bids</a></li>
                                <li><a className="dropdown-item" href="#">Transfers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="btn-group">
                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                All chains
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Ethereum</a></li>
                                <li><a className="dropdown-item" href="#">Polygon</a></li>
                                <li><a className="dropdown-item" href="#">Klaytn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 activityTags 1d-flex justify-content-end d-none d-lg-flex">
                <button className="btn btndarkblue">Bids</button>
                <button className="btn btndarkblue">Listings</button>
                <button className="btn btnlightblue">Clear All <img src="img/closeicon.svg" alt="img" /></button>
            </div>
        </div>

    )
}

export default ActivityFilter