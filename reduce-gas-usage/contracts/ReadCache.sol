// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract ReadCacheBad {
    uint256 length = 10;

    // 26066 gas
    function loop() public {
        for (uint256 i = 0; i < length; i++) {}
    }
}

contract ReadCacheGood {
    uint256 length = 10;

    // 25079 gas
    function loop() public {
        uint256 localLength = length;

        for (uint256 i = 0; i < localLength; i++) {}
    }
}
