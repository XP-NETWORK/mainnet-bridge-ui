import React, { Fragment, useEffect, useState } from "react";
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";
import RedCircle from "../../../assets/img/redCircle.svg";
import Close from "../../../assets/img/icons/closeBl.svg";
import ConnectBridge from "../../../assets/img/icons/ConnectBridge.svg";
import {ethers} from 'ethers'
import Ledger from "../../../assets/img/icons/lefger.svg";
import MetaMask from "../../../assets/img/icons/MetaMask.svg";
import TronLinkIcon from "../../../assets/images/tronlinkpro.png";
import Trezor from "../../../assets/img/icons/trezor.svg";
import WalletConnect from "../../../assets/img/icons/WalletConnect.svg";
import WalletConnect2 from "../../../assets/img/icons/WalletConnect2.svg";


import whiteClose from "../../../assets/img/icon/whiteClose.svg";
import WhiteContBrid from "../../../assets/img/icon/WhiteContBrid.svg";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setElrondWallet, setFrom, toggleConnect } from "../../../store/reducers/generalSlice";
import { chainsConfig, EVM, ELROND, CHAIN_INFO } from "./values";
import { useWeb3React } from "@web3-react/core";
import { getFactory, injected } from "../../../wallet/connectors";
import { getChainId, isEVM, isTronLink } from "../../../wallet/helpers";
import Warn from "../../../assets/img/3dwallet.png";
import { TronLink } from "../../../wallet/tronlink";

import {Address, ExtensionProvider} from "@elrondnetwork/erdjs"

const TransferNFTModal = () => {
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

  const dispatch = useDispatch();

  const { isConnectOpen, from, elrondWallet } = useSelector((s) => s.general);
  const [switchNetwork, setSwitchNetwork] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => dispatch(toggleConnect(false));
  async function connect() {
    try {
        await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const connectToElrond = async () => {
    const instance = ExtensionProvider.getInstance()
    try {
      await instance.init()
      await instance.login()
      const { account } = instance
      console.log(elrondWallet)
      if(elrondWallet) {
        console.log('kldklads')
        const factory = await getFactory()
        const fromChain = await factory.inner(chainsConfig.Elrond.Chain)
        // const ticker = await fromChain.issueESDTNft(
        //   ExtensionProvider.getInstance(),
        //   'XPNET',
        //   'XPNET',
        //   false,
        //   false,
        //   true
        // )
        // settik(ticker)
        // console.log(ticker)
        // await fromChain.setESDTRole(
        //   ExtensionProvider.getInstance(),
        //   // ticker,
        //   'XPNET-cdcf5b',
        //   new Address(address),
        //   Array.of('ESDTRoleNFTCreate')
        // )
        const provider = ExtensionProvider.getInstance()
        ;
        const address = await ExtensionProvider.getInstance().getAddress()
        // await fromChain.mintableEsdts(address)
        factory.mint(fromChain, provider, 
        {identifier: 'XPNET-cdcf5b', name:' ruby', uris: ['https://staking-api.xp.network/staking-nfts/4']}
        )
      }
      else 
      if(account && account.address) {
        dispatch(setElrondWallet(account.address))
        handleClose()
      }
    } catch(err) {
      // cancelled
      console.log(err)
    }

   
  }

  async function connectTronlink() {
      try {
        await window.tronWeb.request({ method: "tron_requestAccounts" });
      } catch(err) {
          console.log(err)
      }
  }
  useEffect(() => {
      console.log(chainId, isConnectOpen)
    if(chainId && isConnectOpen) {
        const fromConfig = chainsConfig[from]
        const chainsMatch = chainId === fromConfig.chainId
        if(chainsMatch) handleClose()
        else {
            setSwitchNetwork(true)
        }
    }

  },[chainId])
  const switchChain = async () => {
    const info = CHAIN_INFO[from];
            console.log(from, info, CHAIN_INFO)
            const chainId = `0x${info.chainId.toString(16)}`;
            console.log(chainId)
            try {
              await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId }],
              })
            } catch(err) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: { ...info  },
                      })
                } catch(err) {
                    console.log(err)
                }

            }
            console.log(library)
  }
  useEffect(() => {
      if(chainId) {
          console.log(active)
      }
  }, [chainId]);

  const isELROND = chainsConfig[from] ? chainsConfig[from].type === ELROND : "";
  const OFF = { opacity: 0.6, pointerEvents: "none" };
  return (
    <>
      <Modal
        show={isConnectOpen}
        onHide={handleClose}
        keyboard={false}
        className={`connectBridge ${switchNetwork ? 'warningModal': ''}`}
      >
        <Modal.Body>
          { switchNetwork ? 
                    <div className="crossChainTab sendNFTBox">
                    <div className="tabTitle arrowTitle">
                      <span className="CloseModal" onClick={handleClose}>
                        <Image src={whiteClose} />
                      </span>
                      <h3>Warning</h3>
                    </div>
                    <div className="warModaCont">
                      <Image src={Warn} />
                      <h3>
                        {/* Switch to {from} Mainnet */}
                        You’re about to disconnect <br /> your wallet
                      </h3>
                      <p className="">
                        {/* XP.network bridge requires you to connect to the {from} Mainnet */}
                        To continue with the selected target chain, click on Cancel.
                      </p>
                    </div>
                    <div className="steepBtn dualBtn">
                      <a href="#" className="grayBtn">Disconnect </a>
                      <a onClick={switchChain} className="bBlueBtn clickable">
                        Cancel
                      </a>
                    </div>
                  </div>
          : <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                  <Image src={whiteClose} />
              </span>
              <h3>
                  <Image src={WhiteContBrid} className="ConnectWall" />
                Connect Wallet
              </h3>
            </div>
            <ul className="selsectBridge">
              <li onClick={connect} style={isEVM() ? {} : OFF}>
                <Link to="">
                  {" "}
                  <Image src={MetaMask} /> MetaMask{" "}
                </Link>
              </li>

              <li className="" style={isELROND ? {} : OFF} onClick={connectToElrond}>
                <Link to="#">
                  {" "}
                  <span className="imgw">
                    <Image src={Ledger} />
                  </span>{" "}
                  Elrond Wallet{" "}
                </Link>
              </li>
              <li onClick={connectTronlink} style={isTronLink() ? {} : OFF}>
                <Link to="">
                  {" "}
                  <Image className="tronlink-icon-wallet" src={TronLinkIcon} /> TronLink
                </Link>
              </li>
              <li style={{ opacity: 0.6, pointerEvents: "none" }}>
                <Link to="#">
                  {" "}
                  <Image src={Trezor} /> Trezor{" "}
                </Link>
              </li>
              <li style={{ opacity: 0.6, pointerEvents: "none" }}>
                <Link to="#">
                  {" "}
                  <Image src={WalletConnect} /> WalletConnect{" "}
                </Link>
              </li>
              <li style={{ opacity: 0.6, pointerEvents: "none" }}>
                <Link to="#">
                  {" "}
                  <Image src={WalletConnect2} /> WalletConnect{" "}
                </Link>
              </li>
            </ul>
          </div>}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TransferNFTModal;
