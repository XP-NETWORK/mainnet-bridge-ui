import React, {Fragment,useState} from 'react';
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

import CardWrap from "../../../UIElemnts/CardWrap";
import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from 'semantic-ui-react';
import {Link, NavLink} from "react-router-dom";

const TransferNFTSwitcher = () => {
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
                <div className="crosChainSelect">
                  <div className="chainFrom">Form</div>
                  <div className="chainSelect">
                    <SelectItem >
                        <Dropdown
                            placeholder='Select option'
                            fluid
                            selection
                            options={fromTranBridge}
                        />
                    </SelectItem>
                  </div>
                </div>

                <div className="storeNtfs">
                  <h5>Stored NFTs</h5>
                    <p><Image src={fing} fluid/> Connect the wallet to display your NFTs</p>
                  <ul className="nftsStoreList">
                    <li>
                      <span className="ftsStoreimg"><Image src={ftsStoreimg} fluid/></span>
                      <span className="ftsStoreLine"></span>
                    </li>
                    <li>
                      <span className="ftsStoreimg"><Image src={ftsStoreimg} fluid/></span>
                      <span className="ftsStoreLine"></span>
                    </li>
                    <li>
                      <span className="ftsStoreimg"><Image src={ftsStoreimg} fluid/></span>
                      <span className="ftsStoreLine"></span>
                    </li>
                    <li>
                      <span className="ftsStoreimg"><Image src={ftsStoreimg} fluid/></span>
                      <span className="ftsStoreLine"></span>
                    </li>
                    <li>
                      <span className="ftsStoreimg"><Image src={ftsStoreimg} fluid/></span>
                      <span className="ftsStoreLine"></span>
                    </li>
                  </ul>
                  
                </div>

                  <div className="steepBtn">
                    <Link to="#link" className="bBlueBtn">
                        Connect Wallet
                    </Link>
                  </div>
                  <ul className="steepLines">
                    <li className="stpLi stpLi1 active"> </li>
                    <li className="stpLi stpLi2"> </li>
                    <li className="stpLi stpLi3"> </li>
                  </ul>
            </div>

            <div className="crossChainTab ">
                <div className="tabTitle">
                  <h3>Select Chain and NFT</h3>
                  <span class="backSteep" id=""><Image src={arrow_back} fluid/></span>
                </div>
                <div className="crosChainSelect">
                  <div className="chainFrom">Form</div>
                  <div className="chainSelect">
                    <SelectItem >
                        <Dropdown
                            placeholder='Select option'
                            fluid
                            selection
                            options={fromTranBridge}
                        />
                    </SelectItem>
                  </div>
                </div>
                <div className="storeNtfs">
                  <h5>Stored NFTs</h5>
                    <p><Image src={fing} fluid/> Connect the wallet to display your NFTs</p>
                  
                      <ul class="nftsStoreList loaded">
                        <li>
                          <span class="ftsStoreimg"><Image src={selectnft_1} fluid/></span>
                          <span class="ftsStoreName">Treasure...</span>
                        </li>
                        <li class="active">
                          <span class="ftsStoreimg"><Image src={selectnft_2} fluid/></span>
                          <span class="ftsStoreName">Treasure...</span>
                        </li>
                        <li>
                          <span class="ftsStoreimg"><Image src={selectnft_3} fluid/></span>
                          <span class="ftsStoreName">DyingFlo...</span>
                        </li>
                        <li>
                          <span class="ftsStoreimg"><Image src={selectnft_4} fluid/></span>
                          <span class="ftsStoreName">NY</span>
                        </li>
                        <li>
                          <span class="ftsStoreimg"><Image src={selectnft_5} fluid/></span>
                          <span class="ftsStoreName">Valentin...</span>
                        </li>
                      </ul>

                    <div className="user_list_items">
                {users.allUsers.map((user, index) => (
                    <div key={index} onClick={() => toggleCheck(index)}>
                        <div
                            className={`nftsStoreList loaded`}
                        >
                          <li>
                          <span class="ftsStoreimg"><Image src={user.userAvatar} fluid/></span>
                          <button className="infoBtn"> i</button>
                          <span class="ftsStoreName">{user.userText}...</span>
                          {toggleCheckMark(index) && (
                                <div >
                                    <Image src={checkmarkicon} fluid/>
                                </div>
                            )}
                        </li>
                            
                        </div>
                        
                    </div>
                ))}
            </div>

                </div>
                  <div className="steepBtn">
                    <Link to="#link" className="bBlueBtn">
                        Connect Wallet
                    </Link>
                  </div>
                  <ul className="steepLines">
                    <li className="stpLi stpLi1 active"> </li>
                    <li className="stpLi stpLi2"> </li>
                    <li className="stpLi stpLi3"> </li>
                  </ul>
            </div>
            
        </Fragment>

    );
};

export default TransferNFTSwitcher;
