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
      standard: TokenStandard.CwHypCollateral,
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

    // IXO ixo to base
    // {
    //   chainName: 'ixo',
    //   standard: TokenStandard.CwHypCollateral,
    //   decimals: 6,
    //   symbol: 'IXO',
    //   name: 'Ixo',
    //   logoURI: '/logos/ixo_icon.svg',
    //   addressOrDenom: 'ixo1ktamcsma2yyde49wuh7sv6jhw873f8melddgajnns48w7g8hs3pqdcs4uz',
    //   collateralAddressOrDenom: 'uixo',
    //   connections: [{ token: 'ethereum|base|0x00536Dc7FFa96Eec458b353d0719949D4ACD23f3' }],
    // },
    // // IXO on base from ixo
    // {
    //   chainName: 'base',
    //   standard: TokenStandard.EvmHypSynthetic,
    //   decimals: 6,
    //   symbol: 'IXO',
    //   name: 'Hyperlane Bridged IXO',
    //   logoURI: '/logos/ixo_icon.svg',
    //   addressOrDenom: '0x00536Dc7FFa96Eec458b353d0719949D4ACD23f3',
    //   connections: [
    //     {
    //       token: 'cosmos|ixo|ixo1ktamcsma2yyde49wuh7sv6jhw873f8melddgajnns48w7g8hs3pqdcs4uz',
    //     },
    //   ],
    // },
  ],
  options: {
    interchainFeeConstants: [
      {
        origin: 'pandora',
        destination: 'basesepolia',
        amount: 27000,
        addressOrDenom: 'uixo',
      },
      {
        origin: 'ixo',
        destination: 'base',
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
      {
        origin: 'ixo',
        destination: 'base',
        amount: 27000,
        addressOrDenom: 'uixo',
      },
    ],
  },
};
