// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract FirstWriteBad {
    uint256 data;

    // 43702 gas
    function setData(uint256 data_) public {
        data = data_;
    }
}

contract FirstWriteGood {
    uint256 data = 1;

    // 26602 gas
    function setData(uint256 data_) public {
        data = data_;
    }
}
