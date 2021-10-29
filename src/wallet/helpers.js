import {ethers} from 'ethers'
import { chainsConfig, EVM } from '../pages/TransferNFT/components/values'
import store from '../store/store'
import { ChainData } from './config'
export const getFromParams = async () => {
    const {from} = store.getState().general
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    console.log(from, 'hellosasda')
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
    }
}

export const isEVM = () => {
    const {from} = store.getState().general
    return chainsConfig[from] ? chainsConfig[from].type === EVM : "";
}

export const getChainId = () => {
    const {from} = store.getState().general
    return chainsConfig[from] ? chainsConfig[from].chainId : ''
}