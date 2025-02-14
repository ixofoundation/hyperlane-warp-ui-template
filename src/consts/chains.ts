import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // solanamainnet: {
  //   ...solanamainnet,
  //   // SVM chains require mailbox addresses for the token adapters
  //   mailbox: solanamainnetAddresses.mailbox,
  //   // Including a convenient rpc override because the Solana public RPC does not allow browser requests from localhost
  //   rpcUrls: process.env.NEXT_PUBLIC_SOLANA_RPC_URL
  //     ? [{ http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL }, ...solanamainnet.rpcUrls]
  //     : solanamainnet.rpcUrls,
  // },
  // eclipsemainnet: {
  //   ...eclipsemainnet,
  //   mailbox: eclipsemainnetAddresses.mailbox,
  // },
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
  //   domainId: 123123,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },

  pandora: {
    protocol: ProtocolType.Cosmos,
    name: 'pandora',
    chainId: 'pandora-8',
    domainId: 1769500528,
    displayName: 'Ixo Pandora',
    displayNameShort: 'Pandora',
    slip44: 118,
    isTestnet: true,
    bech32Prefix: 'ixo',
    rpcUrls: [{ http: 'https://rpc.testnet.ixo.earth' }],
    restUrls: [{ http: 'https://testnet.ixo.earth' }],
    grpcUrls: [{ http: 'https://testnet-grpc.ixo.earth' }],
    nativeToken: {
      name: 'IXO',
      denom: 'uixo',
      symbol: 'IXO',
      decimals: 6,
    },
    blockExplorers: [
      {
        name: 'Mintscan',
        url: 'https://explorer.ixo.earth/testnet-ixo',
        // TODO API not supported, using url to meet validation requirements
        apiUrl: 'https://explorer.ixo.earth/testnet-ixo',
        family: ExplorerFamily.Other,
      },
    ],
    logoURI: '/logos/ixo.svg',
    transactionOverrides: {
      gasPrice: 0.1,
    },
  },

  basesepolia: {
    blockExplorers: [
      {
        apiUrl: 'https://api-sepolia.basescan.org/api',
        family: ExplorerFamily.Etherscan,
        name: 'BaseScan',
        url: 'https://sepolia.basescan.org',
      },
    ],
    blocks: {
      confirmations: 1,
      estimateBlockTime: 2,
      reorgPeriod: 1,
    },
    chainId: 84532,
    displayName: 'Base Sepolia',
    domainId: 84532,
    isTestnet: true,
    mailbox: '0x6966b0E55883d49BFB24539356a2f8A673E02039',
    name: 'basesepolia',
    nativeToken: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    protocol: ProtocolType.Ethereum,
    rpcUrls: [
      {
        http: 'https://sepolia.base.org',
      },
      {
        http: 'https://base-sepolia-rpc.publicnode.com',
      },
    ],
    gasCurrencyCoinGeckoId: 'ethereum',
  },
};
