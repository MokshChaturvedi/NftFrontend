import React from 'react'
import { useHistory } from 'react-router-dom'

const NoDataFound = ({ data, onClickToGo }) => {

  const history = useHistory()

  const goToCLick = () => {
    history.push(onClickToGo)
    window.scrollTo(0, 0)
  }

  const customStyle = { display: "block", textAlign: "center", cursor: "pointer" }

  let isLogin = localStorage.getItem("isLogin")
  let isAdmin = localStorage.getItem("roleType")
  console.log("get data item data", data);

  return (

    <div>
      <div>
        <div className="d-flex justify-content-center p-5">
          <div className="" role="status" style={{ color: "white" }}>
            <span className="headingWh">No {data} Found</span>
            <div className="back-homeBtn browse">
              {isLogin === "true" && isAdmin === "admin" &&
                <a className="back-home headingWh" onClick={goToCLick} style={customStyle}>Create {data}</a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoDataFound