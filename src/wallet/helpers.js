import {ethers} from 'ethers'
import { chainsConfig, EVM } from '../pages/TransferNFT/components/values'
import store from '../store/store'
import { createChainFactory } from "./connectors";
import { ChainFactory } from "xp.network";
import { ChainData } from './config'
import { ExtensionProvider } from '@elrondnetwork/erdjs/out';
export const getFromParams = async () => {
    const {from} = store.getState().general
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    if(from === 'Ethereum') {
        return {
            ropstenParams: {
                ...ChainData.Ethereum,
                provider
              }
        }
    } else if(from === 'Polygon') {
        return {
            
            polygonParams: {
                ...ChainData.Polygon,
                provider
              }
        }
    } else if(from === 'BSC') {
        return {
            bscParams: {
                ...ChainData.BSC,
                provider
              }
        }
    }  
    else if(from === 'Fantom') {
        return {
            fantomParams: {
                ...ChainData.Fantom,
                provider
              }
        }
    } else if(from === 'Avalanche') {
        return {
            avalancheParams: {
                ...ChainData.Avalanche,
                provider
              }
        }
    } else if(from === 'Elrond') {
        return {
            elrondParams: {
                ...ChainData.Elrond,
              }
        }
    }
}

export const getRPCFactory = async (chain) => {
    const {from, to} = store.getState().general
    const f = await getFactoryParams(from)
    const t = await getFactoryParams(to)
    console.log(f, t)
    return ChainFactory({ ...f, ...t});
}

export const getFactoryParams = async (chain) => {
    if(chain === 'Ethereum') {
        return {
            ropstenParams: {
                ...ChainData.Ethereum,
                provider: new ethers.providers.JsonRpcProvider(chainsConfig.Ethereum.rpc)
              }
        }
    } else if(chain === 'Polygon') {
        return {
            polygonParams: {
                ...ChainData.Polygon,
                provider: new ethers.providers.JsonRpcProvider(chainsConfig.Polygon.rpc)
              }
        }
    } else if(chain === 'Fantom') {
        return {
            fantomParams: {
                ...ChainData.Fantom,
                provider: new ethers.providers.JsonRpcProvider(chainsConfig.Fantom.rpc)
              }
        }
    } else if(chain === 'Avalanche') {
        return {
            avalancheParams: {
                ...ChainData.Avalanche,
                provider: new ethers.providers.JsonRpcProvider(chainsConfig.Avalanche.rpc)
              }
        }
    }
    else if(chain === 'BSC') {
        return {
            bscParams: {
                ...ChainData.BSC,
                provider: new ethers.providers.JsonRpcProvider(chainsConfig.BSC.rpc)
              }
        }
    } 
    else if(chain === 'Elrond') {
        return {
            elrondParams: {
                ...ChainData.Elrond,
            }
        }
    }
}

export const isEVM = () => {
    const {from} = store.getState().general
    return chainsConfig[from] ? chainsConfig[from].type === EVM : "";
}

export const isTronLink = () => {
    const {from} = store.getState().general
    return from === 'Tron'
}

export const getChainId = () => {
    const {from} = store.getState().general
    return chainsConfig[from] ? chainsConfig[from].chainId : ''
}

export const setupURI = (uri) => {
    if(uri && uri.includes('ipfs://')) return 'https://ipfs.io/' + uri.replace(':/', '')
    return uri
}