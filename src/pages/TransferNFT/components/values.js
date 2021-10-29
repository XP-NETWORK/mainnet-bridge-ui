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
import { Chain } from "xp.network/dist/consts";
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
        chainData: ChainData.Heco,
        Chain: Chain.HECO,
    },
    Ethereum: {
        type: EVM,
        chainId: 3,
        token: 'ETH',
        rpc: 'https://delicate-proud-rain.ropsten.quiknode.pro/6a57d9cf10aa9d5af8a2c54151763e21d29136ac/',
        img: etherium,
        chainData: ChainData.Ethereum,
        Chain: Chain.ROPSTEN,
        // 1
    },
    BSC: {
        type: EVM,
        token: 'BNB',
        img: binance,
        chainId: 56,
        chainData: ChainData.BSC,
        Chain: Chain.BSC,
    }, 
    Polygon: {
        type: EVM,
        token: 'MATIC',
        chainId: 80001,
        // 137
        rpc: 'https://quiet-thrumming-wind.matic-testnet.quiknode.pro/b068443f6df35f4e8c2c8aa8bc53fb9bbf96068f/',
        Chain: Chain.POLYGON,
        img: polygon,
        chainData: ChainData.Polygon
    },
    Fantom: {
        type: EVM,
        token: 'FTM',
        img: fantom,
        chainId: 250,
        Chain: Chain.FANTOM,
        chainData: ChainData.Fantom
    },
    Elrond: {
        type: ELROND,
        token: 'EGLD',
        img: enrollIco,
        chainData: ChainData.Elrond,
        Chain: Chain.ELROND

    },
    Avalanche: {
        type: EVM,
        token: 'AVAX',
        img: avalanche,
        chainId: 43114,
        chainData: ChainData.Avalanche,
        Chain: Chain.AVALANCHE

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


export function isBase64(str) {
    if (str ==='' || str.trim() ===''){ return false; }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}