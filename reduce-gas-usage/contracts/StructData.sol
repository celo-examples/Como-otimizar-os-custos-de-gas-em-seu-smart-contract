// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.18;

contract StructDataBad {
    struct Car {
        string brand;
        uint256 hp;
    }

    mapping(address => Car) _carData;

    function setCar(string memory brand, uint256 hp) external {
        _carData[msg.sender] = Car(brand, hp);
    }

    // 26259 gas
    function getCarHp() public returns (uint256) {
        Car memory myCar = _carData[msg.sender];
        return myCar.hp;
    }
}

contract StructDataGood {
    struct Car {
        string brand;
        uint256 hp;
    }

    mapping(address => Car) _carData;

    function setCar(string memory brand, uint256 hp) external {
        _carData[msg.sender] = Car(brand, hp);
    }

    // 23596 gas
    function getCarHp() public returns (uint256) {
        return _carData[msg.sender].hp;
    }
}
