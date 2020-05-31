require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name recipe mad hole inner merry front swap'; 
let testAccounts = [
"0x92edd38cb77c7f819101e91765ba8885afc867c141cf3c01563cf71de2cc262f",
"0xc2f1c89af28cd15533083ec3aa175e02e9af82b298c1c3a32bbd259aaba86eca",
"0xee44da6fecdb783842fc20ab1b6fd8abf8fe3abadba51da9d6d5c21fadae610c",
"0x36b146e53f704e610e5d04bf1cdc888cb053e5285d466d069bd8be769d0165c4",
"0x1dcbf823b2e1368923e0d4a7228c15b408c5f02111f68b859565396f12b5f453",
"0x43dc231bff8d1ec6a4067661804e066036f604ee8dc36d4601ab2a5e536a8745",
"0x20b0e79d4168cbb6e0a8f47a229b2809ea63c6e243fe3a3160f6de12ce16d679",
"0xd324e5043d64a98adf1dd3cfefbeb069e874ff74c9cb9552bd5af4bb8d4d5de9",
"0x99ce35861068f128849229de717bf43ffed18745917da6f903b9ea9a245c53c4",
"0x1e8a3d66071fdc4ad50ad92ca606c309f3561d762fa3cebfc612aa272a14b3a0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
