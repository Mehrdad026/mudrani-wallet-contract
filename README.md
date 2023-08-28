# Mudrani Wallet: An Introduction

Mudrani Wallet is a user-friendly digital wallet on the Arbitrum Goerli chain. It's built to match the ERC-4337 standards, making it compatible with the Ethereum world. The wallet's standout feature is its ability to use ENS, letting users send funds using easy-to-remember names instead of long addresses. It's a straightforward tool for modern finance.

## Features

- Create ERC-4337 Wallet: Seamlessly create a wallet compliant with the ERC-4337 standard.
- Send Wallet: Facilitate swift and secure transactions, moving funds from one account to another with ease.
- ENS Resolve: Use Ethereum Name Service (ENS) to resolve human-readable addresses, simplifying the transaction process and reducing the chance of errors.

## Upcoming Features

- Cross-Chain Transfer: Aiming to break barriers and expand horizons, Mudrani Wallet is working towards facilitating transfers across different blockchain networks. This future integration promises users broader access and the ability to interact seamlessly across diverse blockchain ecosystems.

## Team Members

- [Devendra Bhoraniya](https://github.com/DevendraBhoraniya)

## Frontend Repo

- [Mudrani Wallet FE](https://github.com/DevendraBhoraniya/Mudrani-fe)

## Features

- **Capture Moments**: Users can upload images, videos, notes, or any form of digital content, embodying a specific memory or sentiment.
- **Set Expiration**: Add a time element by setting an expiration date. The content within the capsule can be made to appear or disappear at specific times, giving an element of surprise or nostalgia.
- **Mint as NFT**: The capsule can be minted as a Non-Fungible Token (NFT), giving it a unique identity on the blockchain.
- **Gift or Trade**: Share the capsule with friends and loved ones or trade it within the community.
- **Secure & Decentralized**: Stored securely on a decentralized network, ensuring the privacy and integrity of the content.

## Deploy Contract

- [Arbitrum Goerli](https://goerli.arbiscan.io/address/0x01998fEd8EC786ed3Bce37Cac7Abd20F1adBCBB6)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karangoraniya/mudrani-wallet-contract.git
```

Go to the project directory

```bash
  cd mudrani-wallet-contract
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile
```

Test

```bash
  npx hardhat test
```

Deploy on Arbitrum Goerli

```bash
  npx hardhat run scripts/deploy.ts --network arbitrum_goerli
```

Deploy on Arbitrum Goerli

```bash
  npx hardhat run scripts/mudraniToken.ts --network arbitrum_goerli
```

Deploy on Sepolia

```bash
  npx hardhat run scripts/deploy.ts --network mode
```

Deploy on Mumbai

```bash
  npx hardhat run scripts/deploy.ts --network mumbai
```

Verify Contract

For the op_testnet network:

```bash
npx hardhat verify --network arbitrum_goerli <YOUR_CONTRACT_ADDRESS> <WITH_ARGUMENT_IF_REQUIRED>
```

Help

```bash
  npx hardhat help
```
