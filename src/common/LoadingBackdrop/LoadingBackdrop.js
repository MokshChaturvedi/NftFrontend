import React from 'react'

const LoadingBackdrop = () => {
    return (
        <div>
            <div className="d-flex justify-content-center p-5">
                <div className="spinner-border" role="status" style={{color: "white"}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingBackdrop