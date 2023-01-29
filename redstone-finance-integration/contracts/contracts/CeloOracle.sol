// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@redstone-finance/evm-connector/contracts/data-services/RapidDemoConsumerBase.sol";

contract CeloOracle is RapidDemoConsumerBase  {
    uint256 public celoPrice;

    function updateCeloPrice() external {
        celoPrice = getOracleNumericValueFromTxMsg(bytes32("CELO"));
    }
}
