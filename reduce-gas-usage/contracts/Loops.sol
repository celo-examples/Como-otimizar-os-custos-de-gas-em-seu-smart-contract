// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract LoopsBad {
    // 55406 gas
    function loop() public {
        for (uint256 i; i < 200; ++i) {}
    }
}

contract LoopsGood {
    // 52579 gas
    function loop() public {
        uint256 i;
        do {
            ++i;
        } while (i < 200);
    }
}
