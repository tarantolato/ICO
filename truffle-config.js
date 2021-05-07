const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

// Configurazione rete Testnet BSC
const secretKeyTestnet = fs.readFileSync(".secretKeyTestnet").toString().trim();
const endpointTestnet = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const providerTestnet = new HDWalletProvider([secretKeyTestnet], endpointTestnet);

// Configurazione rete Mainnet BSC
const secretKeyMainnet = fs.readFileSync(".secretKeyMainnet").toString().trim();
const endpointMainnet = 'https://bsc-dataseed1.ninicoin.io/';
const providerMainnet = new HDWalletProvider([secretKeyMainnet], endpointMainnet);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777,
     },
    testnet_bsc: {
      provider: () => providerTestnet,
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 3000000
     },
     mainnet_bsc: {
       provider: () => providerMainnet,
       network_id: 56,
       confirmations: 10,
       timeoutBlocks: 500,
       skipDryRun: true,
       gas: 3000000
      },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },


  //contracts_directory: "./src/contracts/",
  //contracts_build_directory: "./src/abis/",

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.16" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
