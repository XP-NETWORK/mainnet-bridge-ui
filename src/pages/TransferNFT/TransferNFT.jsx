import React, {useState} from 'react';
import {Container, Row, Col, Image, Form} from "react-bootstrap";
import TransferNFTSwitcher from "./components/TransferNFTSwitcher";
import CardWrap from "../../UIElemnts/CardWrap";
import AccUser from "../../assets/images/users/accuser.png";
import Styles from "./TransferNFT.module.css";
import TransferNFTStorage from './components/TransferNFTStorage';
import TransferNFTSend from './components/TransferNFTSend';
import TransferNFTModal from './components/TransferNFTModal';
const TransferNFT = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container className="mainContainer">
            <TransferNFTModal />
            <TransferNFTSwitcher/>
            <TransferNFTStorage/>
            <TransferNFTSend/>
        </Container>
    );
};

export default TransferNFT;
