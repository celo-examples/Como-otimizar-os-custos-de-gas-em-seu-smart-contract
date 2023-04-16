// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract FixedSizeBytesBad {
    string a;

    // 45186 gas
    function setData(string memory str) public {
        a = str;
    }
}

contract FixedSizeBytesGood {
    bytes32 a;

    // 43762 gas
    function setData(bytes32 str) public {
        a = str;
    }
}
