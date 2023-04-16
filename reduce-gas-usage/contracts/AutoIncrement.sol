// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract AutoIncrementBad {
    // 56406 gas
    function loop() public {
        for (uint256 i; i < 200; i++) {}
    }
}

contract AutoIncrementGood {
    // 55406 gas
    function loop() public {
        for (uint256 i; i < 200; ++i) {}
    }
}
