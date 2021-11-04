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
import { setStep, setSuccess, toggleError, toggleNFTInfoOnlyDetails } from "../../../store/reducers/generalSlice";
import { chains, chainsConfig } from "./values";
import { ChainFactory, web3HelperFactory } from "xp.network";
import { ChainData } from "../../../wallet/config";
import { Chain } from "xp.network/dist/consts";
import { useWeb3React } from "@web3-react/core";
import { getFromParams, getRPCFactory, isEVM, setupURI } from "../../../wallet/helpers";
import { getFactory } from "../../../wallet/connectors";
import Loader from './Loader'
import { BigNumber } from "bignumber.js";
import web3 from 'web3'
import { ExtensionProvider } from "@elrondnetwork/erdjs/out";
const Web3Utils = require('web3-utils');

const TransferNFTSend = () => {
  const {nft, to, from, elrondWallet} = useSelector(s => s.general)
  const {account, library} = useWeb3React( )
  const [error, setError] = useState()
  const [loadingApproval, setLoadingApproval] = useState()
  const [loading, setLoading] = useState()
  const [isApproved, setIsApproved] = useState()
  const [preCheckApproved, setLoadingPreCheckApproved] = useState(true)
  const dispatch = useDispatch()
  const [show, setShow] = useState()
  const [fees, setFees] = useState()
  const [bnFee, setBNFee] = useState()
  const [receiver, setReceiver] = useState()
  const {uri, name, description, contract, chainId, tokenIdentifier} = nft.native
  const fromChainConfig = chainsConfig[from]
  const toChainConfig = chainsConfig[to]
  
  useEffect(async () => {
    isApprovedForMinter()
    estimate()
    const s = setInterval(() => estimate(), 1000 * 30)
    setShow(nft)
    return () => clearInterval(s)

  },[nft])

  const send = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try {
      if(!loading && receiver) {
        setError('')
        // if(isEVM()) {
          const isAddress = await new web3.utils.isAddress(receiver)
          if(isAddress) {
            if(fromChainConfig && toChainConfig) {
              setLoading(true)
              const factory = await getFactory()
              const fromChain = await factory.inner(fromChainConfig.Chain)
              const toChain = await factory.inner(toChainConfig.Chain)
              const signer = elrondWallet ? ExtensionProvider.getInstance() : provider.getSigner(account)
              const txid = await factory.transferNft(
                fromChain,
                toChain,
                nft,
                signer,
                receiver,
                bnFee.decimalPlaces(0).toString()
              )
              if(txid) {
                dispatch(setSuccess({ receiver, txid }))
                dispatch(setStep(3))
              }
            } 
          } else setError('Not a valid address')

        // }
      }
    } catch(err) {
      setLoading(false)
      dispatch(toggleError(err))
      console.log(err.message)
      console.log(err)
    }
  }

  useEffect(async () => {

  }, [])
  const estimate = async () => {
    try {
    const factory = await getRPCFactory()
    const fromChain = await factory.inner(fromChainConfig.Chain)
    const toChain = await factory.inner(toChainConfig.Chain)
    const fee = await factory.estimateFees(fromChain, toChain, nft, account ? account : '0xadFF46B0064a490c1258506d91e4325A277B22aE')
    setBNFee(fee.multipliedBy(1.8))
    const bign = fee.multipliedBy(1.8).decimalPlaces(0).toString()
    setFees(await Web3Utils.fromWei(bign , 'ether'))
    } catch(err) {
      console.log(err,' alldlkskld')
    }

  }
  const approve = async () => {
    if(isEVM()) {
      setLoadingApproval(true)
      const factory = await getFactory()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const fromChain = await factory.inner(fromChainConfig.Chain)
      const signer = provider.getSigner(account)
      try {
        await fromChain.approveForMinter(nft, signer)
        setIsApproved(true)
      } catch(err) {
        if(err.data && err.data.code === -32000) {
          setIsApproved(true)
        } else {
          dispatch(toggleError(err))
        }
      }
      setLoadingApproval(false)
    } else  {
      setLoadingApproval(true)
      try {
        const factory = await getFactory()
        const fromChain = await factory.inner(fromChainConfig.Chain)
        const toChain = await factory.inner(toChainConfig.Chain)
        const signer = ExtensionProvider.getInstance()
        const bign = bnFee.decimalPlaces(0).toString()
        await fromChain.doEgldSwap(signer, bign)
        setIsApproved(true)
        setLoadingApproval(false)
        console.log('hellos')
      } catch(err) {
      setLoadingApproval(false)
        
      }

    }
  }
  const isApprovedForMinter = async () => {
    setLoadingPreCheckApproved(true)
    if(isEVM()) {
      try {
        const factory = await getFactory()
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const fromChain = await factory.inner(fromChainConfig.Chain)
        const signer = provider.getSigner(account)
        const checkIsApproved = await fromChain.isApprovedForMinter(nft, signer)
        setIsApproved(checkIsApproved)
      } catch(err) {
        console.log(err, 'adsklalsdkaklsdasdkl')
        if(elrondWallet){

        } else
        setIsApproved(true)
      }

    } else if(elrondWallet) {

    } else {
      setIsApproved(true)
    }
    setLoadingPreCheckApproved(false)

  }

  const blockchain = chains.filter(n => n.text === to)[0]
  console.log(nft)
  const cont = contract ? `${contract.substring(0, 10)}...${contract.substring(contract.length - 8)}` :  tokenIdentifier
  return (
    <div className="crossChainTab sendNFTBox">
      <div className="tabTitle arrowTitle">
        <span onClick={() => dispatch(setStep(1))} className="backBtn clickable">
          <Image src={arrow_back} />
        </span>
        <h3>Send NFT</h3>
      </div>
      <div className="nftSelected">
           {show?.animation_url 
                ? <video src={show?.animation_url} autoPlay={true} loop={true} /> 
                : <Image className="srcblockchainimg" src={blockchain?.image?.src} />
                }
      </div>
      <div className="nftDetail">
        <ul>
          <li>
            <span>Name</span> <span>{name ? name : show?.name}</span>
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
          {error ? <p>{error}</p> : ''}
        </div>
      </div>
      <div className="feesArea">
        <div className="feesTitle">
          <span>Gas Fees</span>
          <span>{fees ? `${fees} ${fromChainConfig?.token}` : 'Calculating fees'}</span>
        </div>
        {/* <p className="approveRequ">
          XP.network requires approval
          <Link to="#link" className="infMark">
            <span className="infBox">
              We'd like to make sure you really want to send the NFT and pay the
              associated fees.
            </span>
            <Image src={InfG} />
          </Link>
        </p> */}
      </div>
      {!preCheckApproved ? <div className="steepBtn">
        {isEVM() || elrondWallet
        ? <>
          <a onClick={approve} style={{display: isApproved  ? 'none' : '' }}  className="bBlueBtn">
            {loadingApproval ? <Loader /> : 'Approve'}
          </a>
          <a style={{display: isApproved ? '' : 'none' }} className="approved">
            <Image src={CheckBlue} /> Approved
          </a>
        </> 
        :''}
        
        <a onClick={send} style={{ marginTop: isApproved ? '' : '10px' }} className={`bBlueBtn clickable ${isApproved ? '' : 'disbldBtn'}`}>
          {
            loading ? <Loader  /> : 'Send NFT'
          }
        </a>
      </div> : 
        <Loader className="nftloader" />
      }
    </div>
  );
};
export default TransferNFTSend;