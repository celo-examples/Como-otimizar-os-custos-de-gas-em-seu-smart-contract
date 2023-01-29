import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { WrapperBuilder } from "@redstone-finance/evm-connector";

describe("CeloOracle", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployCeloOracleFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const CeloOracleFactory = await ethers.getContractFactory("CeloOracle");
    const CeloOracle = await CeloOracleFactory.deploy();

    const wrapped = WrapperBuilder.wrap(CeloOracle).usingDataService(
      {
        dataServiceId: "redstone-rapid-demo",
        uniqueSignersCount: 1,
        dataFeeds: ["CELO"],
      },
      ["https://d33trozg86ya9x.cloudfront.net"]
    );

    return { CeloOracle: wrapped, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should return oracle price", async function () {
      const { CeloOracle } = await loadFixture(deployCeloOracleFixture);

      const celoPriceBefore = await CeloOracle.celoPrice();

      await CeloOracle.updateCeloPrice();

      const celoPriceAfter = await CeloOracle.celoPrice();

      console.table({
        before: celoPriceBefore.toNumber() / 1e8,
        after: celoPriceAfter.toNumber() / 1e8,
      });

      expect(celoPriceBefore.lt(celoPriceAfter));
    });
  });
});
