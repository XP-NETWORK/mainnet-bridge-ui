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
import RedCircle from "../assets/img/redCircle.svg";
import GreenDot from "../assets/img/walletSvg.png";
import { Link, NavLink } from "react-router-dom";
import Classes from "./NavBar.module.css";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { setElrondWallet, toggleDisconnect } from "../store/reducers/generalSlice";

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
  const wallet = account ? account : elrondWallet ? elrondWallet : tronWallet ? tronWallet : ''
  const walletString = wallet
    ? `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4)}`
    : "";
  return (
    <>
      <header className="siteHeader" id="headerArea">
        <div className="container">
          <div className="headerConent">
            <div className="headerLeft">
              <div className="navBrand">
                <Link to="/" className="logo">
                  <Image src={Logo} fluid /><p>ALPHA</p>
                </Link>
              </div>
            </div>
            <div className="headerright">
              {wallet ? (
                <a onClick={disconnect} className="conWallBtn clickable">
                  {walletString} <Image src={GreenDot} fluid />
                </a>
              ) : (
                <a className="linkNoConne">
                  <Image src={RedCircle} fluid /> Wallet not connected
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
