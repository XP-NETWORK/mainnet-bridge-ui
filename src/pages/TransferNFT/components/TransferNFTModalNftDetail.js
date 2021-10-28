import React, { Fragment, useEffect, useState } from "react";
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
import Inf from "../../../assets/img/icons/inf.png";
import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleNFTInfo } from "../../../store/reducers/generalSlice";
import axios from 'axios'
const TransferNFTModalNftDetails = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const handleClose = () => dispatch(toggleNFTInfo(undefined))
  const { nftDetails } = useSelector(s => s.general)
  useEffect(async () => {
    if(nftDetails) {
      const res = await axios.get(nftDetails.uri)
      if(res && res.data) setShow(res.data)
    } else setShow(undefined)
  }, [nftDetails])
  console.log(show)
  return (
    <>
      <Modal
        show={nftDetails}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="nftDetModal"
      >
        <Modal.Body>
          <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                <Image src={Close} />
              </span>
              <span className="backBtn" onClick={handleClose}>
                {/* <Image src={arrow_back} /> */}
              </span>
              <h3>NFT Details</h3>
            </div>
            <div className="nftDetContBox">
              <div className="nftDetImg">
                <Image src={show?.image} />
              </div>
              <div className="nftDetCont">
                <div className="nftDetContList nftName">
                  <div className="label">Name</div>
                  <div className="details">{show?.name}</div>
                </div>
                <div className="nftDetContList ">
                  <div className="label">Token ID</div>
                  <div className="details">{nftDetails?.native?.tokenId}</div>
                </div>
                <div className="nftDetContList ">
                  <div className="label">Description</div>
                  <div className="details">
                    {show?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TransferNFTModalNftDetails;
