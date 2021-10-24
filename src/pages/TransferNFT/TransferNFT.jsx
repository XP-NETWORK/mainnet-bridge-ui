import React, {useState} from 'react';
import {Container, Row, Col, Image, Form} from "react-bootstrap";
import TransferNFTSwitcher from "./components/TransferNFTSwitcher";
import NFTSourceAccount from "./components/NFTSourceAccount";
import NFTSourceAccountWrongwallet from "./components/NFTSourceAccountWrongwallet";
import NFTSourceAccountWrongwallde from "./components/NFTSourceAccountWrongwallde";
import CardWrap from "../../UIElemnts/CardWrap";
import AccUser from "../../assets/images/users/accuser.png";
import Styles from "./TransferNFT.module.css";

const TransferNFT = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container>
            <div className="title title--primary">
                <h2>Cross Chain NFT Bridge</h2>
            </div>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <TransferNFTSwitcher/>
                    <NFTSourceAccountWrongwallet/>
                    <NFTSourceAccountWrongwallde/>

                    <div className="text-center mt-3 mt-md-4 mb-5">
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TransferNFT;
