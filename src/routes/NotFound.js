import React from 'react'
import { useHistory } from 'react-router-dom'
import bannerimg01 from '../assets/img/bannerimg01.png'
import patterbannerimg from '../assets/img/patterbannerimg.png'
import bannerimg02 from '../assets/img/bannerimg02.png'
import bannerimg03 from '../assets/img/bannerimg03.png'

const NotFound = ({data}) => {

  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }
  
  return (
    <main className="main">
    <section className="error-page ringersGlow">
        <div className="container">
            <div className="row center">
                <div className="col-md-6">
                    <div className="error-block">
                        <div className="error-image">
                            <img src="img/error.png" alt=""/>
                        </div>
                        <div className="error-content">
                            <h6>Sorry! Page not found</h6>
                        </div>
                        <div className="error-msg">
                            <p>Something went wrong, please <span> go back to Homepage 
                                or report a bug.</span></p>
                        </div>
                        <div className="back-homeBtn">
                            <a href="#" className="back-home" onClick={goToHome}>BACK TO HOME</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="robot">
                        <img src="img/robot.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}

export default NotFound