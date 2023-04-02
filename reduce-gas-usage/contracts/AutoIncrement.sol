// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract AutoIncrementBad {
    function loop() public {
        for (uint256 i; i < 200; ++i) {}
    }
}

contract AutoIncrementGood {
    function loop() public {
        uint256 i;
        do {
            ++i;
        } while (i < 200);
    }
}
