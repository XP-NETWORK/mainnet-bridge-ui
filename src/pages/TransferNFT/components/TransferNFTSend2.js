import React, {Fragment,useState} from 'react';
import {Image} from "react-bootstrap";
import selectnft_5 from '../../../assets/img/selectnft/selectnft_5.png';

import InfG from '../../../assets/img/icon/inf.svg';
import arrow_back from '../../../assets/img/icons/arrow_back.svg';
import RightBlue from '../../../assets/img/icons/tri_ang_right_blue.svg';
import NftSelec from '../../../assets/img/NtfList/NtfList_4.png';
import BSC from '../../../assets/img/nftIcons/bsc.svg';
import CheckBlue from '../../../assets/img/icons/checkBlue.svg';

import WhiteBackArr from '../../../assets/img/icon/white_arrow_back.svg';
import whiteClose from '../../../assets/img/icon/whiteClose.svg';
import SendNft from '../../../assets/img/sendNft.png';



import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from 'semantic-ui-react';
import {Link, NavLink} from "react-router-dom";

const TransferNFTSend2 = () => {
    return (
             <div className="crossChainTab sendNFTBox">
                <div className="tabTitle arrowTitle">
                    <span className="backBtn"><Image src={WhiteBackArr}/></span>
                    <h3>Send NFT</h3>
                    <span className="CloseModal"><Image src={whiteClose} /></span>
                </div>
                <div className="sendNftContBox">
                    <div className="nftSelected">
                        <Image src={SendNft} />
                    </div>
                    <div className="sendNftCont">
                        <div className="destiAddress">
                            <div className="destiTitle">
                                Destination address
                            </div>
                            <div className="inpDestiAdd">
                                <span className="nftSelect"><Image src={BSC} /></span> 
                                <input type="text" placeholder="Paste destination address" />
                            </div>
                        </div>
                        <div className="nftDetail">
                            <div className="nftDetailView">
                                NFT Details
                                <Link to="#link" className="viewNft">View All Details</Link>
                            </div>
                            <ul>
                                <li><span>Name</span> <span>Meka #3241</span></li>
                                <li><span>Contract address</span> <span>0x9es455689jk...678h</span></li>
                            </ul>
                        </div>
                        <div className="feesTitle">
                            <span>Fees</span>
                            <span className="npnetFee">0 XPNET</span>
                        </div>
                        <div className="approvebox">
                            <p className="approveRequ">
                                <Image src={InfG} /> XP.network requires approval
                            </p>
                            <div className="approveCheck">
                                <input type="checkbox" id="apprCheck" />
                                <label htmlFor="apprCheck">
                                    <span className="checkIcon"></span>
                                </label>
                            </div>
                        </div>
                        {/* <p className="approveRequ">
                            XP.network requires approval
                            <Link to="#link" className="infMark">
                                <span className="infBox">
                                    We'd like to make sure you really want to send the NFT and pay the associated fees.
                                </span>
                                <Image src={InfG} />
                            </Link>
                        </p> */}
                        {/* <div className="steepBtn">
                            <Link to="#link" className="bBlueBtn">
                                Approve
                            </Link>
                            <Link to="#link" className="approved">
                                <Image src={CheckBlue} /> CheckBlue
                            </Link>
                        </div> */}
                        <div className="sendNftBtn disable">
                            <Link to="#link" className="bBlueBtn"> Send NFT</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
};
export default TransferNFTSend2;