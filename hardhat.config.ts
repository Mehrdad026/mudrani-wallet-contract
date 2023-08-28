import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config();

const { PRIVATE_KEY, ETHERSCAN_API, ARBITRUM_RPC, SEPOLIA_RPC } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    mumbai: {
      url: `https://rpc.ankr.com/polygon_mumbai`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_RPC}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    arbitrum_goerli: {
      url: `https://arb-goerli.g.alchemy.com/v2/${ARBITRUM_RPC}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};

export default config;
