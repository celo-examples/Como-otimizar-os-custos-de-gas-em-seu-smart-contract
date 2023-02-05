import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CeloOracle from "./assets/CeloOracle.json";
import { useAccount, useProvider, useSigner } from "wagmi";
import { ethers } from "ethers";
import { WrapperBuilder } from "@redstone-finance/evm-connector";

function App() {
  const [price, setPrice] = useState(0);
  const account = useAccount();
  const signer = useSigner();
  const provider = useProvider();

  const contract = useMemo(() => {
    if (signer.data) {
      return new ethers.Contract(
        "0xDA1ac58Ed5b94Dc3850f92c2639DA226D4F6b9cE",
        CeloOracle.abi,
        signer.data
      );
    } else {
      return new ethers.Contract(
        "0xDA1ac58Ed5b94Dc3850f92c2639DA226D4F6b9cE",
        CeloOracle.abi,
        provider
      );
    }
  }, [signer, provider]);

  const wrappedContract = WrapperBuilder.wrap(contract).usingDataService(
    {
      dataServiceId: "redstone-rapid-demo",
      uniqueSignersCount: 1,
      dataFeeds: ["CELO"],
    },
    ["https://d33trozg86ya9x.cloudfront.net"]
  );

  const updateCeloPrice = async () => {
    try {
      await wrappedContract.updateCeloPrice();
    } catch (error) {
      console.error(error);
    }
  };

  const loadCeloPrice = async () => {
    try {
      const celoPrice = await contract.celoPrice();
      const tprice = celoPrice.toNumber() / 1e8;
      console.log(tprice);

      setPrice(tprice);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>RedStoneFinance Example</h1>
      <ConnectButton />
      {account.address ? (
        <>
          <p>conectado</p>
          <button onClick={loadCeloPrice}>Load Celo Price</button>

          <button onClick={updateCeloPrice}>Update Celo Price</button>

          <p>Price: {price}</p>
        </>
      ) : (
        <p>desconectado</p>
      )}
    </div>
  );
}

export default App;
