import { ethers } from 'hardhat';

async function main() {
  const MudraniToken = await ethers.getContractFactory('MudraniToken');
  const mudraniToken = await MudraniToken.deploy();

  await mudraniToken.deployed();

  console.log(`MudraniToken with deployed to ${mudraniToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
