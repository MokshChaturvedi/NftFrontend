import React from 'react'

const WalletTab = () => {
    return (
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link d-none d-sm-none d-md-block active" data-bs-toggle="tab" data-bs-target="#SellerTabOne">All</button>
                <button className="nav-link d-none d-sm-none d-md-block" data-bs-toggle="tab" data-bs-target="#SellerTabTwo">24 Hours</button>
                <button className="nav-link d-none d-sm-none d-md-block" data-bs-toggle="tab" data-bs-target="#SellerTabThree">Last week</button>
                <button className="nav-link d-none d-sm-none d-md-block" data-bs-toggle="tab" data-bs-target="#SellerTabFour">Last month</button>
                {/* <div className="more-tab d-block d-sm-block d-md-none">
                    <a href="" className="textbluecolor categoryTimeTab">Choose category <img src="img/bluedown.png" alt="arrow-down" /></a>
                    <div className="more-box nav nav-tabs" id="timeTab" role="tablist">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#SellerTabOne">All</button>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#SellerTabTwo">24 Hours</button>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#SellerTabThree">Last week</button>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#SellerTabFour">Last month</button>
                    </div>
                </div> */}
            </div>
        </nav>

    )
}

export default WalletTab