import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import Logo from '../assets/img/logo.svg';
import RedCircle from '../assets/img/redCircle.svg';
import GreenDot from '../assets/img/walletSvg.png';
import {Link, NavLink} from "react-router-dom";
import Classes from './NavBar.module.css';

const NavBar = () => {
    return (
    <header className="siteHeader" id="headerArea">
        <div className="container">
          <div className="headerConent">
            <div className="headerLeft">
              <div className="navBrand">
                <Link to="/" className="logo">
                    <Image src={Logo} fluid/>
                </Link>
              </div>
            </div>
            <div className="headerright">

              <Link to="#link" className="linkNoConne">
                <Image src={RedCircle} fluid /> Wallet not connected
              </Link>

              <Link to="#link" className="conWallBtn linkConne">
                    dfghjk67890...7890 <Image src={GreenDot} fluid/>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
};

export default NavBar;