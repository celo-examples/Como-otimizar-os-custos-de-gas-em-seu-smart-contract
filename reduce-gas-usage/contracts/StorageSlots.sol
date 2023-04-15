// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract StorageSlotsBad {
    uint128 a;
    uint256 c;
    uint128 b;

    constructor(
        uint128 a_,
        uint128 b_,
        uint256 c_
    ) {
        a = a_;
        b = b_;
        c = c_;
    }
}

contract StorageSlotsGood {
    uint128 a;
    uint128 b;
    uint256 c;
    
     constructor(
        uint128 a_,
        uint128 b_,
        uint256 c_
    ) {
        a = a_;
        b = b_;
        c = c_;
    }
}
