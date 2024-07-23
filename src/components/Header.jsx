import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Commonbtn from "../components/Commonbtn";

function Header() {


  return (
    <>
    

      <header className="top-header">
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="/assets/images/logo.png" alt="" className="img-fluid"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="#">Services</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="#">Gallery</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="#">Contact</Link>
    </li>
    {/* Add your dropdown logic here if needed */}
  </ul>
  <div className="d-flex">
    <Commonbtn textbtn="Get In Touch" />
  </div>
</div>
  </div>
</nav>
      </header>
    </>
  );
}

export default Header;
