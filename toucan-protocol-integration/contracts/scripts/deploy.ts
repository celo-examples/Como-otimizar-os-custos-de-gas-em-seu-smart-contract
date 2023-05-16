import { ethers } from "hardhat";

async function main() {
  // addresses taken from https://github.com/ToucanProtocol/toucan-sdk/blob/main/src/utils/addresses.ts
  const OFFSET_HELPER = "0xAcf9FD890F06e6F200339193a64c0952a164Cb9d";
  const POOL_TOKEN = "0x4c5f90C50Ca9F849bb75D93a393A4e1B6E68Accb";

  const WallFactory = await ethers.getContractFactory("Wall");
  const wall = await WallFactory.deploy(OFFSET_HELPER, POOL_TOKEN);

  await wall.deployed();

  console.log(`Wall deployed to ${wall.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
