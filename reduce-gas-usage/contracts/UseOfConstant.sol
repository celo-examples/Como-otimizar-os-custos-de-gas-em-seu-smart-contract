// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract UseOfConstantBad {
    string private name;

    constructor() {
        name = "toledo";
    }

    function getName() public returns (string memory) {
        return name;
    }
}

contract UseOfConstantGood {
    string private constant name = "toledo";

    function getName() public returns (string memory) {
        return name;
    }
}
