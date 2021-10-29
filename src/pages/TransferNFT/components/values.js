import xpNetIco from "../../../assets/images/XpNet.svg";
import enrollIco from "../../../assets/images/enroll.svg";
import userAvatar from "../../../assets/images/userAvatar.svg";
import binance from "../../../assets/images/binance.svg";
import tron from "../../../assets/images/tron.svg";
import avalanche from "../../../assets/images/avalanche.svg";
import polygon from "../../../assets/images/polygon.svg";
import fantom from "../../../assets/images/fantom.svg";
import ftsStoreimg from "../../../assets/img/ftsStoreimg.svg";
import etherium from "../../../assets/images/Etherium.svg";
import fing from "../../../assets/img/fing.png";
import heco from "../../../assets/images/HECO.svg";
import leftArrow from "../../../assets/images/leftArrow.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import { ChainData } from "../../../wallet/config";
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
        image: { avatar: true, src: fantom },
    },
    {
        key: 'Tron',
        text: 'Tron',
        value: 'Tron',
        image: { avatar: true, src: tron },
    },
    {
        key: 'Polygon',
        text: 'Polygon',
        value: 'Polygon',
        image: { avatar: true, src: polygon },
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
        image: { avatar: true, src: avalanche },
    }
]

export const chainsConfig = {
    Heco: {
        type: EVM,
        img: heco,
        chainData: ChainData.Heco
    },
    Ethereum: {
        type: EVM,
        chainId: 3,
        img: etherium,
        chainData: ChainData.Ethereum
        // 1
    },
    BSC: {
        type: EVM,
        img: binance,
        chainId: 56,
        chainData: ChainData.BSC
    }, 
    Polygon: {
        type: EVM,
        chainId: 80001,
        // 137
        rpc: 'https://rpc-mumbai.maticvigil.com/',
        img: polygon,
        chainData: ChainData.Polygon
    },
    Fantom: {
        type: EVM,
        img: fantom,
        chainId: 250,
        chainData: ChainData.Fantom
    },
    Elrond: {
        type: ELROND,
        img: enrollIco,
        chainData: ChainData.Elrond

    },
    Avalanche: {
        type: EVM,
        img: avalanche,
        chainId: 43114,
        chainData: ChainData.Avalanche
    }

}

export const internalNonce = {
    3: {
        title: 'Heco',
       ...chainsConfig.Heco
    },
    5: {
        title: 'Ethereum',
        ...chainsConfig.Ethereum
        // 1
    },
    4: {
        title: 'BSC',
        ...chainsConfig.BSC
    }, 
    7: {
        title: 'Polygon',
        ...chainsConfig.Polygon
    },
    8: {
        title: 'Fantom',
        ...chainsConfig.Fantom
    },
    2: {
        title: 'Elrond',
        ...chainsConfig.Elrond

    },
    6: {
        title: 'Avalanche',
        ...chainsConfig.Avalanche
    }

}
