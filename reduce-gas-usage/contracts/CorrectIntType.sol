// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract CorrectIntTypeBad {

    // 29779 gas
    function loop() public {
        uint16 i;
        do {
            unchecked {
                ++i;
            }
        } while (i < 200);
    }
}

contract CorrectIntTypeGood {

    // 28579 gas
    function loop() public {
        uint256 i;
        do {
            unchecked {
                ++i;
            }
        } while (i < 200);
    }
}
