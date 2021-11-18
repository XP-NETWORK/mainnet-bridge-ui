import React, { Fragment, useEffect, useState } from "react";
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import maiarIcon from "../../../assets/images/maiarIcon.png";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";
import RedCircle from "../../../assets/img/redCircle.svg";
import Close from "../../../assets/img/icons/closeBl.svg";
import ConnectBridge from "../../../assets/img/icons/ConnectBridge.svg";
import {ethers} from 'ethers'
import Ledger from "../../../assets/img/icons/lefger.svg";
import MetaMask from "../../../assets/img/icons/MetaMask.svg";
import TronLinkIcon from "../../../assets/images/tronlinkpro.png";
import tronPopUpIcon from  "../../../assets/images/tronPopUp.png"
import copied from "../../../assets/images/Copied.svg"
import Trezor from "../../../assets/img/icons/trezor.svg";
import WalletConnect from "../../../assets/img/icons/WalletConnect.svg";
import WalletConnect2 from "../../../assets/img/icons/WalletConnect2.svg";
import fileCopy from "../../../assets/images/file_copy.svg"
import QRCode from 'qrcode'
import { useHistory } from "react-router";
import whiteClose from "../../../assets/img/icon/whiteClose.svg";
import WhiteContBrid from "../../../assets/img/icon/WhiteContBrid.svg";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setElrondWallet, setFrom, setMaiar, setTronWallet, toggleConnect, setTronPopUp } from "../../../store/reducers/generalSlice";
import { chainsConfig, EVM, ELROND, CHAIN_INFO } from "./values";
import { useWeb3React } from "@web3-react/core";
import { getFactory, injected } from "../../../wallet/connectors";
import { getChainId, isEVM, isTronLink } from "../../../wallet/helpers";
import Warn from "../../../assets/img/3dwallet.png";
import { TronLink } from "../../../wallet/tronlink";
import { Address, ExtensionProvider, WalletConnectProvider, ProxyProvider } from "@elrondnetwork/erdjs"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getAddEthereumChain } from "../../../wallet/chains";
const TronWeb = require('tronweb')
const TransferNFTModal = () => {
  const {
    connector,
    library,
    chainId,
    account,
    user,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React();
  
  const walletConnectDeepLink = "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=";
  const history = useHistory()
  const dispatch = useDispatch();
  const [onMaiarConnect, setOnMaiarConnect] = useState('')
  const { isConnectOpen, from, elrondWallet } = useSelector((s) => s.general);
  const [switchNetwork, setSwitchNetwork] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => dispatch(toggleConnect(false));
  const fromConfig = chainsConfig[from]
  const [strQR, setStrQr] = useState('')
  const [qrCodeString, setQqrCodeString] = useState('')
  const tronPopUp = useSelector(state => state.general.tronPopUp)
  const [copyClicked, setCopyClicked] = useState(false)

  async function connect() {
        try {
          if(!window.ethereum && window.innerWidth <= 600)  {
            window.open(`https://metamask.app.link/dapp/${window.location.host}/`)
          }
          await activate(injected);
        } catch (ex) {
        }
        // if(!error || error.code !== -32002) window.open('https://metamask.io/download.html', '_blank');
    }
  
  // useEffect(() => {
  //   if(maiarAddress && from === 'Elrond'){
  //     setOnMaiarConnect(false)
  //     dispatch(setElrondWallet(maiarAddress))
  //     handleClose()
  //   }
  // }, [maiarAddress])

  const connectToElrond = async () => {
    const instance = ExtensionProvider.getInstance()
    try {
      await instance.init()
      await instance.login()
      const { account } = instance
      if(elrondWallet) {
        const factory = await getFactory()
        const fromChain = await factory.inner(chainsConfig.Elrond.Chain)
        // const ticker = await fromChain.issueESDTNft(
        //   ExtensionProvider.getInstance(),
        //   'XPNET',
        //   'XPNET',
        //   false,
        //   false,
        //   true
        // )
        // settik(ticker)
        // console.log(ticker)
        // await fromChain.setESDTRole(
        //   ExtensionProvider.getInstance(),
        //   // ticker,
        //   'XPNET-cdcf5b',
        //   new Address(address),
        //   Array.of('ESDTRoleNFTCreate')
        // )
        const provider = ExtensionProvider.getInstance()
        ;
        const address = await ExtensionProvider.getInstance().getAddress()
        // await fromChain.mintableEsdts(address)
        factory.mint(fromChain, provider, 
        {identifier: 'XPNET-cdcf5b', name:' ruby', uris: ['https://staking-api.xp.network/staking-nfts/4']}
        )
      }
      else 
      if(account && account.address) {
        dispatch(setElrondWallet(account.address))
        handleClose()
      }
    } catch(err) {
      // cancelled
      window.open('https://getmaiar.com/defi', '_blank');
      console.log(err)
    }
  }

  const generateQR = async text => {
    try {
      const QR = await QRCode.toDataURL(text)
      return QR
    } catch (err) {
      console.error(err)
    }
  }

  const onClientConnect = (maiarProvider) => {
    return {
      onClientLogin:async (data, data2, data3, data4) => {
        const add = await maiarProvider.getAddress()
        dispatch(setElrondWallet(add))
        dispatch(setMaiar(maiarProvider))
        setOnMaiarConnect(false)
        handleClose()
      },
      onClientLogout: async () => {
        console.log("Loged Out");
        history.push("/")
      }
    }
  }

  const onMaiar = async () => {
    setOnMaiarConnect(true)
    const provider = new ProxyProvider( "https://gateway.elrond.com")
    const maiarProvider = new WalletConnectProvider(provider, 'https://bridge.walletconnect.org/', onClientConnect);
      try {
        await maiarProvider.init()
        maiarProvider.onClientConnect = onClientConnect(maiarProvider)
        const qrCodeString = await maiarProvider.login()
        setQqrCodeString(qrCodeString)
        const qr = await generateQR(qrCodeString)
        setStrQr(qr)
      } catch (error) {
        console.log(error);
      }
  }
  

  const onWalletConnect = async () => {
    const { rpc, chainId } = chainsConfig[from]
    try {
        const walletconnect = new WalletConnectConnector({ 
          rpc: {
            [chainId]: rpc
          },
            chainId,
            qrcode: true,
        })
        walletconnect.networkId = chainId
        await activate(walletconnect, undefined, true)
    } catch (error) {
        console.log(error);
    }
  }

  async function connectTronlink() {
    if(window.innerWidth <= 600 && !window.tronWeb){
      dispatch(setTronPopUp(true))
    }else{
      try {
        try {
          const accounts = await window.tronWeb.request({ method: "tron_requestAccounts" });
          } catch(err) {
            console.log(err);
            }
        if(window.tronLink && window.tronWeb.defaultAddress.base58) {
          const publicAddress = window.tronWeb.defaultAddress.base58
          dispatch(setTronWallet(publicAddress))
          handleClose()
        }
      } catch(err) {
          console.log(err)
      }
    }
  }

  useEffect(() => {
    if(chainId && isConnectOpen) {
        const chainsMatch = chainId === fromConfig.chainId
        if(chainsMatch) {
          handleClose()
        }
        else {
            setSwitchNetwork(true)
        }
    }

  },[chainId])
  const switchChain = async () => {
    const info = CHAIN_INFO[from];
            const chainId = `0x${info.chainId.toString(16)}`;
            try {
              await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId }],
              })
            } catch(err) {
                try {
                    const toHex = (num) => {
                      return '0x'+num.toString(16)
                    }
                  const chain = getAddEthereumChain()[parseInt(chainId).toString()]
                  const params = {
                    chainId: toHex(chain.chainId), // A 0x-prefixed hexadecimal string
                    chainName: chain.name,
                    nativeCurrency: {
                      name: chain.nativeCurrency.name,
                      symbol: chain.nativeCurrency.symbol, // 2-6 characters long
                      decimals: chain.nativeCurrency.decimals,
                    },
                    rpcUrls: chain.rpc,
                    blockExplorerUrls: [ ((chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url) ? chain.explorers[0].url : chain.infoURL) ]
                  }
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [params, account],
                      })
                } catch(err) {
                    console.log(err)
                }
            }
  }
  console.log(
    `${walletConnectDeepLink}https://maiar.com/?wallet-connect=${encodeURIComponent(
      qrCodeString
    )}`
  , 'ladsldsa')
  const isELROND = chainsConfig[from] ? chainsConfig[from].type === ELROND : "";
  const OFF = { opacity: 0.6, pointerEvents: "none" };
  return (
    <>
      <Modal show={tronPopUp} onHide={() => dispatch(setTronPopUp(false))} className="tron--modal">
        <Modal.Body>
          <button onClick={() => dispatch(setTronPopUp(false))} type="button" className="close" data-dismiss="modal" aria-label="Close">&#x2715;</button>
          <div className="tron--modal__body">
          <div className="tron--modal__header"><img src={tronPopUpIcon} alt="Tron Popup Icon" /></div>
          <div className="tron--modal__title">To continue bridging:</div>
          <ol className="tron--modal__text">
            <li>Copy link below</li>
            <li>Open Tronlink App</li>
            <li>Paste link to Tronlink browser</li>
            <li>Enjoy 😉</li>
          </ol>
          <div className="tron--modal__link">
              <div className="link__items">
                  <div className="link__address">https://bridge.xp.network</div>
                  { copyClicked ?
                    <img className="tron__copied" src={copied} />
                    :
                    null
                  }
                <CopyToClipboard text={"https://bridge.xp.network"}>
                  <div onClick={()=> setCopyClicked(true)}  className="copyIcon"><img src={fileCopy} /></div>
                </CopyToClipboard>
              </div>
          </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        animation={false}
        show={isConnectOpen}
        onHide={handleClose}
        className={`connectBridge ${switchNetwork ? 'warningModal': ''}`}
      >
        { onMaiarConnect ?
        <div className="maiarModal">
          <h2 className="title">Maiar Login</h2>
          <img src={strQR} alt="" />
          <div className="subtitle">Scan the QR code using Maiar</div>
          
          { window.innerWidth <= 600 ?
          <div className="maiar__deeplink">
          <a
            id="accessWalletBtn"
            data-testid="accessWalletBtn"
            className="btn btn-primary px-4 mt-4"
            href= {`${walletConnectDeepLink}https://maiar.com/?wallet-connect=${encodeURIComponent(
              qrCodeString
            )}`}

            rel="noopener noreferrer nofollow"
            target="_blank"
          >Maiar Login</a></div>
          : null
          }
          <div onClick={() => setOnMaiarConnect(false)} className="maiar__button">Back</div>
        </div>
        :
        <Modal.Body>
          { switchNetwork ? 
                    <div className="crossChainTab sendNFTBox">
                    <div className="tabTitle arrowTitle">
                      <span className="CloseModal" onClick={handleClose}>
                        <Image src={whiteClose} />
                      </span>
                      <h3>Warning</h3>
                    </div>
                    <div className="warModaCont">
                      <Image src={Warn} />
                      <h3>
                        Switch to {from} Mainnet
                      </h3>
                      <p className="">
                        XP.network bridge requires you to connect to the {from} Mainnet
                      </p>
                    </div>
                    <div style={{width: '100%'}} className="steepBtn">
                      <a onClick={switchChain} style={{width: '100%'}} className="bBlueBtn clickable">
                        Connect to Mainnet
                      </a>
                    </div>
                  </div>
          : <div className="crossChainTab sendNFTBox">
            <div className="tabTitle arrowTitle">
              <span className="CloseModal" onClick={handleClose}>
                  <Image src={whiteClose} />
              </span>
              <h3>
                  <Image src={WhiteContBrid} className="ConnectWall" />
                Connect Wallet
              </h3>
            </div>
            <ul className="selsectBridge">
              <li onClick={connect} style={isEVM() ? {} : OFF}>
                <Link to="">
                  {" "}
                  <Image src={MetaMask} /> MetaMask{" "}
                </Link>
              </li>

              <li className="" style={isELROND ? {} : OFF} onClick={connectToElrond}>
                <Link to="#">
                  {" "}
                  <span className="imgw">
                    <Image src={WalletConnect2} />
                  </span>{" "}
                  Elrond Wallet{" "}
                </Link>
              </li>
              <li onClick={connectTronlink} style={isTronLink() ? {} : OFF}>
                <Link to="">
                  {" "}
                  <Image className="tronlink-icon-wallet" src={TronLinkIcon} /> TronLink
                </Link>
              </li>
              <li style={{ opacity: 0.6, pointerEvents: "none" }}>
                <Link to="#">
                  {" "}
                  <Image src={Trezor} /> Trezor{" "}
                </Link>
              </li>
              <li onClick={() => onWalletConnect()} style={isEVM() ? {} : OFF}>
                <Link to="#">
                  {" "}
                  <Image src={WalletConnect} /> WalletConnect{" "}
                </Link>
              </li>
              {/* onClick={() => setOnMaiarConnect(true)} */}
              <li 
              onClick={() => onMaiar()} 
               style={isELROND  ? {} : OFF}>
                <Link to="#">
                  {" "}
                  <Image className="tronlink-icon-wallet" src={maiarIcon} /> Maiar{" "}
                </Link>
              </li>
            </ul>
          </div>}
        </Modal.Body>
        }
      </Modal>
    </>
  );
};
export default TransferNFTModal;