import React, { Fragment, useState } from "react";
import { Image, Modal, Button, Header, Title, Body } from "react-bootstrap";
import selectnft_5 from "../../../assets/img/selectnft/selectnft_5.png";

import Close from "../../../assets/img/icons/closeBl.svg";
import ConnectBridge from "../../../assets/img/icons/ConnectBridge.svg";

import Ledger from "../../../assets/img/icons/lefger.svg";
import MetaMask from "../../../assets/img/icons/MetaMask.svg";
import Trezor from "../../../assets/img/icons/trezor.svg";
import WalletConnect from "../../../assets/img/icons/WalletConnect.svg";
import WalletConnect2 from "../../../assets/img/icons/WalletConnect2.svg";

import Warn from "../../../assets/img/warningsvg.png";
import whiteClose from "../../../assets/img/icon/whiteClose.svg";

import SelectItem from "../../../UIElemnts/SelectItem";
import { Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setNFTs,
  toggleDisconnect,
} from "../../../store/reducers/generalSlice";
import { useWeb3React } from "@web3-react/core";

const TransferNFTModalSelect = (props) => {
  const { value, options, onChange, disabled, placeholder } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const chooseValue = (e) => {
    // console.log(e);
    onChange(e);
    handleClose();
  };

  const selectChoose = options ? options.find(n => n.key === value) : ""

  return (
    <Fragment>
      {value ? (
              <div className={disabled ? "modalSelectButtonChoose modalSelectButtonChooseDisable " : "modalSelectButtonChoose"}  onClick={handleShow}>
                <img className="modalSelectButtonChooseImg" src={selectChoose.image.src} alt={selectChoose.key}/>
              <div className="modalSelectButtonPlaceHolder">{value}</div>
            </div>
      ) : (
        <div className={disabled ? " modalSelectButton modalSelectButtonChooseDisable" : "modalSelectButton"} onClick={handleShow}>
          <div className="modalSelectButtonPlaceHolder">{placeholder}</div>
        </div>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={true}
        dialogClassName="modalSelectPopupSize"
      >
        <Modal.Body>
          <div className="closModal" >Select Chain <span className="closeModal" onClick={handleClose}><Image src={whiteClose} /></span></div>
          <div className="seleChainOption">
            {options
            ? options.map((n) => {
                const { image, text, key, value, coming } = n;
                return (
                  <div
                    className={`modalSelectOptions ${coming ? 'comingUpChain' : ''}`}
                    onClick={() => chooseValue(value)}
                  >
                    <img
                      src={image.src}
                      alt={key}
                      className="modalSelectOptionsImage"
                    />
                    <div className="modalSelectOptionsText">{text} <span className="comingSoon">{coming ? 'Coming soon' : ''}</span></div>
                  </div>
                );
              })
            : ""}
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
export default TransferNFTModalSelect;
