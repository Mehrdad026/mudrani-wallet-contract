import { ethers } from 'hardhat';

async function main() {
  const Mudrani = await ethers.getContractFactory('Mudrani');
  const mudrani = await Mudrani.deploy(
    // '0x2334937846Ab2A3FCE747b32587e1A1A2f6EEC5a' // Mumbai
    '0x2075c9E31f973bb53CAE5BAC36a8eeB4B082ADC2' // arbitrum goerli
  );

  await mudrani.deployed();

  console.log(`Mudrani with deployed to ${mudrani.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
