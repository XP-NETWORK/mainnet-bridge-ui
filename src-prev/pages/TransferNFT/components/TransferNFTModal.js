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

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from 'semantic-ui-react';
import { Link, NavLink } from "react-router-dom";

const TransferNFTModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="connectBridge"
            >
                <Modal.Body>
                <div className="crossChainTab sendNFTBox">
                    <div className="tabTitle arrowTitle">
                        <span className="CloseModal" onClick={handleClose}><Image src={Close} /></span>
                        <h3><Image src={ConnectBridge} /> Connect Bridge</h3>
                    </div>
                    <ul className="selsectBridge">
                        <li className="active" onClick={handleClose}><Link to="#"> <span className="imgw"><Image src={Ledger} /></span> Ledger </Link></li>
                        <li onClick={handleClose}><Link to="#"> <Image src={MetaMask} /> MetaMask </Link></li>
                        <li onClick={handleClose}><Link to="#"> <Image src={Trezor} /> Trezor </Link></li>
                        <li onClick={handleClose}><Link to="#"> <Image src={WalletConnect} /> WalletConnect </Link></li>
                        <li onClick={handleClose}><Link to="#"> <Image src={WalletConnect2} /> WalletConnect </Link></li>
                    </ul>
                </div>
                </Modal.Body>

            </Modal>
        </>
    );

};
export default TransferNFTModal;