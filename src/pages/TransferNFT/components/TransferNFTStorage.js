import React, {Fragment,useState} from 'react';
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
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

import selectnft_1 from '../../../assets/img/selectnft/selectnft_1.png';
import selectnft_2 from '../../../assets/img/selectnft/selectnft_2.png';
import selectnft_3 from '../../../assets/img/selectnft/selectnft_3.png';
import selectnft_4 from '../../../assets/img/selectnft/selectnft_4.png';
import selectnft_5 from '../../../assets/img/selectnft/selectnft_5.png';

import user1 from '../../../assets/images/users/u1.svg';
import user2 from '../../../assets/images/users/u2.svg';
import user3 from '../../../assets/images/users/u3.svg';
import user4 from '../../../assets/images/users/u4.svg';
import user5 from '../../../assets/images/users/u5.svg';
import checkmarkicon from "../../../assets/images/checkmark.svg";

import arrow_back from '../../../assets/img/icons/arrow_back.svg';
import closeBl from '../../../assets/img/icons/closeBl.svg';
import wroSeImg from '../../../assets/img/logos/wroSeImg.png';
import FromToArrow from '../../../assets/img/icons/FromToArrow.svg';
import CheckCircle from '../../../assets/img/icons/check-circle-filled.svg';
import Inf from '../../../assets/img/icons/inf.svg';

import NtfList_1 from '../../../assets/img/NtfList/NtfList_1.png';
import NtfList_2 from '../../../assets/img/NtfList/NtfList_2.png';
import NtfList_3 from '../../../assets/img/NtfList/NtfList_3.png';

import TransferNFTModalNftDetails from './TransferNFTModalNftDetail';

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from 'semantic-ui-react';
import {Link, NavLink} from "react-router-dom";

const TransferNFTStorage = () => {

    const switchHandler = (e) => {
        e.preventDefault();
        console.log("It Works!!");
    }

    const fromTranBridge= [
        {
            key: 'XP.network',
            text: 'XP.network',
            value: 'XP.network',
            image: { avatar: true, src: xpNetIco },
        },
        {
            key: 'Elrond',
            text: 'Elrond',
            value: 'Elrond',
            image: { avatar: true, src: enrollIco },
        },
        {
            key: 'Etherium',
            text: 'Etherium',
            value: 'Etherium',
            image: { avatar: true, src: etherium },
        },
        {
            key: 'Heco',
            text: 'Heco',
            value: 'Heco',
            image: { avatar: true, src: heco },
        },
        {
            key: 'Binance',
            text: 'Binance',
            value: 'Binance',
            image: { avatar: true, src: binance },
        }
    ]

    const toTranBridge= [
        {
            key: 'Elrond',
            text: 'Elrond',
            value: 'Elrond',
            image: { avatar: true, src: enrollIco },
        },
        {
            key: 'XP.network',
            text: 'XP.network',
            value: 'XP.network',
            image: { avatar: true, src: xpNetIco },
        },
        {
            key: 'Binance',
            text: 'Binance',
            value: 'Binance',
            image: { avatar: true, src: binance },
        },
        {
            key: 'Etherium',
            text: 'Etherium',
            value: 'Etherium',
            image: { avatar: true, src: etherium },
        },
        {
            key: 'Heco',
            text: 'Heco',
            value: 'Heco',
            image: { avatar: true, src: heco },
        }
    ]

    const sourceAccount= [
        {
            key: 'Alice_Stash',
            text: 'Alice_Stash',
            value: 'Alice_Stash',
            image: { avatar: true, src: userAvatar },
        },
        {
            key: 'Alice',
            text: 'Alice',
            value: 'Alice',
            image: { avatar: true, src: userAvatar },
        },
        {
            key: 'Alice_Stash',
            text: 'Alice_Stash',
            value: 'Alice_Stash',
            image: { avatar: true, src: userAvatar },
        },
        {
            key: 'Alice',
            text: 'Alice',
            value: 'Alice',
            image: { avatar: true, src: userAvatar },
        },
    ]

    const targetAccount = [
        {
            key: 'Alice',
            text: 'Alice',
            value: 'Alice',
            image: { avatar: true, src: userAvatar },
        },
        {
            key: 'Alice_Stash',
            text: 'Alice_Stash',
            value: 'Alice_Stash',
            image: { avatar: true, src: userAvatar },
        },
        {
            key: 'Alice',
            text: 'Alice',
            value: 'Alice',
            image: { avatar: true, src: userAvatar },
        },
        {
            key: 'Alice_Stash',
            text: 'Alice_Stash',
            value: 'Alice_Stash',
            image: { avatar: true, src: userAvatar },
        }
    ]

    const usersObject = [
      {
          id: 1,
          userAvatar: user1,
          userText: "Treasure one"
      },
      {
          id: 2,
          userAvatar: user2,
          userText: "Day on kdjhf"
      },
      {
          id: 3,
          userAvatar: user3,
          userText: "Treasuor.dpsl"
      },
      {
          id: 4,
          userAvatar: user4,
          userText: "Day one9999"
      },
      {
          id: 5,
          userAvatar: user5,
          userText: "Treasurkdhni"
      },
  ]

  const [users, setUsers] = useState({
    activeMark: null,
    allUsers: usersObject
});

const toggleCheck = (index) => {
    setUsers({...users, activeMark: users.allUsers[index]});
};

const toggleCheckMark = (index) => {
    if(users.allUsers[index] === users.activeMark){
        return users.activeMark = true;
    }
}

    return (
        <Fragment>

            <div className="crossChainTab">

                <div className="tabTitle">
                  <h3>Select Chain and NFT</h3>
                </div>
                <div className="crosChainSelectBox">
                  <div className="crosChainSelect">
                    <div className="chainFrom">Form</div>
                    <div className="chainSelect">
                      <SelectItem >
                        <Dropdown
                          placeholder='Select Chain'
                          fluid
                          selection
                          options={fromTranBridge}
                        />
                      </SelectItem>
                    </div>
                  </div>
                     <span className="fromToArrow"> <Image src={FromToArrow}/></span>
                  <div className="crosChainSelect">
                    <div className="chainFrom">To</div>
                    <div className="chainSelect">
                      <SelectItem >
                        <Dropdown
                          placeholder='Select Chain'
                          fluid
                          selection
                          options={fromTranBridge}
                        />
                      </SelectItem>
                    </div>
                  </div>
                </div>

                <div className="storeNtfs selecNftsBox">
                    <h5>Stored NFTs <Link to="#link" className="viewSto">View All </Link></h5>
                    <ul className="storeNtfList">
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_1} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf active">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_2} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_3} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_1} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_2} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_3} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_1} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_2} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                        <li className="sinStoreNtf">
                            <div className="storeTop">
                                <Link to="#link" className="inf"><Image src={Inf} /></Link>
                                <div className="storeImg">
                                    <Image src={NtfList_3} />
                                </div>
                                <span className="checkNft"><Image src={CheckCircle} /></span>
                            </div>
                            <p className="storeText">Treasur.dpsl91</p>
                        </li>
                    </ul>
                </div>
                <div className="steepBtn">
                    <Link to="#link" className="bBlueBtn">
                        Connect Wallet
                    </Link>
                </div>

            </div>


        </Fragment>

    );
};

export default TransferNFTStorage;
