import { useEffect, useRef, useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWalletClient,
  useAccount,
} from "wagmi";
import wall from "./abis/wall.json";
import "./App.css";
import { ethers } from "ethers";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";

const address = "0xad55f12ee2f433aa47b2515486cfbd4f1c8afdf2";

function App() {
  const textHtml = useRef<HTMLHeadingElement>(null);
  const [cachedText, setCachedText] = useState("");
  const [currentText, setCurrentText] = useState("Text in the wall");
  const account = useAccount();
  const connect = useConnectModal();

  const { config } = usePrepareContractWrite({
    address,
    abi: wall.abi,
    functionName: "draw",
    

    args: [currentText],

    onError: (err) => {
      console.error(err.message);
      // writeTextToHtml(cachedText);
    },

    // // @ts-ignore
    // value: ethers.utils.parseEther("0.001").toString(),
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const draw = () => {
    if (!account.address && connect.openConnectModal) {
      connect.openConnectModal();
      return false;
    } else {
      // write!();
    }
  };

  const handleBlur = (val: string | null) => {
    if (val != currentText && confirm("Save?")) {
      // request metamask
      // update current value
      writeTextToHtml(val!);
      draw();
    } else {
      // if user cancel the request
      // rollback text to old value
      writeTextToHtml(currentText);
    }
  };

  useEffect(() => {
    // fetch current text from contract
    writeTextToHtml(currentText);
  }, []);

  const writeTextToHtml = (text: string) => {
    textHtml.current!.textContent = text;
    setCachedText(currentText);
    setCurrentText(text);
  };

  return (
    <div className="App">
      <h1
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleBlur(e.target.textContent)}
        ref={textHtml}
      />
    </div>
  );
}

export default App;
