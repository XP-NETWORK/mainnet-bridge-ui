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

import NftDetImg from "../../../assets/img/NftDetImg.png";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

const TransferNFTModalSelectNft = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Meka #3241
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        keyboard={true}
        className="connectBridge nftSelectModal"
      >
        <Modal.Body>
          <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                <Image src={Close} />
              </span>
              <h3>Meka #3241</h3>
            </div>
            <div className="nftSelectCont">
              <Image src={NftDetImg} fluid />
              <div className="steepBtn">
                <Link to="#link" className="bBlueBtn">
                  Select this NFT
                </Link>
                <Link to="#link" className="BlueLineBtn" onClick={handleClose}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TransferNFTModalSelectNft;
