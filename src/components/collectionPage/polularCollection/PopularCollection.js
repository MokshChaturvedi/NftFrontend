import React from 'react'
import PopularCollectionCard from './popularCollectionCard/PopularCollectionCard'

const PopularCollection = () => {
    return (
        <div className="popularCollection mt-3 pt-3 mt-md-4 pt-md-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row d-none d-md-flex">
                            <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
                                <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Price
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="#">Highest price</a></li>
                                    <li><a className="dropdown-item" href="#">Lowest Price</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
                                <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Newest
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="#">Newest</a></li>
                                    <li><a className="dropdown-item" href="#">Oldest</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    All items
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="#">Single items</a></li>
                                    <li><a className="dropdown-item" href="#">Bundles</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Currency
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="#">USD</a></li>
                                    <li><a className="dropdown-item" href="#">Ethereum</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-2 mt-md-5">
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <PopularCollectionCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PopularCollection