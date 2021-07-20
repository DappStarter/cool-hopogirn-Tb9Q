require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food manage return rural unfold include immense army gentle'; 
let testAccounts = [
"0x145ec0f5699ac59d3a941aaee245a180e2a5bcc437e3d56224aae39e27ddddd6",
"0x32206a4fc3b444bfc724dccac2af1866203e7df6f279d570fa14d0fd6d704c7e",
"0x059a566909f852ea1b8769512cdf14694f408267e6acc4d97bcf8878db86e5a3",
"0xe4eb7a0f724359d42bacec9b1193c69d3bd52eacc6f196803d852eb0eaf95aa3",
"0x688fab7be59ac5a2a59d511eeda62498c96dae72bc1774376eccd2ee8c9821a2",
"0x38d791bbd572ad9d9e85739e16236f94e55607362a11f11ab5d132dec95e5e37",
"0xa598542a185902a36adfaaa67acd1523b348bb1f2e040f7055ee0865a2a1b9ae",
"0xc79bc754d657bd95999428e0e11b2f78acfc5d19ca3edd03a78bee904e5dd56c",
"0xc2d11161f974e091aea3235efc1aa472ad06584c12a5c163645a8bc4cb2f0bb7",
"0x82f5f224156abc9a311ffb540c157842cbd9aa99f40f890d2dcc941870f561ac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


