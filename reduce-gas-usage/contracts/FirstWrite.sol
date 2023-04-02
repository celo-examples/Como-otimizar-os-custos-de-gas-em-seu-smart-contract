// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract FirstWriteBad {
    uint256 data;

    function setData(uint256 data_) public {
        data = data_;
    }
}

contract FirstWriteGood {
    uint256 data = 1;

    function setData(uint256 data_) public {
        data = data_;
    }
}