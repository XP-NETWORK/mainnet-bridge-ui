import React, { Fragment, useEffect, useState } from "react";
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";
import { chainsConfig, internalNonce, isBase64 } from '../components/values'
import Close from "../../../assets/img/icons/closeBl.svg";
import ConnectBridge from "../../../assets/img/icons/ConnectBridge.svg";
import moment from 'moment'
import Ledger from "../../../assets/img/icons/lefger.svg";
import MetaMask from "../../../assets/img/icons/MetaMask.svg";
import Trezor from "../../../assets/img/icons/trezor.svg";
import WalletConnect from "../../../assets/img/icons/WalletConnect.svg";
import WalletConnect2 from "../../../assets/img/icons/WalletConnect2.svg";
import arrow_back from "../../../assets/img/icons/arrow_back.svg";
import {ethers} from 'ethers'
import NftDetImg from "../../../assets/img/NftDetImg.png";
import Inf from "../../../assets/img/icons/inf.png";
import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStep, toggleNFTInfo } from "../../../store/reducers/generalSlice";
import axios from 'axios'
import { ChainFactory } from "xp.network";
import { ChainData } from "../../../wallet/config";
import { getRPCFactory, setupURI } from "../../../wallet/helpers";
const TransferNFTModalNftDetails = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const [details, setDetails] = useState(false)
  const [chainId, setChainId] = useState()
  const handleClose = () => dispatch(toggleNFTInfo(undefined))
  const { nftDetails, onlyDetails, from } = useSelector(s => s.general)
  const fromChain = chainsConfig[from]

  useEffect(async () => {
    if(nftDetails) {
      setDetails(false)
      const factory  = await getRPCFactory()
      const {uri} = nftDetails
      const inner = await factory.inner(fromChain.Chain);
      const p = await factory.nftUri(inner, nftDetails)
      setChainId(p.chainId)
      const res = await axios.get(setupURI(p.uri))
      console.log(res.data)
      if(res && res.data) setShow(res.data)
    } else setShow(undefined)
  }, [nftDetails])
  const blockchain = internalNonce[chainId]
  const hasAttributes = show ? show.attributes && show.attributes : false
  console.log(show, nftDetails)
  return (
    <>
      <Modal
        show={nftDetails}
        onHide={handleClose}
        className={details || onlyDetails ? "nftDetModal" : 'connectBridge nftSelectModal'}
      >
        <Modal.Body>
          {
            details || onlyDetails 
            ? <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                <Image src={Close} />
              </span>
              <span className="backBtn clickable" onClick={() => setDetails(false)}>
                {onlyDetails ? '' : <Image src={arrow_back} /> }
              </span>
              <h3>NFT Details</h3>
            </div>
            <div className="nftDetContBox">
              <div className="nftDetImg">
                {show?.animation_url 
                ? <video src={show?.animation_url} autoPlay={true} loop={true} /> 
                : <Image src={setupURI(show?.image)} />
                }
              </div>
              <div className="nftDetCont">
                <div className="nftDetContList nftName">
                  <div className="label">Name</div>
                  <div className="details">{show?.name ? show?.name : '-'}</div>
                </div>
                <div className="nftDetContList ">
                  <div className="label">Token ID</div>
                  <div className="details">{nftDetails?.native?.tokenId ? nftDetails?.native?.tokenId : nftDetails?.native?.tokenIdentifier}</div>
                </div>
                <div className="nftDetContList ">
                  <div className="label">Description</div>
                  <div className="details">
                    {show?.description}
                  </div>
                </div>
                <div className="nftDetContList ">
                  <div className="label">Original Blockchain</div>
                  <div className="details">
                  <Image className="blockchain-img" src={blockchain?.img} />
                  {blockchain?.title}
                  </div>
                </div>
                {hasAttributes ? show.attributes.map((n,i) => <Attribute {...n} key={`attribute-${i}`}/>) : ''}
              </div>
            </div>
          </div>
            :
            <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                <Image src={Close} />
              </span>
              <h3>{show?.name}</h3>
            </div>
            <div className="nftSelectCont">
              {
                          show?.animation_url 
                          ? <video className="nft-sle-cas" src={show?.animation_url} autoPlay={true} loop={true} />
                          : <Image className="nft-sle-cas" src={setupURI(show?.image)} fluid />
              }
              
              <div className="steepBtn">
                <a className="" onClick={() => {
                  dispatch(setStep(2))
                  handleClose()
                }} className="clickable bBlueBtn">
                  Select this NFT
                </a>
                <a  className="BlueLineBtn clickable" onClick={() => setDetails(true)}>
                  View Details
                </a>
              </div>
            </div>
          </div>
          }

        </Modal.Body>
      </Modal>
    </>
  );
};

export default TransferNFTModalNftDetails;


function Attribute(props) {
  const { trait_type, display_type, value } = props
  return  <div className="nftDetContList ">
  <div className="label">{trait_type}</div>
  <div className="details">
    {
      display_type === 'date' ? moment(new Date(value * 1000)).format('MM-DD-YYYY') : value
    }
  </div>
</div>
}