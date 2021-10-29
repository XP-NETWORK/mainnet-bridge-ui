import React, { Fragment, useEffect, useState } from "react";
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";
import RedCircle from "../../../assets/img/redCircle.svg";
import Close from "../../../assets/img/icons/closeBl.svg";
import ConnectBridge from "../../../assets/img/icons/ConnectBridge.svg";
import {ethers} from 'ethers'
import Ledger from "../../../assets/img/icons/lefger.svg";
import MetaMask from "../../../assets/img/icons/MetaMask.svg";
import Trezor from "../../../assets/img/icons/trezor.svg";
import WalletConnect from "../../../assets/img/icons/WalletConnect.svg";
import WalletConnect2 from "../../../assets/img/icons/WalletConnect2.svg";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleConnect } from "../../../store/reducers/generalSlice";
import { chainsConfig, EVM, ELROND, CHAIN_INFO } from "./values";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../../wallet/connectors";
import { getChainId, isEVM } from "../../../wallet/helpers";

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
  const { isConnectOpen, from } = useSelector((s) => s.general);
  const [show, setShow] = useState(false);
  const handleClose = () => dispatch(toggleConnect(false));
  async function connect() {
    try {
        const fromConfig = chainsConfig[from]
        await activate(injected);
        const chainsMatch = chainId === getChainId()
        if(chainsMatch) handleClose()
        else {
            const info = CHAIN_INFO[from];
            console.log(from, info, CHAIN_INFO)
            const chainId = `0x${info.chainId.toString(16)}`;
            try {
                console.log(new ethers.providers.Web3Provider(window.ethereum))
              await new ethers.providers.Web3Provider(window.ethereum).request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId }],
              })
            } catch(err) {
                console.log(err)
            }
            console.log(library)
        }
    //   handleClose();
    } catch (ex) {
      console.log(ex);
    }
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
        backdrop="static"
        keyboard={false}
        className="connectBridge"
      >
        <Modal.Body>
          <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                <Image src={Close} />
              </span>
              <h3>
                <Image src={ConnectBridge} />
                Connect Bridge
              </h3>
            </div>
            <ul className="selsectBridge">
              <li onClick={connect} style={isEVM() ? {} : OFF}>
                <Link to="">
                  {" "}
                  <Image src={MetaMask} /> MetaMask{" "}
                </Link>
              </li>
              <li className="" style={isELROND ? {} : OFF}>
                <Link to="#">
                  {" "}
                  <span className="imgw">
                    <Image src={Ledger} />
                  </span>{" "}
                  Elrond Wallet{" "}
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
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TransferNFTModal;
