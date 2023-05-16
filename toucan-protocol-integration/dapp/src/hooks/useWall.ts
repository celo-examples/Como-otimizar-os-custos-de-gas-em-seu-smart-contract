import { useMemo } from "react";
import { ethers } from "ethers";
import wall from "../abis/wall.json";

export const useWall = () => {
  const contract = useMemo(() => {
    return new ethers.Contract(
      "0xad55f12ee2f433aa47b2515486cfbd4f1c8afdf2",
      wall.abi,
    );
  }, []);

  return contract;
};
