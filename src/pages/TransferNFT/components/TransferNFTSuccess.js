import React, {Fragment,useState} from 'react';
import {Image} from "react-bootstrap";

import BSC from '../../../assets/img/nftIcons/bsc.svg';
import Close from '../../../assets/img/icons/closeBl.svg';
import Success from '../../../assets/img/icons/success.png';
import SuccessGreen from '../../../assets/img/icons/check_circle_green.svg';
import Avax from '../../../assets/img/icons/avax.svg';
import Copy from '../../../assets/img/icons/file_copy.svg';

import {Link, NavLink} from "react-router-dom";

const TransferNFTSuccess = () => {
    return (
             <div className="crossChainTab sendNFTBox">
                <div className="tabTitle arrowTitle">
                    <span className="CloseModal"><Image src={Close} /> </span>
                    <h3><Image src={Success} className="img24" />Success</h3>
                </div>
                <div className="successTagListBox">
                    <div className="successTagList">
                        <ul>
                            <li><span className="succTagName">Status</span> <span className="succTagStat statComp"><Image src={SuccessGreen} /> Completed</span></li>
                            <li><span className="succTagName">Date</span> <span className="succTagStat ">2021-07-04 20:50</span></li>
                        </ul>
                    </div>
                    <div className="successTagList">
                        <ul>
                            <li><span className="succTagName">NFT Name</span> <span className="succTagStat ">Meka #3241</span></li>
                            <li><span className="succTagName">NFT ID</span> <span className="succTagStat ">3595</span></li>
                            <li><span className="succTagName">Contract address</span> <span className="succTagStat ">0x9es455689jk...678h</span></li>
                            <li><span className="succTagName">Blockchain</span> <span className="succTagStat "><Image src={BSC} /> Binance</span></li>
                        </ul>
                    </div>
                    <div className="successTagList">
                        <ul>
                        <li><span className="succTagName">Sent From </span> <span className="succTagStat "><Image src={Avax} />AVAX</span></li>
                        <li><span className="succTagName">Sent To </span> <span className="succTagStat "><Image src={BSC} />BSC</span></li>
                            <li><span className="succTagName">Destination address</span> <span className="succTagStat ">0x9es455689jk...678h</span></li>
                        </ul>
                    </div>
                    <div className="successTagList">
                        <ul>
                        <li>Transaction ID<span className="succTagName"></span> <span className="succTagStat ">0x9es455689jk...678h <span className="copyText"><Image src={Copy} className="ml5" /></span></span></li>
                        </ul>
                    </div>
                </div>
                <div className="steepBtn">
                    <Link to="#link" className="bBlueBtn">
                        View Transaction
                    </Link>
                </div>
            </div>
        );
};
export default TransferNFTSuccess;