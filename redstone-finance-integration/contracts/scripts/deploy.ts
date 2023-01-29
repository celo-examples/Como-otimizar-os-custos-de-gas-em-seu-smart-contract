import { ethers } from "hardhat";

async function main() {
  const CeloOracleFactory = await ethers.getContractFactory("CeloOracle");
  const CeloOracle = await CeloOracleFactory.deploy();

  await CeloOracle.deployed();

  console.log(`CeloOracle deployed to ${CeloOracle.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
