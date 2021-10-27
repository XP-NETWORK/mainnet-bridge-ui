import React, {useState} from 'react';
import {Container, Row, Col, Image, Form} from "react-bootstrap";
import TransferNFTSwitcher from "./components/TransferNFTSwitcher";
import CardWrap from "../../UIElemnts/CardWrap";
import AccUser from "../../assets/images/users/accuser.png";
import Styles from "./TransferNFT.module.css";
import TransferNFTStorage from './components/TransferNFTStorage';
import TransferNFTSend from './components/TransferNFTSend';
import TransferNFTModal from './components/TransferNFTModal';
import TransferNFTSuccess from './components/TransferNFTSuccess';
import TransferNFTModalNftDetails from './components/TransferNFTModalNftDetail';
import TransferNFTModalWarning from './components/TransferNFTModalWarning';
import TransferNFTModalSelectNft from './components/TransferNFTModalSelectNft';
import TransferNFTModalNftSelecNftList from './components/TransferNFTModalNftSelecNftList';
const TransferNFT = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="wraper">
            <Container className="mainContainer">
                <TransferNFTSwitcher/>
                <TransferNFTStorage/>
                <TransferNFTSend/>
                <TransferNFTSuccess />
                <TransferNFTModalNftDetails />
                <TransferNFTModalNftSelecNftList />
                <TransferNFTModalSelectNft />
                <TransferNFTModalWarning />
                <TransferNFTModal />
            </Container>
        </div>
    );
};

export default TransferNFT;
