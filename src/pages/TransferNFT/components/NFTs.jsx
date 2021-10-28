import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import { Link } from 'react-router-dom'
import TransferNFTModalNftSelecNftList from './TransferNFTModalNftSelecNftList'
import Inf from "../../../assets/img/icons/inf.png";
import CheckCircle from "../../../assets/img/icons/check-circle-filled.svg";
import axios from 'axios'
import { setNFT, toggleNFTInfo } from '../../../store/reducers/generalSlice';

export default function NFTs() {
    const {nfts} = useSelector(s => s.general)
    return (
        <ul className="storeNtfList">
          {nfts.map((n, i) => <NFT {...n} key={`${i}`} />)}
        </ul>
    )
}

function NFT(props) {
    const [img, setImg] = useState()
    const {nft} = useSelector(s => s.general)
    const dispatch = useDispatch()
    useEffect(async() => {
        const res = await axios.get(props.uri)
        console.log(res.data)
        if(res && res.data) setImg(res.data)
    },[])
    const select = e => {
        console.log(e.target.classList.value)
        dispatch(toggleNFTInfo(props))
        dispatch(setNFT(props))
    } 
    const className = `sinStoreNtf clickable`
    console.log(props)
    return img ?<li onClick={select} className={className}>
    <div className="storeTop">
      <Link to="#link" className="inf infoOfNFT" >
        <Image src={Inf} className="inf infoOfNFT" />
      </Link>
      <div className="storeImg">
        <Image src={img.image} />
      </div>
      <span className="checkNft">
        <Image src={CheckCircle} />
      </span>
    </div>
    <p className="storeText">{img.name}</p>
  </li> : ''
}