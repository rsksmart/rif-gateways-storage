import React from "react";
import LogoFooter from "rifui/LogoFooter";

export default () => (
  <footer id="footer" className="bg-dark-alt pt-4 pb-4">
    <div className="container">
      <div className="row">
        <div className="col-sm-3 mb-4">
          <LogoFooter />
        </div>
        <div className="col-sm-3 mb-4">
          <h5 className="text-light">RIF</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="active" href="/">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a href="/">Link</a>
            </li>
            <li className="nav-item">
              <a href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="disabled" href="/" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 mb-4">
          <h5 className="text-light">RESOURCES</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="active" href="/">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a href="/">Link</a>
            </li>
            <li className="nav-item">
              <a href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="disabled" href="/" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 mb-4">
          <h5 className="text-light">COPYRIGHT</h5>
          <p className="text-primary">
            © 2019 RIF Labs Limited. <br />
            All Rights Reserved.
          </p>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link h3" href="/">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h3" href="/">
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h3" href="/">
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
