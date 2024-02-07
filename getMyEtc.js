const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();

  //see hardhat.config.js -- will withdraw to this account
  const myAccount = accounts[0];

  //WHITE HAT PERCENTAGE!@!!!!
  const percentPaidToWhiteHats = 0;

  const contractAddress = "0x9f5304da62a5408416ea58a17a92611019bd5ce3"; ///whetcWhitehat Contract Address
  const myContract = await hre.ethers.getContractAt(
    [
      "function withdraw(address _beneficiary, uint _percentageWHG )",
      "function getMyBalance(address _account) constant returns (uint)",
      "function getPaidOut(address _account) constant returns (uint)",
      "function getTotalFunds() constant returns (uint)",
      "function getWHGDonationAddress() constant returns (address)",
      "function claimRemaining() returns (bool)",
    ],
    contractAddress,
    myAccount
  );
  const daoBalanceSnapshotContract = await hre.ethers.getContractAt( //daoBalanceSnapshot Contract Address
    [
      "function balanceOf(address _dth) constant returns(uint)",
      "function totalSupply() constant returns(uint )",
    ],
    "0x180826b05452ce96e157f0708c43381fee64a6b8", 
    myAccount
  );
  var whgDonationAddress = await myContract.getWHGDonationAddress();

  var getTotalFunds = await myContract.getTotalFunds();
  console.log(
    "Total funds in contract:               ",
    hre.ethers.formatEther(getTotalFunds)
  );
  var getTotalSnapshotFunds = await daoBalanceSnapshotContract.totalSupply();
  console.log(
    "Total funds in DAO Snapshot Contract:  ",
    hre.ethers.formatEther(getTotalSnapshotFunds)
  );
  console.log(" ");
  console.log(" ");
  console.log("Account to Retrieve Funds:             ", myAccount.address);
  console.log(" ");
  console.log("WhiteHat Donation Address:             ", whgDonationAddress);
  console.log("--------------------------------------------------------------");
  console.log(" ");
  var balance = await myContract.getMyBalance(myAccount);
  console.log(
    "Your Balance in Contract:              ",
    hre.ethers.formatEther(balance)
  );
  var snapshotBalance = await daoBalanceSnapshotContract.balanceOf(myAccount);
  console.log(
    "Your Balance in DAO Snapshot Contract: ",
    hre.ethers.formatEther(snapshotBalance)
  );
  console.log(" ");

  var paidOut = await myContract.getPaidOut(myAccount);
  console.log(
    "Amount Paid Out to You:                ",
    hre.ethers.formatEther(paidOut)
  );

  console.log(" ");
  var withdrawableAmount =
    (snapshotBalance * getTotalFunds) / getTotalSnapshotFunds - paidOut;
  console.log(
    "Your Withdrawable Amount:              ",
    hre.ethers.formatEther(withdrawableAmount)
  );
  console.log(" ");
  console.log(" ");

  //console.log("Claim Remaining ..");
  //var tx = await myContract.claimRemaining();
  //console.log(tx);

  console.log("Processing Withdraw...");

  var tx = await myContract.withdraw(myAccount, percentPaidToWhiteHats);
  console.log(tx);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});