import { Chain } from "wagmi"

export const alfajores: Chain = {
  id: 44787,
  name: "Celo (Alfajores Testnet)",
  network: "alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "Celo",
    symbol: "CELO",
  },
  rpcUrls: {
    default: {http: ["https://alfajores-forno.celo-testnet.org/"]},
  },
  blockExplorers: {
    default: { name: "CeloScan", url: "https://alfajores.celoscan.io/" },
  },
  testnet: true,
};
