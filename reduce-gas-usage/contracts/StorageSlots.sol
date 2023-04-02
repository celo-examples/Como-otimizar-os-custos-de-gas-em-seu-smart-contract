// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract StorageSlotsBad {
    uint128 a;
    uint256 c;
    uint128 b;
}

contract StorageSlotsGood {
    uint128 a;
    uint128 b;
    uint256 c;
}
