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
import Trezor from "../../../assets/img/icons/trezor.svg";
import WalletConnect from "../../../assets/img/icons/WalletConnect.svg";
import WalletConnect2 from "../../../assets/img/icons/WalletConnect2.svg";


import whiteClose from "../../../assets/img/icon/whiteClose.svg";
import WhiteContBrid from "../../../assets/img/icon/WhiteContBrid.svg";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setElrondWallet, setFrom, setTronWallet, toggleConnect } from "../../../store/reducers/generalSlice";
import { chainsConfig, EVM, ELROND, CHAIN_INFO } from "./values";
import { useWeb3React } from "@web3-react/core";
import { getFactory, injected } from "../../../wallet/connectors";
import { getChainId, isEVM, isTronLink } from "../../../wallet/helpers";
import Warn from "../../../assets/img/3dwallet.png";
import { TronLink } from "../../../wallet/tronlink";
import {Address, ExtensionProvider} from "@elrondnetwork/erdjs"
import { getAddEthereumChain } from "../../../wallet/chains";
import * as Dapp from "@elrondnetwork/dapp";

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

  const dispatch = useDispatch();
  const [onMaiarConnect, setOnMaiarConnect] = useState('')
  const { isConnectOpen, from, elrondWallet } = useSelector((s) => s.general);
  const [switchNetwork, setSwitchNetwork] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => dispatch(toggleConnect(false));
  const fromConfig = chainsConfig[from]
  const maiarAddress = Dapp.useContext().address
  console.log(maiarAddress, "maiarAddress");

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

  useEffect(() => {
  console.log(maiarAddress, "maiarAddress");
    console.log(from, "from");
    // debugger
    if(maiarAddress && from === 'Elrond'){

      setOnMaiarConnect(false)
      dispatch(setElrondWallet(maiarAddress))
      handleClose()
    }
  }, [maiarAddress])

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

  const onWalletConnect = async () => {
    const { rpc, chainId } = chainsConfig[from]
    console.log(rpc);
    console.log(chainId);
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
        console.log("walletconnect", walletconnect);
    } catch (error) {
        console.log(error);
    }
}

  async function connectTronlink() {
      try {
        const accounts = await window.tronWeb.request({ method: "tron_requestAccounts" });
        console.log(accounts)
        if(accounts && accounts.code === 200) {
          const publicAddress = window.tronWeb.defaultAddress.base58
          dispatch(setTronWallet(publicAddress))
          handleClose()
        }
      } catch(err) {
          console.log(err)
      }
  }
  useEffect(() => {
      console.log(chainId, isConnectOpen)
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
            console.log(library)
  }

  const isELROND = chainsConfig[from] ? chainsConfig[from].type === ELROND : "";
  const OFF = { opacity: 0.6, pointerEvents: "none" };
  return (
    <>
      <Modal
        animation={false}
        show={isConnectOpen}
        onHide={handleClose}
        className={`connectBridge ${switchNetwork ? 'warningModal': ''}`}
      >
        { onMaiarConnect ?
        <div className="maiarModal">
          <Dapp.Pages.WalletConnect
          callbackRoute="/"
          logoutRoute="/"
          title="Maiar Login"
          lead="Scan the QR code using Maiar"
          />
          <div onClick={() => setOnMaiarConnect(false)}>Back</div>
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
              <li 
              style={{ opacity: 0.6, pointerEvents: "none" }}
              // onClick={() => onWalletConnect()}
              >
                <Link to="#">
                  {" "}
                  <Image src={WalletConnect} /> WalletConnect{" "}
                </Link>
              </li>
              <li onClick={() => setOnMaiarConnect(true)}>
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
