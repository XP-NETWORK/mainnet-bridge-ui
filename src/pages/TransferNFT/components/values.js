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
    Tron: {
        type: 'TRON',
        chainId: 0x9,
        token: 'TRX', 
        rpc: 'https://api.shasta.trongrid.io/',
        img: tron,
        chainData: ChainData.Tron,
        Chain: Chain.TRON
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
        rpc: 'https://wandering-shy-leaf.bsc.quiknode.pro/8fb0366ce43528907ebf07a02b1f5a1f7df0f1b7/',
        chainData: ChainData.BSC,
        Chain: Chain.BSC,
    }, 
    Polygon: {
        type: EVM,
        token: 'MATIC',
        // 137
        //80001
        chainId: 137,
        rpc: 'https://red-black-water.matic.quiknode.pro/a1bec0e749c6fed57405002677902b7046c59689/',
        // chainId: 80001,
        // rpc: 'https://quiet-thrumming-wind.matic-testnet.quiknode.pro/b068443f6df35f4e8c2c8aa8bc53fb9bbf96068f/',
        Chain: Chain.POLYGON,
        img: polygon,
        chainData: ChainData.Polygon
    },
    Fantom: {
        type: EVM,
        token: 'FTM',
        img: fantom,
        chainId: 250,
        rpc: 'https://summer-dark-sea.fantom.quiknode.pro/96ff3e9e727ddccec57f93e68ad321c6e02e88a0/',
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
export const coins = [
    "eGLD", // 0
    "HT", // 1
    "BNB", // 2
    "ETH", // 3
    "AVAX", // 4
    "MATIC", // 5
    "FTM", // 6
    "TRX", // 7
    "CELO", // 8
    "ONE", // 9
    "ONG", // 10
  ];
export const CHAIN_INFO = {
    Elrond: { nonce: 2, native: "EGLD", decimals: 1e18 },
    HECO: {
      nonce: 3,
      native: coins[1],
      chainId: 256,
      rpcUrl: "https://http-testnet.hecochain.com",
      decimals: 1e18,
      contract: "0x1247a6cB7aA2c90C6B9eF96AE3E7b269139BE06b",
      blockExplorerUrls: "https://testnet.hecoinfo.com/tx",
    },
    BSC: {
      nonce: 4,
      native: coins[2],
      chainId: 97,
      rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
      decimals: 1e18,
      contract: "0x12889E870A48Be2A04564e74f66fC91D439Da03e",
      blockExplorerUrls: "https://testnet.bscscan.com/tx",
    },
    Ethereum: {
      nonce: 5,
      native: coins[3],
      chainId: 3,
      rpcUrl: "https://ropsten.infura.io/v3/182b3d3fb2d14d5fbe7421348624d1ce",
      decimals: 1e18,
      contract: "0x2C742F65E6FEcDbb4ceE3D35473e39012aEDf3DD",
      blockExplorerUrls: "https://ropsten.etherscan.io/tx",
    },
    Avalanche: {
      nonce: 6,
      native: coins[4],
      chainId: 43113,
      rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
      decimals: 1e18,
      blockExplorerUrls: "https://cchain.explorer.avax-test.network/tx",
      contract: "0xAcFB2E7d6e6272f192D0D573A9bD1CC9d534dE1c",
    },
    Polygon: {
      nonce: 0x7,
      native: coins[5],
      chainId: 137,
      decimals: 1e18,
      rpcUrl: "https://matic-testnet-archive-rpc.bwarelabs.com",
      contract: "0x9E93256Df2a4fE757f8AEB533D3943E56ba8CF94",
      blockExplorerUrls: "https://mumbai.polygonscan.com/tx",
    },
    Fantom: {
      native: coins[6],
      nonce: 0x8,
      rpcUrl: "https://rpc.testnet.fantom.network/",
      decimals: 1e18,
      chainId: 250,
      contract: "0xbc53f71E12007b93Ed2868E5f6CAE1D2ceB7287C",
      blockExplorerUrls: "https://explorer.testnet.fantom.network/transactions",
    },
    Tron: {
      native: coins[7],
      nonce: 0x9,
      rpcUrl: "https://api.shasta.trongrid.io/",
      decimals: 1e6,
      contract: "4179ff0b4e9e3f67806ff17e1d708a9490ef121e29",
      blockExplorerUrls: "https://shasta.tronscan.org/#/transaction",
    },
    Celo: {
      native: coins[8],
      nonce: 0xb,
      decimals: 1e18,
      rpcUrl: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      blockExplorerUrls: "https://alfajores-blockscout.celo-testnet.org/tx",
      contract: "0xE595D1CD77619d891A338dD09Fd64A57704a5375",
    },
    Harmony: {
      native: coins[9],
      nonce: 0xc,
      decimals: 1e18,
      rpcUrl: "https://api.s0.b.hmny.io",
      chainId: 1666700000,
      blockExplorerUrls: "https://explorer.pops.one/tx",
      contract: "0x22ddFB8954c9D75598385c6ad82cDeb124a78Bb3",
    },
    Ont: {
      native: coins[10],
      nonce: 0xd,
      decimals: 1e18,
      rpcUrl: "https://testing-bridge.xp.network/ontio",
      chainId: 5851,
      blockExplorerUrls: "https://explorer.ont.io/testnet/tx",
      contract: "0xdceB7a6b2d2cC149aA74E049231c94D072eDF3E8",
    },
  };
  