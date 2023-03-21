import { Chain } from "@rainbow-me/rainbowkit";

const CUSTOM_CHAINS: Chain[] = [
  {
    id: 44787,
    name: "Alfajores",
    nativeCurrency: {
      decimals: 18,
      name: "Celo",
      symbol: "CELO",
    },
    network: "Celo alfajores",
    rpcUrls: {
      default: {
        http: [
          "https://g.w.lavanet.xyz:443/gateway/alfajores/rpc-http/d7bdf3eb544ce0e5e184e90026437f26",
        ],
      },
      public: {
        http: [
          "https://g.w.lavanet.xyz:443/gateway/alfajores/rpc-http/d7bdf3eb544ce0e5e184e90026437f26",
        ],
      },
    },
    testnet: true,
  },
];

export default CUSTOM_CHAINS;
