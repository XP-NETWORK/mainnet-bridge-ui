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
        key: 'Ethereum',
        text: 'Ethereum',
        value: 'Ethereum',
        image: { avatar: true, src: etherium },
    },
    {
        key: 'Fantom',
        text: 'Fantom',
        value: 'Fantom',
        image: { avatar: true, src: etherium },
    },
    {
        key: 'Tron',
        text: 'Tron',
        value: 'Tron',
        image: { avatar: true, src: etherium },
    },
    {
        key: 'Polygon',
        text: 'Polygon',
        value: 'Polygon',
        image: { avatar: true, src: etherium },
    },
    {
        key: 'Heco',
        text: 'Heco',
        value: 'Heco',
        image: { avatar: true, src: heco },
    },
    {
        key: 'BSC',
        text: 'BSC',
        value: 'BSC',
        image: { avatar: true, src: binance },
    },
    {
        key: 'Avalanche',
        text: 'Avalanche',
        value: 'Avalanche',
        image: { avatar: true, src: binance },
    }
]

export const chainsConfig = {
    Heco: {
        type: EVM,
        img: heco
    },
    Ethereum: {
        type: EVM,
        chainId: 3,
        img: etherium
        // 1
    },
    BSC: {
        type: EVM,
        img: binance,
        chainId: 56
    }, 
    Polygon: {
        type: EVM,
        chainId: 80001,
        // 137
        rpc: 'https://rpc-mumbai.maticvigil.com/',
        img: etherium,
    },
    Fantom: {
        type: EVM,
        img: etherium,
        chainId: 250
    },
    Elrond: {
        type: ELROND,
        img: enrollIco,

    },
    Avalanche: {
        type: EVM,
        img: etherium,
        chainId: 43114
    }

}

export const internalNonce = {
    3: {
        title: 'Heco',
        type: EVM,
        img: heco
    },
    5: {
        title: 'Ethereum',
        type: EVM,
        chainId: 3,
        img: etherium
        // 1
    },
    4: {
        title: 'BSC',
        type: EVM,
        img: binance,
        chainId: 56
    }, 
    7: {
        title: 'Polygon',
        type: EVM,
        chainId: 80001,
        // 137
        rpc: 'https://rpc-mumbai.maticvigil.com/',
        img: etherium,
    },
    8: {
        title: 'Fantom',
        type: EVM,
        img: etherium,
        chainId: 250
    },
    2: {
        title: 'Elrond',
        type: ELROND,
        img: enrollIco,

    },
    6: {
        title: 'Avalanche',
        type: EVM,
        img: etherium,
        chainId: 43114
    }

}
