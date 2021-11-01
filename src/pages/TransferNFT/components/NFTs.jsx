import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import { Link } from 'react-router-dom'
import TransferNFTModalNftSelecNftList from './TransferNFTModalNftSelecNftList'
import Inf from "../../../assets/img/icons/inf.png";
import CheckCircle from "../../../assets/img/icons/check-circle-filled.svg";
import axios from 'axios'
import { setNFT, toggleNFTInfo } from '../../../store/reducers/generalSlice';
import { chainsConfig } from './values';
import { getRPCFactory } from '../../../wallet/helpers';
import { isBase64 } from './values'

export default function NFTs(props) {

    const {nfts} = useSelector(s => s.general)
    return (
        <ul className="storeNtfList">
          {nfts.map((n, i) => <NFT factory={props.factory} nft={n} key={`${i}`} />)}
        </ul>
    )
}

function NFT(props) {
    const {nft, factory} = props
    const [img, setImg] = useState()
    const dispatch = useDispatch()
    const [killed, setKill] = useState()
    const {from, to} = useSelector(s => s.general)
    useEffect(async() => {
        const factory = await getRPCFactory()
        const fromChain = chainsConfig[from]
        const toChain = chainsConfig[to]
        const inner = await factory.inner(fromChain.Chain);
        const toChainInner = await factory.inner(toChain.Chain)
        try {
            console.log(nft)
 
            const p = await factory.nftUri(inner, nft)
            const res = await axios.get(p.uri)
            if(res && res.data) setImg(res.data)
        } catch(err) {
            if(isBase64(nft.uri)) {
              const elrond = await factory.inner(toChain.Chain)
              const decoded = await elrond.isWrappedNft(nft)
              console.log(decoded)
                console.log(elrond)
              console.log(atob(nft.uri))
            }
            setKill(true)
        }

    },[props.uri])
    const select = e => {
        dispatch(toggleNFTInfo(nft))
        dispatch(setNFT(nft))
    } 
    const className = `sinStoreNtf clickable`
    return killed ? '' : img ? <li onClick={select} className={className}>
    <div className="storeTop">
      <Link to="#link" className="inf infoOfNFT" >
        <Image src={Inf} className="inf infoOfNFT" />
      </Link>
      <div className="storeImg">
        {
          img?.animation_url 
          ? <video height={'100%'} src={img?.animation_url} autoPlay={true} loop={true} />
          : <Image src={img.image} />
        }
      </div>
      <span className="checkNft">
        <Image src={CheckCircle} />
      </span>
    </div>
    <p className="storeText">{img.name}</p>
  </li> : <div className="container-of-nft-loader">
  <div class="animated-background"></div>
  <div class="animated-background animated-background-name"></div>
  </div>
}