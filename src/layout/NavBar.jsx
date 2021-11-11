import React, { Fragment, useState,useRef } from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Button,
  Header,
  Title,
  Body,
} from "react-bootstrap";
import Logo from "../assets/img/logo.svg";
import LogoLight from "../assets/img/light/logo.svg";
import RedCircle from "../assets/img/redCircle.svg";
import GreenDot from "../assets/img/walletSvg.png";
import bridgeLogoNew from "../assets/images/bridgeLogoNew.svg"
import { Link, NavLink } from "react-router-dom";
import Classes from "./NavBar.module.css";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { setElrondWallet, toggleDisconnect } from "../store/reducers/generalSlice";
import Modal from 'react-modal';
import Menu from "../assets/img/icon/menu.svg";
import MenuLight from "../assets/img/light/menu.svg";

import BookSvg from "../assets/images/menu/book.svg"
import VideoSvg from "../assets/images/menu/video.svg"
import MarkSvg from "../assets/images/menu/mark.svg"
import yellSvg from "../assets/images/menu/yell.svg"
import globSvg from "../assets/images/menu/glob.svg"

import {DetectOutsideClick} from "../hooks/hookAssistors"

const NavBar = () => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React();

  const {elrondWallet, tronWallet} = useSelector(s => s.general)
  const dispatch = useDispatch()
  const disconnect = () => {
    dispatch(toggleDisconnect(true))
  }
  const ref = useRef(null)
  const wallet = account ? account : elrondWallet ? elrondWallet : tronWallet ? tronWallet : ''
  const walletString = wallet
    ? `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4)}`
    : "";

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(!modalIsOpen);

 
    DetectOutsideClick(ref, () =>
    setTimeout(() => {
      setIsOpen(false);
    }, 100)
  );
  

  return (
    <>
      <header className="siteHeader" id="headerArea">
        <div className="container">
          <div className="headerConent">
            <div className="headerLeft">
              {/* <div className="navBrand dark">
                <Link to="/" className="logo">
                  <Image src={Logo} fluid /><p>ALPHA</p>
                </Link>
              </div> */}
              <div className="navBrand light">
                <Link to="/" className="logo">
                  <Image src={bridgeLogoNew} />
                </Link>
              </div>
            </div>

            <div className="headerright">
              <div className="menuArea dark">
                {/* <span className="navTriger darkM"> <Image src={Menu} /></span> */}
                <div className="navTriger lightM" onClick={openModal}><Image src={MenuLight} /></div>
                {modalIsOpen ? <div className="navabar-pop-up-menu" ref={ref}>
                  <div className="navabar-pop-up">
                  <div className="navbar-pop-up-row"><img src={MarkSvg} alt={'mark'}/>About</div>
                  <div className="navbar-pop-up-row"><img src={yellSvg} alt={"yell"}/> FAQs</div>
                  <div className="navbar-pop-up-row"><img src={BookSvg} alt={"book"}/> Docs</div>
                  <div className="navbar-pop-up-row"><img src={VideoSvg} alt={"video"}/>Video Tutorial</div>
                  <div className="navbar-pop-up-row"><img src={globSvg} alt={"glob"}/>Xp.network website</div>
                  </div>
                </div> : ''}
              </div>
              {/* {wallet ? (
                <a onClick={disconnect} className="conWallBtn clickable">
                  {walletString} <Image src={GreenDot} fluid />
                </a>
              ) : (
                <a className="linkNoConne">
                  <Image src={RedCircle} fluid /> Wallet not connected
                </a>
              )} */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
