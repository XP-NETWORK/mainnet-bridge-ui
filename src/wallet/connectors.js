import { InjectedConnector } from "@web3-react/injected-connector";
import {ChainFactory} from "xp.network/dist"

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 43114],
});

/**
 * Creates a chain factory from provided params.
 * @param chainParams: {@link ChainParams} - from ChainData(wallet/config.js)
 *
 * @returns a {@link ChainFactory}
 */
export const createChainFactory = (params) => {
  return ChainFactory(params);
};

/**
 * Transfers an NFT.
 * @param fromInnerChain: {@link CrossChainHelper}
 * @param toInnerChain: {@link CrossChainHelper}
 * @param nft: from the nft-list-db
 * @param sender: address/wallet
 * @param receiver: string - receiver address
 * @param factory from {@link createChainFactory}
 * @returns a receipt.
 */
export const transferNft = async (
  fromInnerChain,
  toInnerChain,
  nft,
  sender,
  receiver,
  factory
) => {
  return await factory.transfer(
    toInnerChain,
    fromInnerChain,
    nft,
    sender,
    receiver
  );
};
