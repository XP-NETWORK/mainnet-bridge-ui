import React, { Fragment, useState } from "react";
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";

import Close from "../../../assets/img/icons/closeBl.svg";
import ConnectBridge from "../../../assets/img/icons/ConnectBridge.svg";

import Ledger from "../../../assets/img/icons/lefger.svg";
import MetaMask from "../../../assets/img/icons/MetaMask.svg";
import Trezor from "../../../assets/img/icons/trezor.svg";
import WalletConnect from "../../../assets/img/icons/WalletConnect.svg";
import WalletConnect2 from "../../../assets/img/icons/WalletConnect2.svg";

import Warn from "../../../assets/img/3dwallet.png";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNFTs, toggleDisconnect } from "../../../store/reducers/generalSlice";
import { useWeb3React } from "@web3-react/core";

const TransferNFTModalWarning = () => {
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
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const handleClose = () => dispatch(toggleDisconnect(false));
  const handleShow = () => setShow(true);
  const {disconnectOpen} = useSelector(s => s.general)
  const disconnect = async () => {
    deactivate()
    dispatch(setNFTs(undefined))
    handleClose()
  }
  return (
    <>
      <Modal
        show={disconnectOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="connectBridge warningModal"
      >
        <Modal.Body>
          <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                <Image src={Close} />
              </span>
              <h3>Warning</h3>
            </div>
            <div className="warModaCont">
              <Image src={Warn} />
              <h3>
                You’re about to disconnect <br /> your wallet
              </h3>
              <p className="">
                To continue with the selected target <br /> chain, click on
                Cancel
              </p>
            </div>
            <div className="steepBtn">
              <a onClick={disconnect} className="bBlueBtn clickable">
                Disconnect Wallet
              </a>
              <a className="grayBtn clickable" onClick={handleClose}>
                Cancel
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TransferNFTModalWarning;
