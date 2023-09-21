const truffle = require("truffle");

module.exports = async function (callback) {
    const accounts = await web3.eth.getAccounts();

    let balance = await await web3.eth.getBalance(accounts[1])
    console.log("Balance of account 1: " + web3.utils.fromWei(balance) + " ether");
    // invoke callback
    callback();
}

