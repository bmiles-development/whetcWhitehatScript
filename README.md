# Whitehat ETC Withdraw Contract Interaction Script

This script is intended to withdraw Whitehat ETC. 

1) Clone this repo and cd into it
2) Install Hardhat ```npm install hardhat```
3) add this information to ./hardhat.config.js: 
```
    require("@nomicfoundation/hardhat-toolbox");

    privateKey1 = ""; //replace with your account

    /** @type import('hardhat/config').HardhatUserConfig */
    module.exports = {
    solidity: "0.8.19",
    networks: {
        etc: {
        url: "https://etc.rivet.link",
        accounts: [privateKey1],
        },
    },
};
```
4) Add you privateKey to the privateKey1 variable string to the above code
5) to do a dry run, comment out these two lines of code in the getMyEtc.js script: 
```
  var tx = await myContract.withdraw(myAccount, percentPaidToWhiteHats);
  console.log(tx);
```
6) run ```npx hardhat run getMyEtc.js --network etc```
