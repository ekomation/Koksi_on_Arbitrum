//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; //adopting solidity version 0.8.0 for ease of compatibility

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Koksi is ERC20 {
    uint constant _initial_supply = 1000000000 * (10**18); //Since we are running a huge community, we have decided to settle for 1 billion supply
    constructor() ERC20("Koksi", "KOK") {
        _mint(msg.sender, _initial_supply);
    }
}
