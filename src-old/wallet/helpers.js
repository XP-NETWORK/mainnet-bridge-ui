import {ethers} from 'ethers'
import { chainsConfig, EVM } from '../pages/TransferNFT/components/values'
import store from '../store/store'
import { createChainFactory } from "./connectors";
import { ChainFactory } from "xp.network";
import { ChainData } from './config'
import { ExtensionProvider } from '@elrondnetwork/erdjs/out';
export const moralisParams = {
    exchangeRateUri: "https://testing-bridge.xp.network/exchange",
    moralisServer: "https://bwyunctd0c2y.usemoralis.com:2053/server",
    moralisAppId: "WvKR3tpq5MxUW5i747fgokkiDW0iJ58tsoVua0pZ"
}
const axios = require('axios')
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
    return ChainFactory(
        moralisParams,
        {

        ...f, ...t
    });
}

export const getFullFactory = async () => {
    const chains = Object.keys(ChainData)
    const params = chains.map(n => getFactoryParams(n)).filter(n => n)
    let o  = {}
    params.map(n => { 
        if(n) {
            let keys = Object.keys(n)[0]
            o = {...o, [keys]: n} 

        }
    })
    console.log(o)
    return ChainFactory(moralisParams, o)
}

export const getFactoryParams = (chain) => {
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
    else if(uri) return uri.replace('http://', 'https://')
    return uri
}

export const preloadItem = (item, type, setLoaded) => {
    if(type === 'video') {
        const vid = document.createElement('video')
        vid.src = item
        vid.style.opacity = '0'
        vid.style.position = 'absolute'
        vid.style.height = '0px'
        vid.style.width = '0px'
        document.body.appendChild(vid)
        vid.play()
        vid.onloadeddata = function () {
            setLoaded(true)
            vid.remove()
        }
    } else {
        var img=new Image();
        img.src=item;
        img.onload= function() {
            setLoaded(true)
        }
      
    }
}

export const parseNFTS = async (nfts) => {
    const { from, to } = store.getState().general
    const factory = await getRPCFactory()
    console.log(factory)
    const fromChain = chainsConfig[from]
    const toChain = chainsConfig[to]
    const inner = await factory.inner(fromChain.Chain);
    const toChainInner = await factory.inner(toChain.Chain)
    const result = await Promise.all(nfts.map(async n => {
        return await new Promise(async resolve => {
            try {
                console.log(inner, n)
                const p = await factory.nftUri(inner, n)
                const res = await axios.get(setupURI(p.uri))
                if(res && res.data) {
                    if(res.data.animation_url) preloadItem(res.data.animation_url, 'video', () => {})
                    else preloadItem(res.data.image, 'image', () => {})
                    resolve({...res.data, ...n})
                } else resolve(undefined)
            } catch(err) {
                resolve(undefined)
            }

        })

    }))
    return result.filter(n => n)
}