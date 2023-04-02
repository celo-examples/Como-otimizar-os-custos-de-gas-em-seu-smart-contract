// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract CalldataVsMemoryBad {
    function loop(uint256[] memory arr) public {
        uint256 i;
        do {
            unchecked {
                ++i;
            }
        } while (i < arr.length);
    }
}

contract CalldataVsMemoryGood {
    function loop(uint256[] calldata arr) public {
        uint256 i;
        do {
            unchecked {
                ++i;
            }
        } while (i < arr.length);
    }
}
