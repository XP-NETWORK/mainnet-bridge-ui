import React, {Fragment} from 'react';
import Styles from './TransferLiquidity.module.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import CardWrap from "../../UIElemnts/CardWrap";
import SelectItem from "../../UIElemnts/SelectItem";
import xpNetIco from "../../assets/images/XpNet.svg";
import userAvatar from "../../assets/images/userAvatar.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import leftArrow from "../../assets/images/leftArrow.svg";
import enrollIco from "../../assets/images/enroll.svg";
import {Dropdown} from "semantic-ui-react";
import etherium from "../../assets/images/Etherium.svg";
import heco from "../../assets/images/HECO.svg";
import binance from "../../assets/images/binance.svg";
import xpNetLogText from "../../assets/images/xpnetLogText.svg";
const TransferLiquidity = () => {
// Amount Options HTML
// const amountOptionObject = [
//     {
//         netName : "XPNET",
//         amount: "1,322,840,000.00",
//         netValue: "30,909,768,192.56087",
//         netRation: "0.1333",
//     },
//     {
//         netName : "XPNET",
//         amount: "1,322,840,000.00",
//         netValue: "30,909,768,192.56087",
//         netRation: "0.1333",
//     }
// ];
let amountValue = 
<div className={Styles.amountOption}>
   <div className="d-flex align-items-center">
      <strong>XPNET</strong>
      <span className={`${Styles.darkAmount} ml-auto`}>$1,322,840,000.00</span>
   </div>
   <span>30,909,768,192.56087 XPNET</span>
   <span> @0.1333 </span>
</div>
const fromTranBridge = [
{
key: 'XP.network2',
text: 'XP.network2',
value: 'XP.network2',
image: {avatar: true, src: xpNetIco},
},
{
key: 'Elrond',
text: 'Elrond',
value: 'Elrond',
image: {avatar: true, src: enrollIco},
},
{
key: 'Etherium',
text: 'Etherium',
value: 'Etherium',
image: {avatar: true, src: etherium},
},
{
key: 'Heco2',
text: 'Heco2',
value: 'Heco2',
image: {avatar: true, src: heco},
},
{
key: 'Binance',
text: 'Binance',
value: 'Binance',
image: {avatar: true, src: binance},
}
]
const toTranBridge = [
{
key: 'Elrond',
text: 'Elrond',
value: 'Elrond',
image: {avatar: true, src: enrollIco},
},
{
key: 'XP.network',
text: 'XP.network',
value: 'XP.network',
image: {avatar: true, src: xpNetIco},
},
{
key: 'Binance',
text: 'Binance',
value: 'Binance',
image: {avatar: true, src: binance},
},
{
key: 'Etherium2',
text: 'Etherium2',
value: 'Etherium2',
image: {avatar: true, src: etherium},
},
{
key: 'Heco2',
text: 'Heco2',
value: 'Heco2',
image: {avatar: true, src: heco},
}
]
const sourceAccount = [
{
key: 'Alice_Stash',
text: 'Alice_Stash',
value: 'Alice_Stash',
image: {avatar: true, src: userAvatar},
},
{
key: 'Alice',
text: 'Alice',
value: 'Alice',
image: {avatar: true, src: userAvatar},
},
{
key: 'Alice_Stash2',
text: 'Alice_Stash2',
value: 'Alice_Stash2',
image: {avatar: true, src: userAvatar},
},
{
key: 'Alice2',
text: 'Alice2',
value: 'Alice2',
image: {avatar: true, src: userAvatar},
},
]
const targetAccount = [
{
key: 'Alice',
text: 'Alice',
value: 'Alice',
image: {avatar: true, src: userAvatar},
},
{
key: 'Alice_Stash',
text: 'Alice_Stash',
value: 'Alice_Stash',
image: {avatar: true, src: userAvatar},
},
{
key: 'Alice',
text: 'Alice',
value: 'Alice',
image: {avatar: true, src: userAvatar},
},
{
key: 'Alice_Stash',
text: 'Alice_Stash',
value: 'Alice_Stash',
image: {avatar: true, src: userAvatar},
}
]
const amount = [
{
key: 'Alice',
text: amountValue,
value: 'Alice',
image: {avatar: true, src: xpNetIco},
},
{
key: 'Alice_Stash',
text: amountValue,
value: 'Alice_Stash',
image: {avatar: true, src: etherium},
},
{
key: 'Alice2',
text: amountValue,
value: 'Alice2',
image: {avatar: true, src: heco},
},
{
key: 'Alice_Stash2',
text: amountValue,
value: 'Alice_Stash2',
image: {avatar: true, src: xpNetIco},
}
]
return (
<Container>
   <div className="title title--primary">
      <h2>Cross Chain Liquidity Bridge</h2>
   </div>
   <Row>
      <Col md={{span: 10, offset: 1}}>
      <div className={`${Styles.switcherWrap} d-flex align-items-center justify-content-center`}>
         <CardWrap>
            <SelectItem label={"Form"}>
               <Dropdown
                  placeholder={'Select option'}
                  fluid
                  selection
                  options={fromTranBridge}
                  />
            </SelectItem>
            <SelectItem label={"Source Account"}>
               <Dropdown
                  placeholder='Select option'
                  fluid
                  selection
                  options={sourceAccount}
                  />
            </SelectItem>
            <SelectItem label={"Amount"} className={"amountSelectItem"}>
               <Dropdown
                  placeholder='Select option'
                  fluid
                  selection
                  options={amount}
                  />
            </SelectItem>
            <div
            className={`d-flex align-items-center`}
            style={{marginTop: "1rem"}}
            >
            <input
            type="text"
            className={Styles.inputStyle}
            // value={"0.0"}
            // disabled={true}
            maxLength={13}
            placeholder={"0.0"}
            />
      </div>
      </CardWrap>
      <button
      className={`${Styles.switchModeBtn} d-flex flex-column`}
      // onClick={switchHandler}
      >
      <Image src={rightArrow}/>
      <Image src={leftArrow} className={"mt-1"}/>
      </button>
      <CardWrap className={Styles.alignSelf}>
         <SelectItem label={"To"}>
            <Dropdown
               placeholder='Select option'
               fluid
               selection
               options={toTranBridge}
               />
         </SelectItem>
         <SelectItem label={"Target Account"}>
            <Dropdown
               placeholder='Select option'
               fluid
               selection
               options={targetAccount}
               />
         </SelectItem>
         <div style={{marginTop: "1rem"}}>
         <div className={Styles.title}>
            Amount
         </div>
         <div className={`${Styles.amountInput} d-flex align-items-center`}>
            <input
            type="text"
            className={Styles.inputStyle}
            maxLength={13}
            placeholder={"0.0"}
            // value={"0.0"}
            // disabled={true}
            />
            <div className={Styles.amountInputImg}>
               <Image src={xpNetLogText} fluid/>
            </div>
         </div>
         </div>
         <div className={Styles.title} style={{marginTop: "0.6875rem"}}>
         <span>Fee:</span> 0.0%
         </div>
      </CardWrap>
      </div>
      <div className="text-center mt-3 mt-md-4 mb-5">
         <button className="btnBrand btnBrand--primary">
         Send
         </button>
      </div>
      </Col>
   </Row>
</Container>
);
};
export default TransferLiquidity;