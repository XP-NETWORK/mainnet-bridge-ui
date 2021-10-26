import React, {useState} from 'react';
import {Container, Row, Col, Image, Form} from "react-bootstrap";
import TransferNFTSwitcher from "./components/TransferNFTSwitcher";
import AccUser from "../../assets/images/users/accuser.png";
import Styles from "./TransferNFT.module.css";

const TransferNFT = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container>
            <TransferNFTSwitcher/>
        </Container>
    );
};

export default TransferNFT;
