import { InjectedConnector } from '@web3-react/injected-connector'
import { chainsConfig } from '../pages/TransferNFT/components/values'
export const injected = new InjectedConnector({
  supportedChainIds: [
      1,3,56,80001,137,250,43114
  ],
})
