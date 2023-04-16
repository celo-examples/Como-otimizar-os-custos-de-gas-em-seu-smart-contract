// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

// 232031 gas
contract UseOfConstantBad {
    uint256 private fee;
    string private name;

    constructor(uint256 fee_) {
        fee = fee_;
        name = "toledo";
    }

    function getName() public returns (string memory) {
        return name;
    }
}

// 157784 gas
contract UseOfConstantGood {
    uint256 private fee;
    string private constant name = "toledo";

    constructor(uint256 fee_) {
        fee = fee_;
    }

    function getName() public returns (string memory) {
        return name;
    }
}
