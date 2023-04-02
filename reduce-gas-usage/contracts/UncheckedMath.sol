// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract UncheckedMathBad {
    function loop() public {
        for (uint256 i; i < 200; ) {
            ++i;
        }
    }
}

contract UncheckedMathGood {
    function loop() public {
        for (uint256 i; i < 200; ) {
            unchecked {
                ++i;
            }
        }
    }
}
