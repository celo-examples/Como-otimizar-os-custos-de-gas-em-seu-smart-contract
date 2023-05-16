// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

interface IOffsetHelper {
    function autoOffsetExactInETH(address _poolToken)
        external
        payable
        returns (address[] memory tco2s, uint256[] memory amounts);
}

contract Wall {
    string public text;

    IOffsetHelper private immutable offsetHelper;
    address private immutable poolToken;

    // https://app.toucan.earth/contracts
    constructor(address offsetHelperAddress_, address poolToken_) {
        offsetHelper = IOffsetHelper(offsetHelperAddress_);
        poolToken = poolToken_;
    }

    function draw(string calldata text_) external payable {
        text = text_;
        // https://github.com/ToucanProtocol/OffsetHelper/blob/main/contracts/OffsetHelper.sol
        offsetHelper.autoOffsetExactInETH(poolToken);
    }
}
