import React, {Fragment,useState} from 'react';
import {Image} from "react-bootstrap";
import selectnft_5 from '../../../assets/img/selectnft/selectnft_5.png';


import InfG from '../../../assets/img/icons/InfG.svg';
import arrow_back from '../../../assets/img/icons/arrow_back.svg';
import RightBlue from '../../../assets/img/icons/tri_ang_right_blue.svg';
import NftSelec from '../../../assets/img/NtfList/NtfList_4.png';
import BSC from '../../../assets/img/nftIcons/bsc.svg';




import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from 'semantic-ui-react';
import {Link, NavLink} from "react-router-dom";

const TransferNFTSend = () => {
    return (
             <div className="crossChainTab sendNFTBox">
                <div className="tabTitle arrowTitle">
                    <span className="backBtn"><Image src={arrow_back}/></span>
                    <h3>Send NFT</h3>
                </div>
                <div className="nftSelected">
                    <Image src={NftSelec} />
                </div>
                <div className="nftDetail">
                    <ul>
                        <li><span>Name</span> <span>Meka #3241</span></li>
                        <li><span>Contract address</span> <span>0x9es455689jk...678h</span></li>
                    </ul>
                    <Link to="#link" className="viewNft">
                        View Full NFT Information
                        <Image src={RightBlue} className="viewArrow" />
                    </Link>
                </div>
                <div className="destiAddress">
                    <div className="destiTitle">
                        <span>Destination address</span>
                        <span className="nftSelect"><Image src={BSC} />BSC</span>
                    </div>
                    <div className="inpDestiAdd">
                    <input type="text" placeholder="Paste destination address" />
                    </div>
                </div>
                <div className="feesArea">
                    <div className="feesTitle">
                        <span>Fees</span>
                        <span>0 XPNET</span>
                    </div>
                
                <p className="approveRequ">
                    XP.network requires approval 
                    <Link to="#link" className="infMark">
                        <span className="infBox">
                            We'd like to make sure you really want to send the NFT and pay the associated fees.
                        </span>
                        <Image src={InfG} /> 
                    </Link>
                </p>
                </div>
                <div className="steepBtn">
                    <Link to="#link" className="bBlueBtn">
                        Approve 
                    </Link>
                    <Link to="#link" className="grayBtn">
                        Send NFT
                    </Link>
                </div>
            </div>
        );
};
export default TransferNFTSend;