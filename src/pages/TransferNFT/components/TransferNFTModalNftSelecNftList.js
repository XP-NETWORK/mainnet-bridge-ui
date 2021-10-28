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

const TransferNFTModalNftSelecNftList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="viewSto" onClick={handleShow}>
        View All
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
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
              <ul className="storeNtfList">
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf active">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_1} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_2} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
                <li className="sinStoreNtf">
                  <div className="storeTop">
                    <Link to="#link" className="inf">
                      <Image src={Inf} />
                    </Link>
                    <div className="storeImg">
                      <Image src={NtfList_3} />
                    </div>
                  </div>
                  <p className="storeText">Treasur.dpsl91</p>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TransferNFTModalNftSelecNftList;
