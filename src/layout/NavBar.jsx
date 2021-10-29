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
import { useDispatch } from "react-redux";
import { toggleDisconnect } from "../store/reducers/generalSlice";

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
  const dispatch = useDispatch()
  const disconnect = () => {
    dispatch(toggleDisconnect(true))
  }
  const wallet = account ? account : "";
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
                  <Image src={Logo} fluid />
                </Link>
              </div>
            </div>
            <div className="headerright">
              {wallet ? (
                <a onClick={disconnect} className="conWallBtn clickable">
                  {walletString} <Image src={GreenDot} fluid />
                </a>
              ) : (
                <Link className="linkNoConne">
                  <Image src={RedCircle} fluid /> Wallet not connected
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
