import React, { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import xpNetIco from "../../../assets/images/XpNet.svg";
import enrollIco from "../../../assets/images/enroll.svg";
import userAvatar from "../../../assets/images/userAvatar.svg";
import binance from "../../../assets/images/binance.svg";
import ftsStoreimg from "../../../assets/img/ftsStoreimg.svg";
import etherium from "../../../assets/images/Etherium.svg";
import fing from "../../../assets/img/fing.png";
import heco from "../../../assets/images/HECO.svg";
import leftArrow from "../../../assets/images/leftArrow.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import {ethers} from 'ethers'
import axios from 'axios'
import selectnft_1 from "../../../assets/img/selectnft/selectnft_1.png";
import selectnft_2 from "../../../assets/img/selectnft/selectnft_2.png";
import selectnft_3 from "../../../assets/img/selectnft/selectnft_3.png";
import selectnft_4 from "../../../assets/img/selectnft/selectnft_4.png";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";

import user1 from "../../../assets/images/users/u1.svg";
import user2 from "../../../assets/images/users/u2.svg";
import user3 from "../../../assets/images/users/u3.svg";
import user4 from "../../../assets/images/users/u4.svg";
import user5 from "../../../assets/images/users/u5.svg";
import checkmarkicon from "../../../assets/images/checkmark.svg";


import TriangelDonw from "../../../assets/img/icons/triang_down.svg";
import Updown from "../../../assets/images/swap.svg";
import UpdownPn from "../../../assets/img/icon/updown.png";
import WhiArrRig from "../../../assets/img/icon/whiArrowR.svg";
import whiteClose from "../../../assets/img/icon/whiteClose.svg";
import Inf from "../../../assets/img/icon/inf.svg";
import BridgeSu1 from "../../../assets/img/bridges/bridgeSuport-1.svg";
import BridgeSu2 from "../../../assets/img/bridges/bridgeSuport-2.svg";
import BridgeSu3 from "../../../assets/img/bridges/bridgeSuport-3.svg";
import BridgeSu4 from "../../../assets/img/bridges/bridgeSuport-4.svg";
import BridgeSu5 from "../../../assets/img/bridges/bridgeSuport-5.svg";
import BridgeSu6 from "../../../assets/img/bridges/bridgeSuport-6.svg";
import BridgeSu7 from "../../../assets/img/bridges/bridgeSuport-7.svg";
import BridgeSu8 from "../../../assets/img/bridges/bridgeSuport-8.svg";
import BridgeSu9 from "../../../assets/img/bridges/bridgeSuport-9.svg";
import BridgeSu10 from "../../../assets/img/bridges/bridgeSuport-10.svg";


import arrow_back from "../../../assets/img/icons/arrow_back.svg";
import closeBl from "../../../assets/img/icons/closeBl.svg";
import wroSeImg from "../../../assets/img/logos/wroSeImg.png";
import FromToArrow from "../../../assets/img/icons/FromToArrow.svg";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFrom,
  setNFTs,
  setUnParsedNFTs,
  setStep,
  setTo,
  toggleConnect,
} from "../../../store/reducers/generalSlice";
import { chains, chainsConfig, ELROND, EVM } from "./values";
import { useWeb3React } from "@web3-react/core";
import { createChainFactory } from "../../../wallet/connectors";
import { ChainData } from "../../../wallet/config";
import { Chain } from "xp.network/dist/consts";
import NFTs from "./NFTs";
import Loader from "./Loader";
import { getRPCFactory, parseNFTS } from "../../../wallet/helpers";

import TransferNFTModalSelect from "./TransferNFTModalSelect"

const TransferNFTSwitcher = () => {
  const [hideAlert, setHideAlert] = useState(false)
  const { to, from, nft, nfts, elrondWallet, tronWallet } = useSelector((s) => s.general);
  const dispatch = useDispatch();
  const { account, chainId, library } = useWeb3React();
  const [loadingNFTs, setLoadingNFTs] = useState(false)
  console.log(tronWallet)
  const [users, setUsers] = useState({
    activeMark: null,
  });

  const onChangeFrom = (e) => {
    // const value = e.target.innerText.replace(/(?:\r\n|\r|\n)/g, "");
    const value = e.replace(/(?:\r\n|\r|\n)/g, "");
    if (value === to) dispatch(setTo(undefined));
    dispatch(setFrom(value));
  };
  const onChangeTo = (e) => {
    // const value = e.target.innerText.replace(/(?:\r\n|\r|\n)/g, "");
    const value = e.replace(/(?:\r\n|\r|\n)/g, "");
    dispatch(setTo(value));
  };
  const OFF = { opacity: 0.6, pointerEvents: "none" };
  const correctChainId =
    from && chainId ? chainsConfig[from]?.chainId === chainId : false;

  const isEVM = chainsConfig[from] ? chainsConfig[from].type === EVM : "";
  const isELROND = chainsConfig[from] ? chainsConfig[from].type === ELROND : "";
  useEffect(async () => {
    console.log(account , 'askldsalk12123')
      if(account) {
        const fromConfig = chainsConfig[from]
        if(from && isEVM && chainId === fromConfig.chainId) {
          let testingAccount
          try {
            testingAccount = new URLSearchParams(window.location.search).get('accountTest')
          } catch(err) {

          }
            const factory = await getRPCFactory();
            setLoadingNFTs(true)
            const fromChain = chainsConfig[from]
            console.log(fromChain, factory, fromChain.Chain, 'alds;lads')
            const inner = await factory.inner(fromChain.Chain);
            console.log(inner)
            const nfts = await factory.nftList(inner, testingAccount ? testingAccount : account)
            console.log(nfts, 'Pre parse NFTS')

            const res = await parseNFTS(nfts)
            dispatch(setNFTs(res))
            dispatch(setUnParsedNFTs(nfts))
            setLoadingNFTs(false)
        }
      } else if(elrondWallet || tronWallet) {
        const factory = await getRPCFactory();
        setLoadingNFTs(true)
        const fromChain = chainsConfig[from]
        const inner = await factory.inner(fromChain.Chain);
        console.log(inner, 'inner')
        try {
          console.log(elrondWallet ? elrondWallet : tronWallet)
          const nfts = await factory.nftList(inner, elrondWallet ? elrondWallet : tronWallet)
          console.log(nfts)
          const res = await parseNFTS(nfts)
          dispatch(setNFTs(res))
          console.log(nfts)
          dispatch(setUnParsedNFTs(nfts))
          setLoadingNFTs(false)
        } catch(err) {
          console.log(err, 'listnft err')
        }

      }

  },[account, from, chainId, elrondWallet, tronWallet])

  const next = () => {
      dispatch(setStep(2))
  }

  const openModal = (e, id) => {
    console.log(e)
    document.getElementById(id).click()
  }
  const onNFTPage = loadingNFTs || nfts
  console.log("from: ",from);
  console.log("to: ",to);
  return (
    <Fragment>
      
      <section>
        <div style={{minHeight: window.innerWidth <=600 ? '140px' : ''}} className="crossChainTab">
          <div className="tabTitle">
            <h3>{onNFTPage ? 'Select NFT' : `Transfer NFT’s between blockchains`}</h3>
            {onNFTPage ? <div></div> : <p className=""></p>}
          </div>
          {window.innerWidth <=600 ? <p style={{width: '100%', textAlign: 'center'}}>The XP.bridge is currently only supported on desktop</p> : onNFTPage ? '' :  <div className="crosChainSelectBox">
                  <TransferNFTModalSelect
                    placeholder="Select departure chain"
                    disabled={account ? true : false}
                    value={from}
                    onChange={onChangeFrom}
                    options={chains}
                  />
            <span className="fromToArrow">
              <Image src={Updown} />
            </span>
                  <TransferNFTModalSelect
                    placeholder="Select destination chain"
                    classNameCont="selecDest"
                    disabled={account ? true : false}
                    onChange={onChangeTo}
                    value={to}
                    options={chains.filter((n) => n.text !== from)}
                  />
        
          </div>}
          {
              loadingNFTs ? <div className="nftloadercontainer"> <Loader className="nftloader" /></div>
              :
              nfts ? 
              <NFTs />
              :
              ''
          }
          <div className="contiBridge">
         

            {window.innerWidth <=600  ? '' : !account && !elrondWallet ?
              <div className={`steepBtn `} >
                <a
                  onClick={() => dispatch(toggleConnect(true))}
                  className={`bBlueBtn ${from && to ? '' : 'disbldBtn'}`}
                >
                  Continue bridging  <Image src={WhiArrRig} />
                </a>
              </div> : ''}
          </div>
        </div>
        <div className="bridgeSupport">
          <div className="whatIt">
            <Image src={Inf} />  What is NFT
          </div>
          <h2>XP.bridge supports</h2>
          <ul className="supportList">
            <li className="singleSupport"><Image src={BridgeSu2} /></li>
            <li className="singleSupport"><Image src={BridgeSu3} /></li>
            <li className="singleSupport"><Image src={BridgeSu4} /></li>
            <li className="singleSupport"><Image src={BridgeSu5} /></li>
            <li className="singleSupport"><Image src={BridgeSu6} /></li>
            <li className="singleSupport"><Image src={BridgeSu7} /></li>
            <li className="singleSupport"><Image src={BridgeSu8} /></li>
            <li className="singleSupport"><Image src={BridgeSu9} /></li>
            <li className="singleSupport"><Image src={BridgeSu10} /></li>
            <li className="singleSupport"><Image src={BridgeSu1} /></li>
          </ul>
          <div className="blockChainComson">
            + More blockchain coming soon...
          </div>
          <div style={{display: hideAlert || (account || elrondWallet || tronWallet) ? 'none' : ''}} className="worningAlert">
            <div className="alertText">
              Select Departure Chain and Destiantion to continue bridging
              <span className="closeAlert">
                <Image onClick={e => setHideAlert(true)} src={whiteClose} />
              </span>
            </div>
          </div>
        </div>
      </section>
      
    </Fragment>
  );
};

export default TransferNFTSwitcher;
