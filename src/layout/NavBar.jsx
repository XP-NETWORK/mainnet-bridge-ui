import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import Logo from '../assets/img/logo.svg';
import RedCircle from '../assets/img/redCircle.svg';
import GreenDot from '../assets/img/walletSvg.png';
import {Link, NavLink} from "react-router-dom";
import Classes from './NavBar.module.css';
import { useWeb3React } from '@web3-react/core';

const NavBar = () => {
  const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React()

  const wallet = account ? account : ''
  const walletString = wallet ? `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4)}` : ''
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

              {
              wallet 
              ? <Link className="conWallBtn">
                  {walletString} <Image src={GreenDot} fluid/>
                </Link> 
              : <Link className="linkNoConne">
                  <Image src={RedCircle} fluid /> Wallet not connected
                </Link> 
              }
            </div>
          </div>
        </div>
      </header>
    );
};

export default NavBar;
