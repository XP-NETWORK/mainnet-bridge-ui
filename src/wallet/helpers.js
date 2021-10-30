import {ethers} from 'ethers'
import { chainsConfig, EVM } from '../pages/TransferNFT/components/values'
import store from '../store/store'
import { createChainFactory } from "./connectors";
import { ChainFactory } from "xp.network";
import { ChainData } from './config'
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
    } else if(from === 'Fantom') {
        return {
            fantomParams: {
                ...ChainData.Fantom,
                provider
              }
        }
    }
}

export const getRPCFactory = async (chain) => {
    const {from, to} = store.getState().general
    const f = await getFactoryParams(from)
    const t = await getFactoryParams(to)
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
    } else if(chain === 'Elrond') {
        return {
            elrondParams: {
                ...ChainData.Elrond,
                provider: 'https://devnet-api.elrond.com'
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