import React, { Fragment, useState } from 'react';
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import selectnft_5 from '../../../assets/img/selectnft/selectnft_5.png';

import Close from '../../../assets/img/icons/closeBl.svg';
import ConnectBridge from '../../../assets/img/icons/ConnectBridge.svg';

import Ledger from '../../../assets/img/icons/lefger.svg';
import MetaMask from '../../../assets/img/icons/MetaMask.svg';
import Trezor from '../../../assets/img/icons/trezor.svg';
import WalletConnect from '../../../assets/img/icons/WalletConnect.svg';
import WalletConnect2 from '../../../assets/img/icons/WalletConnect2.svg';
import arrow_back from '../../../assets/img/icons/arrow_back.svg';
import NftDetImg from '../../../assets/img/NftDetImg.png';
import Inf from '../../../assets/img/icons/inf.png';
import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from 'semantic-ui-react';
import { Link, NavLink } from "react-router-dom";

const TransferNFTModalNftDetails = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow_detail = () => setShow(true);

    return (
        <>
            <Link to="#link" className="inf" onClick={handleShow_detail}><Image src={Inf} /></Link>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="nftDetModal"
            >
                <Modal.Body>
                    <div className="crossChainTab sendNFTBox">
                        <div className="tabTitle arrowTitle">
                            <span className="CloseModal" onClick={handleClose}><Image src={Close} /></span>
                            <span className="backBtn" onClick={handleClose}><Image src={arrow_back} /></span>
                            <h3>NFT Details</h3>
                        </div>
                        <div className="nftDetContBox">
                            <div className="nftDetImg">
                                <Image src={NftDetImg} />
                            </div>
                            <div className="nftDetCont">
                                <div className="nftDetContList nftName">
                                    <div className="label">Name</div>
                                    <div className="details">Meka #3241</div>
                                </div>
                                <div className="nftDetContList ">
                                    <div className="label">Token ID</div>
                                    <div className="details">0x9es455689jk...678h</div>
                                </div>
                                <div className="nftDetContList ">
                                    <div className="label">Description</div>
                                    <div className="details">Meka from the MekaVerse - A 
                                    collection of 8,888 unique generative 
                                    NFTs from another universe. Meka from 
                                    the MekaVerse - A collection of 8,888</div>
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

