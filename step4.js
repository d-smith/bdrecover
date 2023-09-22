const truffle = require("truffle");

module.exports = async function (callback) {
    // TODO: implement your actions
    if (process.argv.length < 5) {
        console.log("Usage: truffle exec step4.js <EOA>");
        callback();
    }

    console.log("Loading private key: " + process.argv[4]);

    const accounts = await web3.eth.getAccounts();

    web3.eth.accounts.wallet.add(process.argv[4]);
    
    let balance = await  web3.eth.getBalance(web3.eth.accounts.wallet[0].address)
    console.log("before bd account balance", balance);

    balance = await  web3.eth.getBalance(accounts[1])
    console.log("before ganache account 1 balance", balance);
    
    await web3.eth.sendTransaction({to:accounts[1], gas:21000,from:web3.eth.accounts.wallet[0].address, value: web3.utils.toWei('0.5')})

    balance = await  web3.eth.getBalance(web3.eth.accounts.wallet[0].address)
    console.log("after bd account balance", balance);

    balance = await  web3.eth.getBalance(accounts[1])
    console.log("after ganache account 1 balance", balance);
    
    // invoke callback
    
    callback();
}

