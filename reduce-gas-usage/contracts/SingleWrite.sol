// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract SingleWriteBad {
    uint256[] private items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    uint256 sum;

    // 75958 gas
    function loop() public {
        uint256 localLength = items.length;

        for (uint256 i = 0; i < localLength; i++) {
            sum += items[i];
        }
    }
}

contract SingleWriteGood {
    uint256[] private items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    uint256 sum;

    // 69663 gas
    function loop() public {
        uint256[] memory localItems = items;
        uint256 localLength = localItems.length;
        uint256 localSum;

        for (uint256 i = 0; i < localLength; i++) {
            unchecked {
                localSum += localItems[i];
            }
        }

        sum = localSum;
    }
}
