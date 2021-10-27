import React, { Fragment, useState } from 'react';
import { Image } from "react-bootstrap";
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
    return (
        <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
                <span className="CloseModal"><Image src={Close} /></span>
                <h3><Image src={ConnectBridge} /> Connect Bridge</h3>
            </div>
            <ul className="selsectBridge">
                <li className="active"><span className="imgw"><Image src={Ledger} /></span> Ledger</li>
                <li><Image src={MetaMask} /> MetaMask</li>
                <li><Image src={Trezor} /> Trezor</li>
                <li><Image src={WalletConnect} /> WalletConnect</li>
                <li><Image src={WalletConnect2} /> WalletConnect</li>
            </ul>
        </div>
    );
};
export default TransferNFTModal;