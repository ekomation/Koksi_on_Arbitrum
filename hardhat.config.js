require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


//require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "arbitrum_goerli",

  networks : {
    arbitrum_goerli : {
      chainId: 421613,

      url : process.env.ALCHEMY_URL,
     
      accounts : [process.env.PRIVATE_KEY]
    },
  }
};




