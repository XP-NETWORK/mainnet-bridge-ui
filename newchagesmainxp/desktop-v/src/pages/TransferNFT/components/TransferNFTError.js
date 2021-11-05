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

import Warn from "../../../assets/img/warningsvg.png";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNFTs, toggleDisconnect, toggleError } from "../../../store/reducers/generalSlice";
import { useWeb3React } from "@web3-react/core";

const TransferNFTModalError = () => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
  } = useWeb3React();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const handleClose = () => dispatch(toggleError(undefined));
  const handleShow = () => setShow(true);
  const {error} = useSelector(s => s.general)
  return (
    <>
      <Modal
        show={error}
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
              <h3>Error</h3>
            </div>
            <div className="warModaCont">
              <Image src={Warn} />
              <h3>
                {error?.message}<br/>
               
              </h3>
              <p className="">
                Code: {error?.code}
              </p>
            </div>
            <div className="steepBtn">
           
              <a className="grayBtn clickable" onClick={handleClose}>
                Close
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TransferNFTModalError;
