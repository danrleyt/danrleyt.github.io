import React from 'react';

const Header = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Interests
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Awards
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
