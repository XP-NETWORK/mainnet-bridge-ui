import React, { Fragment, useState } from 'react';
import {Navbar, Container, Nav, Image , Modal, Button, Header, Title, Body} from 'react-bootstrap';
import Logo from '../assets/img/logo.svg';
import RedCircle from '../assets/img/redCircle.svg';
import GreenDot from '../assets/img/walletSvg.png';
import {Link, NavLink} from "react-router-dom";
import Classes from './NavBar.module.css';
import selectnft_5 from '../assets/img/selectnft/selectnft_5.png';

import Close from '../assets/img/icons/closeBl.svg';
import ConnectBridge from '../assets/img/icons/ConnectBridge.svg';

import Ledger from '../assets/img/icons/lefger.svg';
import MetaMask from '../assets/img/icons/MetaMask.svg';
import Trezor from '../assets/img/icons/trezor.svg';
import WalletConnect from '../assets/img/icons/WalletConnect.svg';
import WalletConnect2 from '../assets/img/icons/WalletConnect2.svg';
import TransferNFTModal from '../pages/TransferNFT/components/TransferNFTModal';
import SelectItem from '../UIElemnts/SelectItem';
import { Dropdown } from 'semantic-ui-react';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow_top = () => setShow(true);  
    return (
      <>
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
              {/* connect wollet modal start */}
              <TransferNFTModal/>
              {/* connect wollet modal end */}
              <Link to="#link" className="conWallBtn linkConne">
                    dfghjk67890...7890 <Image src={GreenDot} fluid/>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      </>
    );
};

export default NavBar;
