import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    //#region IXO
    // IXO pandora8 to basesepolia
    {
      chainName: 'pandora',
      standard: TokenStandard.CwHypCollateral, // CosmosNative?
      decimals: 6,
      symbol: 'IXO',
      name: 'Ixo',
      logoURI: '/logos/ixo_icon.svg',
      addressOrDenom: 'ixo18hkdw62hjuh3pfz0d89hlq9ldlh6ekfvpf9gnun90sfcy0scgm9s66pptc',
      collateralAddressOrDenom: 'uixo',
      connections: [{ token: 'ethereum|basesepolia|0xa2718De82656C11eb467679A5A06e345a08E2836' }],
    },
    // IXO on basepolia from pandora8
    {
      chainName: 'basesepolia',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 6,
      symbol: 'IXO',
      name: 'Hyperlane Bridged IXO Pandora',
      logoURI: '/logos/ixo_icon.svg',
      addressOrDenom: '0xa2718De82656C11eb467679A5A06e345a08E2836',
      connections: [
        {
          token: 'cosmos|pandora|ixo18hkdw62hjuh3pfz0d89hlq9ldlh6ekfvpf9gnun90sfcy0scgm9s66pptc',
        },
      ],
    },
  ],
  options: {
    interchainFeeConstants: [
      {
        origin: 'pandora',
        destination: 'basesepolia',
        amount: 27000,
        addressOrDenom: 'uixo',
      },
    ],
    localFeeConstants: [
      {
        origin: 'pandora',
        destination: 'basesepolia',
        amount: 27000,
        addressOrDenom: 'uixo',
      },
    ],
  },
};
