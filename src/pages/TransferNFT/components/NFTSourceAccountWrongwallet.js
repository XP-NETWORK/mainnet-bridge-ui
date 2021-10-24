import React, {useState} from 'react';
import Styles from './NFTSourceAccount.module.css';
import CardWrap from "../../../UIElemnts/CardWrap";
import {Image} from "react-bootstrap";
import xpNetIco from '../../../assets/images/XpNet.svg';
import enrollIco from '../../../assets/images/enroll.svg';
import userAvatar from '../../../assets/images/userAvatar.svg';
import binance from '../../../assets/images/binance.svg';
import ftsStoreimg from '../../../assets/img/ftsStoreimg.svg';
import etherium from '../../../assets/images/Etherium.svg';
import fing from '../../../assets/img/fing.png';
import heco from '../../../assets/images/HECO.svg';
import leftArrow from '../../../assets/images/leftArrow.svg';
import rightArrow from '../../../assets/images/rightArrow.svg';
import arrow_back from '../../../assets/img/icons/arrow_back.svg';
import closeBl from '../../../assets/img/icons/closeBl.svg';
import wroSeImg from '../../../assets/img/logos/wroSeImg.png';


import { Dropdown } from 'semantic-ui-react';
import {Link, NavLink} from "react-router-dom";

const NFTSourceAccountWrongwallet = () => {
    return (
        <div className="crossChainTab ">
                <div className="tabTitle">
                  <h3>Wrong Wallet</h3> 
                  <span className="closeWor" id=""><Image src={closeBl} fluid/></span>
                </div>

                <div class="wrongSlect">
                  <div class="wroSleImg">
                    <Image src={wroSeImg} fluid/>
                  </div>
                  <div class="wroCont">
                    <h3>Swithch to Elron Wallet</h3>
                    <p>To continue bridging Xp.network requires you to connect to the Elrond Wallet.</p>
                  </div>
                </div>
                  <div className="steepBtn">
                    <Link to="#link" className="bBlueBtn">
                        Connect Wallet
                    </Link>
                  </div>
            </div>
    );
};

export default NFTSourceAccountWrongwallet;