import React, { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";
import {ethers} from 'ethers'
import InfG from "../../../assets/img/icons/InfG.svg";
import arrow_back from "../../../assets/img/icons/arrow_back.svg";
import RightBlue from "../../../assets/img/icons/tri_ang_right_blue.svg";
import NftSelec from "../../../assets/img/NtfList/NtfList_4.png";
import BSC from "../../../assets/img/nftIcons/bsc.svg";
import CheckBlue from "../../../assets/img/icons/checkBlue.svg";
import axios from 'axios'
import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStep, toggleNFTInfoOnlyDetails } from "../../../store/reducers/generalSlice";
import { chains } from "./values";
import { ChainFactory, web3HelperFactory } from "xp.network";
import { ChainData } from "../../../wallet/config";
import { Chain } from "xp.network/dist/consts";
import { useWeb3React } from "@web3-react/core";

const TransferNFTSend = () => {
  const {nft, to} = useSelector(s => s.general)
  const {account, library} = useWeb3React( )
  const dispatch = useDispatch()
  const [show, setShow] = useState()
  const [receiver, setReceiver] = useState()
  const {uri, name, description, contract} = nft.native
  useEffect(async () => {
    const res = await axios.get(uri)
    if(res && res.data) setShow(res.data)
  },[nft])
  const send = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const factory = ChainFactory({
      ropstenParams: {
        ...ChainData.Ethereum,
        provider
      },
      polygonParams: {
        ...ChainData.Polygon,
        provider: new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/')
      }

    });
    const fromChain = await factory.inner(Chain.ROPSTEN)
    const toChain = await factory.inner(Chain.POLYGON)
    const signer = provider.getSigner(account)
    await factory.transferNft(
      fromChain,
      toChain,
      nft,
      signer,
      receiver
    )
      
  }
  const blockchain = chains.filter(n => n.text === to)[0]
  const cont = `${contract.substring(0, 10)}...${contract.substring(contract.length - 8)}`
  return (
    <div className="crossChainTab sendNFTBox">
      <div className="tabTitle arrowTitle">
        <span onClick={() => dispatch(setStep(1))} className="backBtn clickable">
          <Image src={arrow_back} />
        </span>
        <h3>Send NFT</h3>
      </div>
      <div className="nftSelected">
        <Image src={show?.image} />
      </div>
      <div className="nftDetail">
        <ul>
          <li>
            <span>Name</span> <span>{name}</span>
          </li>
          <li>
            <span>Contract address</span> <span>{cont}</span>
          </li>
        </ul>
        <a onClick={() => dispatch(toggleNFTInfoOnlyDetails(nft))} className="viewNft clickable">
          View Full NFT Information
          <Image src={RightBlue} className="viewArrow" />
        </a>
      </div>
      <div className="destiAddress">
        <div className="destiTitle">
          <span>Destination address</span>
          <span className="nftSelect">
            <Image className="srcblockchainimg" src={blockchain?.image?.src} />
            <p className="nftselect-blockchain-name">{blockchain?.text}</p>
          </span>
        </div>
        <div className="inpDestiAdd">
          <input value={receiver} type="text" onChange={e => setReceiver(e.target.value)} placeholder="Paste destination address" />
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
              We'd like to make sure you really want to send the NFT and pay the
              associated fees.
            </span>
            <Image src={InfG} />
          </Link>
        </p>
      </div>
      <div className="steepBtn">
        {/* <Link to="#link" className="bBlueBtn">
          Approve
        </Link>
        <Link to="#link" className="approved">
          <Image src={CheckBlue} /> CheckBlue
        </Link> */}
        <a onClick={send} className="bBlueBtn clickable">
          Send NFT
        </a>
      </div>
    </div>
  );
};
export default TransferNFTSend;
