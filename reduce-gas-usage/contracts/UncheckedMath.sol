// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract UncheckedMathBad {
    // 55406 gas
    function loop() public {
        for (uint256 i; i < 200; ) {
            ++i;
        }
    }
}

contract UncheckedMathGood {
    // 31406 gas
    function loop() public {
        for (uint256 i; i < 200; ) {
            unchecked {
                ++i;
            }
        }
    }
}
