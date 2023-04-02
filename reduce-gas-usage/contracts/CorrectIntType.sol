// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract CorrectIntType {
    function loop() public {
        uint16 i;
        do {
            unchecked {
                ++i;
            }
        } while (i < 200);
    }
}

contract CorrectIntType2 {
    function loop() public {
        uint256 i;
        do {
            unchecked {
                ++i;
            }
        } while (i < 200);
    }
}
