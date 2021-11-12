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
import arrow_back from "../../../assets/img/icons/arrow_back.svg";
import NftDetImg from "../../../assets/img/NftDetImg.png";

import CheckCircle from "../../../assets/img/icons/check-circle-filled.svg";
import Inf from "../../../assets/img/icons/inf.png";
import NtfList_1 from "../../../assets/img/NtfList/NtfList_1.png";
import NtfList_2 from "../../../assets/img/NtfList/NtfList_2.png";
import NtfList_3 from "../../../assets/img/NtfList/NtfList_3.png";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { NFT } from "./NFTs";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpandNFTs } from "../../../store/reducers/generalSlice";

const TransferNFTModalNftSelecNftList = (props) => {
  const dispatch = useDispatch()
  const handleClose = () => dispatch(toggleExpandNFTs(false));
  const {nfts, expandNFTs} = useSelector(s => s.general)

  return (
    <>
 
      <Modal
        animation={false}
        show={expandNFTs}
        onHide={handleClose}
        className="nftDetModal selectNftModal"
      >
        <Modal.Body>
          <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                <Image src={Close} />
              </span>
              <h3>Select NFT</h3>
            </div>
            <div className="nftlistSelectContainer">
              <ul className="storeNtfList expandedNFTs">
              {nfts ? nfts.map((n, i) => <NFT factory={props.factory} nft={n} key={`${i}`} />) : ''}
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TransferNFTModalNftSelecNftList;
