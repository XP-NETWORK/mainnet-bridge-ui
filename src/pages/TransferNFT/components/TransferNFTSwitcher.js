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
  setStep,
  setTo,
  toggleConnect,
} from "../../../store/reducers/generalSlice";
import { chains, chainsConfig, ELROND, EVM } from "./values";
import { useWeb3React } from "@web3-react/core";
import { createChainFactory } from "../../../wallet/connectors";
import { ChainData } from "../../../wallet/config";
import { Chain } from "xp.network/dist/consts";
import { ChainFactory } from "xp.network";
import NFTs from "./NFTs";

const TransferNFTSwitcher = () => {
  const { to, from, nft, nfts } = useSelector((s) => s.general);
  const dispatch = useDispatch();
  const { account, chainId, library } = useWeb3React();

  const [users, setUsers] = useState({
    activeMark: null,
  });

  const toggleCheck = (index) => {
    setUsers({ ...users, activeMark: users.allUsers[index] });
  };

  const toggleCheckMark = (index) => {
    if (users.allUsers[index] === users.activeMark) {
      return (users.activeMark = true);
    }
  };
  const onChangeFrom = (e) => {
    const value = e.target.innerText.replace(/(?:\r\n|\r|\n)/g, "");
    if (value === to) dispatch(setTo(undefined));
    dispatch(setFrom(value));
  };
  const onChangeTo = (e) => {
    const value = e.target.innerText.replace(/(?:\r\n|\r|\n)/g, "");
    dispatch(setTo(value));
  };
  const OFF = { opacity: 0.6, pointerEvents: "none" };
  const correctChainId =
    from && chainId ? chainsConfig[from]?.chainId === chainId : false;

  const isEVM = chainsConfig[from] ? chainsConfig[from].type === EVM : "";
  const isELROND = chainsConfig[from] ? chainsConfig[from].type === ELROND : "";

  useEffect(async () => {
    if(account && from && isEVM) {
        const factory = ChainFactory({
              ...ChainData.Ethereum,
              provider: window.ethereum,
          });
        //   const inner = await factory.inner(Chain.ROPSTEN);
        //   console.log(inner)
          const nfts = await factory.nftList({getNonce: () => 5}, account)
          dispatch(setNFTs(nfts))
    }
  },[account, from])


  const next = () => {
      dispatch(setStep(2))
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
              <SelectItem>
                <Dropdown
                  placeholder="Select Chain"
                  fluid
                  selection
                  value={from}
                  onChange={onChangeFrom}
                  options={chains}
                />
              </SelectItem>
            </div>
          </div>
          <span className="fromToArrow">
            {" "}
            <Image src={FromToArrow} />
          </span>
          <div className="crosChainSelect">
            <div className="chainFrom">To</div>
            <div className="chainSelect">
              <SelectItem>
                <Dropdown
                  placeholder="Select Chain"
                  fluid
                  onChange={onChangeTo}
                  selection
                  options={chains.filter((n) => n.text !== from)}
                />
              </SelectItem>
            </div>
          </div>
        </div>

        <div className="storeNtfs">
          <h5>Stored NFTs</h5>
          {
              nfts ? 
              <NFTs />
              :
              <p>
            <Image src={fing} fluid /> Connect the wallet to display your NFTs
          </p>
          }
  
            {account && isEVM ? (
            <div
                style={from && to && account ? {} : { opacity: 0.6, pointerEvents: "none" }}
                className="steepBtn"
            >
              <a
                style={nft && correctChainId ? {} : OFF}
                onClick={next}
                className="bBlueBtn clickable"
              >
                {correctChainId && nft && to
                  ? "Next"
                  : !correctChainId
                  ? `You are connected to the wrong chain`
                  : !nft
                  ? "Choose an NFT"
                  : !to
                  ? "Choose a destination"
                  : ""}
              </a>
              </div>
            ) : (
                <div
                style={from ? {} : { opacity: 0.6, pointerEvents: "none" }}
                className="steepBtn"
              >
              <a
                onClick={() => dispatch(toggleConnect(true))}
                className="bBlueBtn"
              >
                Connect Wallet
              </a>
              </div>
            )}
        </div>
      </div>
    </Fragment>
  );
};

export default TransferNFTSwitcher;
