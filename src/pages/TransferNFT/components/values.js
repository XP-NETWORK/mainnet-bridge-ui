import xpNetIco from "../../../assets/images/XpNet.svg";
import enrollIco from "../../../assets/images/enroll.svg";
import userAvatar from "../../../assets/images/userAvatar.svg";
import binance from "../../../assets/images/binance.svg";
import ftsStoreimg from "../../../assets/img/ftsStoreimg.svg";
import etherium from "../../../assets/images/Etherium.svg";
import fing from "../../../assets/img/fing.png";
import heco from "../../../assets/images/HECO.svg";
import leftArrow from "../../../assets/images/leftArrow.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
export const EVM = "EVM";
export const ELROND = "Elrond";
export const chains = [
  {
    key: ELROND,
    text: ELROND,
    value: ELROND,
    image: { avatar: true, src: enrollIco },
  },
  {
    key: "Ethereum",
    text: "Ethereum",
    value: "Ethereum",
    image: { avatar: true, src: etherium },
  },
  {
    key: "Heco",
    text: "Heco",
    value: "Heco",
    image: { avatar: true, src: heco },
  },
  {
    key: "BSC",
    text: "BSC",
    value: "BSC",
    image: { avatar: true, src: binance },
  },
  {
    key: "Avalanche",
    text: "Avalanche",
    value: "Avalanche",
    image: { avatar: true, src: binance },
  },
];

export const chainsConfig = {
  Heco: {
    type: EVM,
  },
  Ethereum: {
    type: EVM,
    chainId: 3,
    // 1
  },
  BSC: {
    type: EVM,
  },
  Elrond: {
    type: ELROND,
  },
  Avalanche: {
    type: EVM,
    chainId: 43114,
  },
};
