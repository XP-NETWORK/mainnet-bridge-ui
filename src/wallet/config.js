// eslint-disable-next-line no-unused-vars

export const ChainData = {
  Elrond: {
    node_uri: "https://devnet-api.elrond.com",
    minter_address: "erd1qqqqqqqqqqqqqpgq3cpmdjk5mwnvqqe7tswcwhdufsddjd4vk4as8qtp05",
    esdt_swap_address: "erd1qqqqqqqqqqqqqpgqsu5cn3h380l7cem86zfs6k904wnsa9hak4as942duy",
    esdt: "XPNET-acb2d0",
    esdt_nft: "XPNFT-1a124f",
    esdt_swap: "WEGLD-fdf787",
    validators: [
      'erd1akrlykhmjl8ykhfukhykzdvcnyay5d0kvdazc82wwt7cvn83arzsgg7w9c',
      'erd1dt2mttgf2xpdy9jlxlrd0fcr3nf4sly2tpmam0djq7jj65axvkyqv6hu20',
      'erd1hd3afqqhunypqdz292qledsxwtjlnf9t60mftf4xq5tuyutnqntqg5dng4',
      'erd14qgeqvr2lfnv7m3nzrmpzdzr5tecns50s82qndk2s84qhw3fg6vsfcaffa',
      'erd16gztcqtjzr20ytrwm2wefylydfxhgv7a96kwppa5z3840x4rvavqeazy0v',
      'erd19tydrsuwcpcnwku5p90xk3n82gxhmvz54s8fsvz6yhc4ugq67f4qaayrex',
      'erd1575jxqnmt9q495xtmre0gmxpc9gjzrcx9ypw7gls5xg59k0m73ksgp0xfu'
    ],
    nonce: 2,
  },
  Tron: {
    provider: "TronWeb",
    middleware_uri: "string",
    erc1155_addr: "string",
    minter_addr: "string",
    erc721_addr: "string",
    validators: "string[]",
    nonce: "number",
  },
  Avalanche: {
    provider: "JsonRpcProvider",
    minter_addr: "0x5B916EFb0e7bc0d8DdBf2d6A9A7850FdAb1984C4",
    erc1155_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
    erc721_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
    validators: [
      '0xadFF46B0064a490c1258506d91e4325A277B22aE',
      '0xa50d8208B15F5e79A1ceABdB4a3ED1866CEB764c',
      '0xa3F99eF33eDA9E54DbA4c04a6133c0c507bA4352'
    ],
    nonce: 6,
  },
  Polygon: {
    provider: "JsonRpcProvider",
    minter_addr: "0x2f072879411503580B8974A221bf76638C50a82a",
    erc1155_addr: "0xc69ECD37122A9b5FD7e62bC229d478BB83063C9d",
    erc721_addr: "0xc69ECD37122A9b5FD7e62bC229d478BB83063C9d",
    validators: [
      '0xadFF46B0064a490c1258506d91e4325A277B22aE',
      '0xa50d8208B15F5e79A1ceABdB4a3ED1866CEB764c',
      '0xa3F99eF33eDA9E54DbA4c04a6133c0c507bA4352'
    ],
    nonce: 7,
  },
  Fantom: {
    provider: "JsonRpcProvider",
    minter_addr: "0x5B916EFb0e7bc0d8DdBf2d6A9A7850FdAb1984C4",
    erc1155_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
    erc721_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
    validators:[
      '0xadFF46B0064a490c1258506d91e4325A277B22aE',
      '0xa50d8208B15F5e79A1ceABdB4a3ED1866CEB764c',
      '0xa3F99eF33eDA9E54DbA4c04a6133c0c507bA4352'
    ],
    nonce: 0x8,
  },
  BSC: {
    provider: "JsonRpcProvider",
    minter_addr: "0xF8679A16858cB7d21b3aF6b2AA1d6818876D3741",
    erc1155_addr: "0xa1B8947Ff4C1fD992561F629cfE67aEb90DfcBd5",
    erc721_addr: "0xa1B8947Ff4C1fD992561F629cfE67aEb90DfcBd5",
    validators:[
      '0xadFF46B0064a490c1258506d91e4325A277B22aE',
      '0xa50d8208B15F5e79A1ceABdB4a3ED1866CEB764c',
      '0xa3F99eF33eDA9E54DbA4c04a6133c0c507bA4352'
    ],
    nonce: 4,
  },
  Celo: {
    provider: "JsonRpcProvider",
    minter_addr: "string",
    erc1155_addr: "string",
    erc721_addr: "string",
    validators: "string[]",
    nonce: "number",
  },
  Harmony: {
    provider: "JsonRpcProvider",
    minter_addr: "string",
    erc1155_addr: "string",
    erc721_addr: "string",
    validators: "string[]",
    nonce: "number",
  },
  Ethereum: {
    provider: "JsonRpcProvider",
    minter_addr: "0x8C03d5A667A03Ef2A56E78609E510B6cB33147AD",
    erc1155_addr: "0xe909b9b7667121d774133bcd4C1b6f3693239bc4",
    erc721_addr: "0xe909b9b7667121d774133bcd4C1b6f3693239bc4",
    validators: [
      '0xadFF46B0064a490c1258506d91e4325A277B22aE',
      '0xa50d8208B15F5e79A1ceABdB4a3ED1866CEB764c',
      '0xa3F99eF33eDA9E54DbA4c04a6133c0c507bA4352'
    ],
    nonce: 5,
  },
};


/////////////testing
// export const ChainData = {
//   Elrond: {
//     node_uri: "https://devnet-api.elrond.com",
//     minter_address: "erd1qqqqqqqqqqqqqpgq3cpmdjk5mwnvqqe7tswcwhdufsddjd4vk4as8qtp05",
//     esdt_swap_address: "erd1qqqqqqqqqqqqqpgqsu5cn3h380l7cem86zfs6k904wnsa9hak4as942duy",
//     esdt: "XPNET-acb2d0",
//     esdt_nft: "XPNFT-1a124f",
//     esdt_swap: "WEGLD-fdf787",
//     validators: [
//       'erd1akrlykhmjl8ykhfukhykzdvcnyay5d0kvdazc82wwt7cvn83arzsgg7w9c',
//       'erd1dt2mttgf2xpdy9jlxlrd0fcr3nf4sly2tpmam0djq7jj65axvkyqv6hu20',
//       'erd1hd3afqqhunypqdz292qledsxwtjlnf9t60mftf4xq5tuyutnqntqg5dng4',
//       'erd14qgeqvr2lfnv7m3nzrmpzdzr5tecns50s82qndk2s84qhw3fg6vsfcaffa',
//       'erd16gztcqtjzr20ytrwm2wefylydfxhgv7a96kwppa5z3840x4rvavqeazy0v',
//       'erd19tydrsuwcpcnwku5p90xk3n82gxhmvz54s8fsvz6yhc4ugq67f4qaayrex',
//       'erd1575jxqnmt9q495xtmre0gmxpc9gjzrcx9ypw7gls5xg59k0m73ksgp0xfu'
//     ],
//     nonce: 2,
//   },
//   Tron: {
//     provider: "TronWeb",
//     middleware_uri: "string",
//     erc1155_addr: "string",
//     minter_addr: "string",
//     erc721_addr: "string",
//     validators: "string[]",
//     nonce: "number",
//   },
//   Avalanche: {
//     provider: "JsonRpcProvider",
//     minter_addr: "string",
//     erc1155_addr: "string",
//     erc721_addr: "string",
//     validators: "string[]",
//     nonce: "number",
//   },
//   Polygon: {
//     provider: "JsonRpcProvider",
//     minter_addr: "0xc6148C73f4beCbd7aE39ba23a9CeBa9518fF96BE",
//     erc1155_addr: "0xAE25CF0d6D8d7c420768Ed179Ef01cf80c3708B1",
//     erc721_addr: "0xAE25CF0d6D8d7c420768Ed179Ef01cf80c3708B1",
//     validators: [
//       '0x060093d5559dcF01aeD66042Ba33bf243ee422b6', 
//       '0xd067607e5D22BD8Fb806e07090FaE9A048a8Fc0d', 
//       '0xB331E65875EeF5979b83DdF8aFB05bC5E86bB78D',
//       '0xB6C11DC232ab25BD61b3efc7a95C971ec002127C',
//       '0x848AF71847407d27fD8DD3A099F43F59B617C26a',
//       '0x54E68543464e0253C5A9e83471fc00aa9866d7bE',
//       '0x4Cfc8800606EDBd970298bB040Fc8D859c806702',
//     ],
//     nonce: 7,
//   },
//   Fantom: {
//     provider: "JsonRpcProvider",
//     minter_addr: "string",
//     erc1155_addr: "string",
//     erc721_addr: "string",
//     validators: "string[]",
//     nonce: "number",
//   },
//   BSC: {
//     provider: "JsonRpcProvider",
//     minter_addr: "string",
//     erc1155_addr: "string",
//     erc721_addr: "string",
//     validators: "string[]",
//     nonce: "number",
//   },
//   Celo: {
//     provider: "JsonRpcProvider",
//     minter_addr: "string",
//     erc1155_addr: "string",
//     erc721_addr: "string",
//     validators: "string[]",
//     nonce: "number",
//   },
//   Harmony: {
//     provider: "JsonRpcProvider",
//     minter_addr: "string",
//     erc1155_addr: "string",
//     erc721_addr: "string",
//     validators: "string[]",
//     nonce: "number",
//   },
//   Ethereum: {
//     provider: "JsonRpcProvider",
//     minter_addr: "0x8C03d5A667A03Ef2A56E78609E510B6cB33147AD",
//     erc1155_addr: "0xe909b9b7667121d774133bcd4C1b6f3693239bc4",
//     erc721_addr: "0xe909b9b7667121d774133bcd4C1b6f3693239bc4",
//     validators: [
//       '0x060093d5559dcF01aeD66042Ba33bf243ee422b6', 
//       '0xd067607e5D22BD8Fb806e07090FaE9A048a8Fc0d', 
//       '0xB331E65875EeF5979b83DdF8aFB05bC5E86bB78D',
//       '0xB6C11DC232ab25BD61b3efc7a95C971ec002127C',
//       '0x848AF71847407d27fD8DD3A099F43F59B617C26a',
//       '0x54E68543464e0253C5A9e83471fc00aa9866d7bE',
//       '0x4Cfc8800606EDBd970298bB040Fc8D859c806702',
//     ],
//     nonce: 5,
//   },
// };