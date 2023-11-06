import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Frontpg.css";
import img from "../Imges/imgs.webp";

const Navigation = () => {
  return (
    <>
  
      <header>
        <div className="container-fluid">
          <div className="navb-logo">
            <img className="logos" src={img} alt="Logo" />
          </div>
          <div className="navb-items ms-auto d-none d-xl-flex">
            <div className="item">
              <Link className="link" to="/">Home</Link>
            </div>
           
            
            <div className="item">
              <div className="dropdown">
                <div
                  className="text "
                  type="text"
                  id="dropdownMenu"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cases
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li>
                    <a className="dropdown-item" href="#">
                    Criminal Cases
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Civil Cases
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Family Cases »
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                        Marriage 
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                        Paternity 
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                        Divorce»{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                            Guardianship
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Multi level 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                        civil cases
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                        Dative
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            

            <div className="item">
              <a href="about" className="link">About</a>
            </div>
            <div className="item">
              <a href="/contact" className="link">Contact</a>
            </div>
            <div className="item-button">
              <div className="buttn">
              <Link to="/login"  type="button" className="btn btn-light btn-sm btnn">Login</Link>
              </div>
            </div>
          </div>

          <div className="mobile-toggler d-lg-none">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              <i className="fa-solid fa-bars" />
            </a>
          </div>

          <div
            className="modal fade"
            id="navbModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <div className="navb-logo">
            <img className="logos" src={img} alt="Logo" />
          </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-line">
                    <i className="fa-solid fa-house" />
                    <Link to="/">Home</Link>
                  </div>
                  <div className="modal-line">
                    <i className="fa-solid fa-bell-concierge" />
                    <a href="/services">Services</a>
                  </div>
                  <div className="modal-line">
                    <i className="fa-solid fa-bell-concierge" />
                    <div className="dropdown">
                      <div
                        className="text "
                        type="text"
                        id="dropdownMenu"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Cases
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Submenu »
                          </a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item 1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item 2
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item 3 »{" "}
                              </a>
                              <ul className="dropdown-menu dropdown-submenu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Multi level 1
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Multi level 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item 4
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Submenu item 5
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="modal-line">
                    <i className="fa-solid fa-circle-info" />
                    <a href="/about">About</a>
                  </div>
                  <div className="modal-line">
                    <i className="fa-solid fa-circle-info" />
                    <a href="/contact">Contact</a>
                  </div>
                  <div className="buttn">
                <Link to="/login"  type="button" className="btn btn-light btn-sm btnn">Login</Link>
                <Link to="/register" type="button" className="btn btn-light btn-sm btnn">  Register</Link>
              </div>
                </div>
                <div className="mobile-modal-footer">
                  <a target="_blank" href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a target="_blank" href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a target="_blank" href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                  <a target="_blank" href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
