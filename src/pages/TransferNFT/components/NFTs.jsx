import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import { Link } from 'react-router-dom'
import TransferNFTModalNftSelecNftList from './TransferNFTModalNftSelecNftList'
import Inf from "../../../assets/img/icons/inf.png";
import CheckCircle from "../../../assets/img/icons/check-circle-filled.svg";
import axios from 'axios'
import { setNFT, toggleExpandNFTs, toggleNFTInfo } from '../../../store/reducers/generalSlice';
import { chainsConfig } from './values';
import { getRPCFactory, preloadItem, setupURI } from '../../../wallet/helpers';
import { isBase64 } from './values'
import List from '../../../assets/images/list.svg'
import Expand from '../../../assets/images/expand.svg'

export default function NFTs(props) {
  const dispatch = useDispatch()
    const {nfts, from} = useSelector(s => s.general)
    const placeholders = new Array(nfts.length % 3 === 0 ? 0 : nfts.length % 3 === 2 ? 1 : 2).fill(0)
    const chain = chainsConfig[from]
    return (
      <div className="nftcontainer">
        <div className="nft-top">
          <div className="nftson">
            NFTs on <img src={chain.img} /> {from}
          </div>
          <div className="nftactions">
            {/* <img src={List} /> */}
            <img onClick={() => dispatch(toggleExpandNFTs(true))} src={Expand} />
          </div>
        </div>
        <ul className="storeNtfList">
          {nfts.map((n, i) => <NFT factory={props.factory} nft={n} key={`${i}`} />)}
          {placeholders.map(n => <li className="placeholdernfts"></li>)}
        </ul>
        
      </div>

    )
}

export function NFT(props) {
    const {nft, factory} = props
    const [img, setImg] = useState()
    const dispatch = useDispatch()
    const [graphicLoaded, setGraphicLoaded] = useState()
    const [killed, setKill] = useState()
    const {from, to} = useSelector(s => s.general)
    useEffect(async() => {
      const res = nft
      try {
        if(res.animation_url) preloadItem(setupURI(res.animation_url), 'video', setGraphicLoaded)
        else preloadItem(setupURI(res.image), 'image', setGraphicLoaded)
      } catch(err) {
        console.log(err)
        setGraphicLoaded(true)
      }
//
      setImg(res)
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
          graphicLoaded ?
          img?.animation_url 
          ? <video src={img?.animation_url} autoPlay={true} loop={true} />
          : <Image src={setupURI(img.image)} />
          : <div class="animated-background loaderplaceholder"></div>
        }
      </div>
      <span className="checkNft">
        <Image src={CheckCircle} />
      </span>
    </div>
    {/* <p className="storeText">{img.name}</p> */}
  </li> : <div className="container-of-nft-loader">
  <div class="animated-background"></div>
  <div class="animated-background animated-background-name"></div>
  </div>
}

