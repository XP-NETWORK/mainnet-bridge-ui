import {ethers} from 'ethers'
import store from '../store/store'
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
    }
}