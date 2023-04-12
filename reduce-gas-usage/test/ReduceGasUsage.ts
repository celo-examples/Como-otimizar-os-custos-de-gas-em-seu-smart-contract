import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "@ethersproject/bignumber";

const compare = (bad: BigNumber, good: BigNumber) => {
  console.log("Bad", bad.toNumber());
  console.log("Good", good.toNumber());

  expect(bad).to.greaterThan(good);
};

describe("Reduce Gas Usage", function () {
  it("AutoIncrement", async function () {
    const FactoryBad = await ethers.getContractFactory("AutoIncrementBad");
    const FactoryGood = await ethers.getContractFactory("AutoIncrementGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const badCost = await deployedBad.estimateGas.loop();
    const goodCost = await deployedGood.estimateGas.loop();

    compare(badCost, goodCost);
  });

  it("CalldataVsMemory", async function () {
    const FactoryBad = await ethers.getContractFactory("CalldataVsMemoryBad");
    const FactoryGood = await ethers.getContractFactory("CalldataVsMemoryGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const input = Array.from({ length: 200 }, (_, i) => i + 1);

    const badCost = await deployedBad.estimateGas.loop(input);
    const goodCost = await deployedGood.estimateGas.loop(input);

    compare(badCost, goodCost);
  });

  it("CorrectIntType", async function () {
    const FactoryBad = await ethers.getContractFactory("CorrectIntTypeBad");
    const FactoryGood = await ethers.getContractFactory("CorrectIntTypeGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const badCost = await deployedBad.estimateGas.loop();
    const goodCost = await deployedGood.estimateGas.loop();

    compare(badCost, goodCost);
  });

  it("FirstWrite", async function () {
    const FactoryBad = await ethers.getContractFactory("FirstWriteBad");
    const FactoryGood = await ethers.getContractFactory("FirstWriteGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const badCost = await deployedBad.estimateGas.setData(2);
    const goodCost = await deployedGood.estimateGas.setData(2);

    compare(badCost, goodCost);
  });

  it("FixedSizeBytes", async function () {
    const FactoryBad = await ethers.getContractFactory("FixedSizeBytesBad");
    const FactoryGood = await ethers.getContractFactory("FixedSizeBytesGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const data = "Toledo";

    const badCost = await deployedBad.estimateGas.setData(data);
    const goodCost = await deployedGood.estimateGas.setData(
      ethers.utils.formatBytes32String(data)
    );

    compare(badCost, goodCost);
  });

  it("MappingVsArray", async function () {
    const FactoryBad = await ethers.getContractFactory("MappingVsArrayBad");
    const FactoryGood = await ethers.getContractFactory("MappingVsArrayGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    // insert some data
    const signers = await ethers.getSigners();

    const addresses = Array.from(
      { length: 10 },
      (_, i) => signers[i + 1].address
    );

    for (const address of addresses) {
      await deployedBad.allowUser(address);
      await deployedGood.allowUser(address);
    }

    const badCost = await deployedBad.estimateGas.disallowUser(addresses[2]);
    const goodCost = await deployedGood.estimateGas.disallowUser(addresses[2]);

    compare(badCost, goodCost);
  });

  it("ReadCache", async function () {
    const FactoryBad = await ethers.getContractFactory("ReadCacheBad");
    const FactoryGood = await ethers.getContractFactory("ReadCacheGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const badCost = await deployedBad.estimateGas.loop();
    const goodCost = await deployedGood.estimateGas.loop();

    compare(badCost, goodCost);
  });

  it("StorageSlots", async function () {
    const StorageSlotsBad = await ethers.getContractFactory("StorageSlotsBad");
    const StorageSlotsGood = await ethers.getContractFactory(
      "StorageSlotsGood"
    );

    const estimatedGasBad = await ethers.provider.estimateGas({
      data: StorageSlotsBad.interface.encodeDeploy(),
    });

    const estimatedGasGood = await ethers.provider.estimateGas({
      data: StorageSlotsGood.interface.encodeDeploy(),
    });

    console.log(estimatedGasBad.toNumber(), estimatedGasGood.toNumber());
  });

  it("StructData", async function () {
    const FactoryBad = await ethers.getContractFactory("StructDataBad");
    const FactoryGood = await ethers.getContractFactory("StructDataGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const carBrand = "BMW";
    const carHp = 130;

    // insert some data
    await deployedBad.estimateGas.setCar(carBrand, carHp);
    await deployedGood.estimateGas.setCar(carBrand, carHp);

    const badCost = await deployedBad.estimateGas.getCarHp();
    const goodCost = await deployedGood.estimateGas.getCarHp();

    compare(badCost, goodCost);
  });

  it("UncheckedMath", async function () {
    const FactoryBad = await ethers.getContractFactory("UncheckedMathBad");
    const FactoryGood = await ethers.getContractFactory("UncheckedMathGood");

    const deployedBad = await FactoryBad.deploy();
    const deployedGood = await FactoryGood.deploy();

    const badCost = await deployedBad.estimateGas.loop();
    const goodCost = await deployedGood.estimateGas.loop();

    compare(badCost, goodCost);
  });
});
