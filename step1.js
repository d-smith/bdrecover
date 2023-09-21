const truffle = require("truffle");

module.exports = async function (callback) {
    // TODO: implement your actions
    if (process.argv.length < 5) {
        console.log("Usage: truffle exec step1.js <EOA>");
        callback();
    }

    console.log("Funding account: " + process.argv[4]);

    const accounts = await web3.eth.getAccounts();
    web3.eth.sendTransaction({to:process.argv[4], from:accounts[0], value: web3.utils.toWei('1')})

    let balance = await await web3.eth.getBalance(process.argv[4])
    console.log(
        balance
    )
    // invoke callback
    callback();
}

