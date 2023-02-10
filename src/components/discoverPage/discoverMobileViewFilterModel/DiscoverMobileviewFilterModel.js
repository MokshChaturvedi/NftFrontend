import React from 'react'

const DiscoverMobileviewFilterModel = () => {
    return (
        <>
            <div className="row d-block d-md-none">
                <div className="col-md-12 text-center">
                    <button
                        type="button"
                        className="btn btnlightblue filterbtnsm"
                        data-bs-toggle="modal"
                        data-bs-target="#filterModal"
                    >
                        Filter
                    </button>
                </div>
            </div>

            <div className="modal fade" id="filterModal" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><img src="img/closebtnmodal.svg" alt="img" /></button>
                        <div className="modal-body">
                            <div className="filters">
                                <div className="filtertop">
                                    <div className="filterLeft">
                                        <div className="btn-group">
                                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                All categories
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Memes</a></li>
                                                <li><a className="dropdown-item" href="#">Photography</a></li>
                                                <li><a className="dropdown-item" href="#">Digital</a></li>
                                                <li><a className="dropdown-item" href="#">News</a></li>
                                                <li><a className="dropdown-item" href="#">Music</a></li>
                                                <li><a className="dropdown-item" href="#">Domain names</a></li>
                                                <li><a className="dropdown-item" href="#">Virtual worlds</a></li>
                                                <li><a className="dropdown-item" href="#">Trading cards</a></li>
                                                <li><a className="dropdown-item" href="#">Sports</a></li>
                                                <li><a className="dropdown-item" href="#">Utility</a></li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Status
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">By now</a></li>
                                                <li><a className="dropdown-item" href="#">On auction</a></li>
                                                <li><a className="dropdown-item" href="#">New</a></li>
                                                <li><a className="dropdown-item" href="#">Has offers</a></li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Currency
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Currency</a></li>
                                                <li><a className="dropdown-item" href="#">USD</a></li>
                                                <li><a className="dropdown-item" href="#">Ethereum</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filterRight">
                                        <button className="btn btndarkblue">Arts</button>
                                        <button className="btn btndarkblue">Bids</button>
                                        <button className="btn btndarkblue">Photography</button>
                                    </div>
                                </div>
                                <div className="filtertop">
                                    <div className="filterLeft">
                                        <div className="btn-group">
                                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Price
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Price</a></li>
                                                <li><a className="dropdown-item" href="#">Highest Price</a></li>
                                                <li><a className="dropdown-item" href="#">Lowest Price</a></li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Newest
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Newest</a></li>
                                                <li><a className="dropdown-item" href="#">Oldest</a></li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                All items
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{}}>
                                                <li><a className="dropdown-item" href="#">Single items</a></li>
                                                <li><a className="dropdown-item" href="#">Bundles</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="btn btnlightblue mb-3">Apply</button>
                                    <button className="btn btndarkblue">Clear All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscoverMobileviewFilterModel