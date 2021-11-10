import React, { Fragment, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Modal,
  Button,
  Header,
  Title,
  Body,
} from "react-bootstrap";
import Logo from "../assets/img/logo.svg";
import LogoLight from "../assets/img/light/logo.svg";
import RedCircle from "../assets/img/redCircle.svg";
import GreenDot from "../assets/img/walletSvg.png";
import { Link, NavLink } from "react-router-dom";
import Classes from "./NavBar.module.css";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { setElrondWallet, toggleDisconnect } from "../store/reducers/generalSlice";

import Menu from "../assets/img/icon/menu.svg";
import MenuLight from "../assets/img/light/menu.svg";


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
  const {elrondWallet} = useSelector(s => s.general)
  const dispatch = useDispatch()
  const disconnect = () => {
    dispatch(toggleDisconnect(true))
  }
  const wallet = account ? account : elrondWallet ? elrondWallet : '';
  const walletString = wallet
    ? `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4)}`
    : "";
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
                  <Image src={LogoLight} />
                </Link>
              </div>
            </div>
            <div className="lightCroseChi">
              <a href="#" className="">CROSS-CHAIN BRIDGE <span>ALPHA</span></a>
            </div>
            <div className="headerright">
              <div className="menuArea dark">
                {/* <span className="navTriger darkM"> <Image src={Menu} /></span> */}
                <span className="navTriger lightM"> <Image src={MenuLight} /></span>
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
