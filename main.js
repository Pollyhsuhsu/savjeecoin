const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a69a5b95f785de1e276b7f85dadf9f3ecdff63c206a3ff6f796809323ff416cd');
const myWalletAddress = myKey.getPublic('hex');


const createBCinJS = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'public key of recipient', 10);
tx1.signTransaction(myKey);
createBCinJS.addTransaction(tx1);

console.log('\n Staring the miner...');
createBCinJS.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', createBCinJS.getBalanceOfAddress(myWalletAddress));

createBCinJS.chain[1].transactions[0].amount = 1;


console.log('Is chain valid? ', createBCinJS.isChainValid());

