// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract FixedSizeBytesBad {
    string a;

    function add(string str) public {
        a = str;
    }
}

contract FixedSizeBytesGood {
    bytes32 a;

    function add(bytes32 str) public {
        a = str;
    }
}
