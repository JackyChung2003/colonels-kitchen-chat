import React from "react";
import "./index.css";
// import navbarItems from "../NavbarItems";
// import navBarItems from "../navBarItems";
import navBarItems from "../navBarItems";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  return (
    <nav>
      <Link to="/ColonelAi" className="link">
        {/* Icon */}
        <svg fill="#ffffff" height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink ="http://www.w3.org/1999/xlink" viewBox="0 0 269.21 269.21" xmlSpace ="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M172.391,76.173c0.301-1.839,0.439-3.587,0.355-5.203l11.604-7.898c4.509-2.228,9.085-1.926,11.502-1.514 c0.189,0.035,6.978,1.445,10.729-1.109c4.619-3.141,5.832-9.455,2.675-14.066c-1.798-2.648-4.61-4.129-7.561-4.369 c0.86-2.822,0.517-5.996-1.273-8.621c-3.14-4.637-9.454-5.832-14.074-2.684c-2.581,1.755-4.12,6.366-4.603,10.702 c-0.215,1.651-1.308,7.311-5.858,11.415l-11.132,7.588c-7.327-1.995-19.262-0.528-31.226,2.924 c12.248,2.291,24.461,6.212,36.436,11.719L172.391,76.173z"></path> <path d="M22.618,182.759h92.292c-2.561-2.336-4.869-4.955-6.854-7.871c-8.687-12.77-10.186-28.202-4.221-43.457 c5.143-13.15,15.36-25.202,29.543-34.848c6.249-4.253,13.823-8.15,21.938-11.452c-10.735-4.175-22.168-7.179-34.153-8.478 c-8.422-0.916-16.686-1.396-24.678-1.396C45.179,75.257,5,95.318,5,147.006C5,164.625,13.81,182.759,22.618,182.759z"></path> <path d="M141.819,108.983c-23.288,15.838-33.628,39.435-21.36,57.467c6.353,9.337,16.843,13.869,28.714,13.869 c11.054,0,23.306-3.928,34.534-11.564c19.958-13.592,40.192-46.498,39.254-65.416l14.023-9.531 c4.316-2.137,9.359-2.645,13.894-1.842c4.059,0.718,9.577,0.977,12.981-1.342c5.574-3.803,7.028-11.416,3.243-17.016 c-2.186-3.184-5.592-4.973-9.153-5.257c1.032-3.415,0.637-7.243-1.54-10.435c-3.812-5.604-11.437-7.036-17.017-3.235 c-3.114,2.116-4.973,7.708-5.565,12.938c-0.25,1.979-1.575,8.826-7.072,13.808l-13.463,9.162c-2.773-0.762-6.099-1.116-9.802-1.116 C185.267,89.474,157.871,98.058,141.819,108.983z"></path> <path d="M258.218,164.293l-21.889-4.378c-0.009-0.075-0.016-0.153-0.025-0.229c-0.561-4.951-3.334-12.179-8.653-20.319 c-1.288,2.436-2.54,4.613-3.647,6.442c-8.927,14.755-20.537,27.637-31.861,35.349c-0.303,0.206-0.611,0.398-0.916,0.601 c22.557,0,41.854,0,65.262,0c4.87,0,8.818-3.948,8.818-8.818C265.307,168.736,262.34,165.117,258.218,164.293z"></path> <path d="M259.74,198.759H8.818c-3.033,0-5.853,1.559-7.468,4.128c-1.613,2.568-1.793,5.786-0.477,8.519l7.882,16.356 c3.683,7.64,11.415,12.497,19.896,12.497h211.254c8.481,0,16.214-4.857,19.897-12.497l7.882-16.356 c1.316-2.732,1.137-5.95-0.477-8.519C265.594,200.317,262.774,198.759,259.74,198.759z"></path> </g> </g></svg>
        KFC Legends AI Twin
      </Link>
      <div className="menu-items">
        {navBarItems.map((item, index) => (
          <Link className="link" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="icons">
        {/* add a link to github */}
        <Link to="https://github.com/JackyChung2003/colonels-kitchen-chat" className="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="github-icon icon-tabler icon-tabler-brand-github"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </Link>
        <div className="mobile-menu-icon">
          <FaBars onClick={toggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;