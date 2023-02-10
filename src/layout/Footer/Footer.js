import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_menu row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 menu">
                <div className="about">
                  <h2>My account</h2>
                  <ul className="inner_menu">
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Favorites</a>
                    </li>
                    <li>
                      <a href="/collections">My collection</a>
                    </li>
                    <li>
                      <a href="#">Settings</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 menu">
                <div className="about">
                  <h2>Discover</h2>
                  <ul className="inner_menu">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Phorography</a>
                    </li>
                    <li>
                      <a href="#">Domain Names</a>
                    </li>
                    <li>
                      <a href="#">Memes</a>
                    </li>
                    <li>
                      <a href="#">Virtual Worlds</a>
                    </li>
                    <li>
                      <a href="#">Trading Cards</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 menu">
                <div className="about">
                  <h2>Inform Center</h2>
                  <ul className="inner_menu">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="/blogs">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/newsletter">Newsletter</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="community">
          <h4>Join the Community</h4>
          <div className="socialMedia">
            <div className="social-icons  footer-socialIcons">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.872"
                      height="18.172"
                      viewBox="0 0 20.872 18.172"
                    >
                      <g id="XMLID_496_" transform="translate(0 -19.401)">
                        <path
                          id="XMLID_497_"
                          d="M.369,28.114l4.809,1.795L7.04,35.9a.566.566,0,0,0,.9.271l2.681-2.185a.8.8,0,0,1,.975-.027l4.835,3.51a.567.567,0,0,0,.888-.343L20.86,20.084a.567.567,0,0,0-.759-.644L.363,27.054A.567.567,0,0,0,.369,28.114Zm6.371.839,9.4-5.789a.164.164,0,0,1,.2.259L8.579,30.634a1.608,1.608,0,0,0-.5.962l-.264,1.958a.243.243,0,0,1-.474.034L6.326,30.018A.946.946,0,0,1,6.74,28.954Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-share-nodes"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
