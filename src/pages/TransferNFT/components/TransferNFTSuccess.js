import React, { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import BSC from "../../../assets/img/nftIcons/bsc.svg";
import Close from "../../../assets/img/icons/closeBl.svg";
import Success from "../../../assets/img/icons/success.png";
import SuccessGreen from "../../../assets/img/icons/check_circle_green.svg";
import Avax from "../../../assets/img/icons/avax.svg";
import Copy from "../../../assets/images/copytx.svg";
import moment from 'moment'
import {ethers} from 'ethers'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { chainsConfig, internalNonce } from "./values";
import axios from 'axios'
import { ChainFactory } from "xp.network";
import { ChainData } from "../../../wallet/config";
import { getRPCFactory } from "../../../wallet/helpers";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const TransferNFTSuccess = () => {
  const {from, to, nft, receiver, txid} = useSelector(s => s.general)
  const [show, setShow] = useState()
  const [copied, setCopy] = useState()
  const [chainId, setChainId] = useState()
  const fromChainConfig = chainsConfig[from]
  const toChainConfig = chainsConfig[to]
  useEffect(async () => {
    const factory = await getRPCFactory()
    const inner = await factory.inner(fromChainConfig.Chain);
    const p = nft
    setChainId(p.native.chainId)
    const res = await axios.get(p.uri)
    if(res && res.data) setShow(res.data)
  }, [])
  const blockchain = internalNonce[chainId]
  const copy = () => {
    setCopy(true)
    setTimeout(() => setCopy(false), 2000)
  }
  return (
    <div className="crossChainTab sendNFTBox successboxi">
      <div className="tabTitle arrowTitle">
        <span className="CloseModal">
          <Image onClick={() => window.location.reload()} src={Close} />
        </span>
        <h3>
          <Image src={Success} className="img24" />
          Success
        </h3>
      </div>
      <div className="successTagListBox">
        <div className="successTagList">
          <ul>
            <li>
              <span className="succTagName">Status</span>{" "}
              <span className="succTagStat statComp">
                <Image src={SuccessGreen} /> Completed
              </span>
            </li>
            <li>
              <span className="succTagName">Date</span>{" "}
              <span className="succTagStat ">{moment().format('YYYY-MM-DD HH:mm')}</span>
            </li>
          </ul>
        </div>
        <div className="successTagList">
          <ul>
            <li>
              <span className="succTagName">NFT Name</span>{" "}
              <span className="succTagStat ">{show?.name}</span>
            </li>
            <li>
              <span className="succTagName">NFT ID</span>{" "}
              <span className="succTagStat ">{nft.native.tokenId}</span>
            </li>
            <li>
              <span className="succTagName">Contract address</span>{" "}
              <span className="succTagStat ">{nft.native.contract ?`${nft.native.contract.substring(0, 10)}...${nft.native.contract.substring(nft.native.contract.length - 6)}` : nft.native.tokenIdentifier}</span>
            </li>
            <li>
              <span className="succTagName">Blockchain</span>{" "}
              <span className="succTagStat ">
                <Image className="success-blockchain" src={blockchain?.img} /> {blockchain?.title}
              </span>
            </li>
          </ul>
        </div>
        <div className="successTagList">
          <ul>
            <li>
              <span className="succTagName">Sent From </span>{" "}
              <span className="succTagStat ">
                <Image className="success-blockchain" src={fromChainConfig.img} />
                {from}
              </span>
            </li>
            <li>
              <span className="succTagName">Sent To </span>{" "}
              <span className="succTagStat ">
                <Image className="success-blockchain" src={toChainConfig.img} />
                {to}
              </span>
            </li>
            <li>
              <span className="succTagName">Destination address</span>{" "}
              <span className="succTagStat ">{`${receiver.substring(0, 10)}...${receiver.substring(receiver.length - 6)}`}</span>
            </li>
          </ul>
        </div>
        <div className="successTagList">
          <ul>
            <li>
              Transaction ID<span className="succTagName"></span>{" "}
              <span className="succTagStat ">
                {`${txid.substring(0, 6)}...${txid.substring(txid.length - 4)}`}{" "}
                <span className="copyText">
                <CopyToClipboard 
                  text={txid}
                  onCopy={copy}
                >
                  <Image src={Copy} className="ml5 clickable" />
                  </CopyToClipboard>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="steepBtn">
        <a href={`${fromChainConfig.tx + txid}`} target="_blank" className="bBlueBtn">
          View Transaction
        </a>
      </div>
    </div>
  );
};
export default TransferNFTSuccess;
