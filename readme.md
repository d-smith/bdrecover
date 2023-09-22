# BD Recover

This is a test of the Blockdaemon emergency recovery system. This is only a test. In the event of a real emergency...

This example:

* Generates an MPC key set using a (3,1) TSM configuration
* Funds the EAO associated with the MPC key set's public key
* Exercises the emergency key recovery process to export the private key for the MPC key set
* Verifies the ability to use the private key to transfer funds from the EOA funded earlier.

```
# Note - to run the examples ensure you are running ganache (npm run ganache from the ganache directory)

$ go run step0.go 
2023/09/21 10:22:46 key ID: 6iJDUmyPpS10ShEUg39EwN2zZfPZ
2023/09/21 10:22:46 Public key: 3056301006072a8648ce3d020106052b8104000a034200043394ff9cc59be9675ac8f990965a0c1c195917c2776861e5e01c6f3121540b41d8b1b6d35e1276b38470f163307c2f608a4d208de0ab11eeecbac56ce23801b5
2023/09/21 10:22:46 Ethereum address: 3d39a41739f10ba95f38d8d0a56a26352c6d8f0a

$ truffle exec step1.js 3d39a41739f10ba95f38d8d0a56a26352c6d8f0a
Using network 'development'.

Funding account: 3d39a41739f10ba95f38d8d0a56a26352c6d8f0a
1000000000000000000


$ go run step3.go 
✔ Key ID: 6iJDUmyPpS10ShEUg39EwN2zZfPZ█
2023/09/22 07:27:25 Public key: 3056301006072a8648ce3d020106052b8104000a034200043394ff9cc59be9675ac8f990965a0c1c195917c2776861e5e01c6f3121540b41d8b1b6d35e1276b38470f163307c2f608a4d208de0ab11eeecbac56ce23801b5
2023/09/22 07:27:25 Ethereum address: 3d39a41739f10ba95f38d8d0a56a26352c6d8f0a
Curve:                       secp256k1
Recovered private ECDSA key: &{{0xbce0a0 23331212815214558182717260780177072862391467764491584443352714666157603556161 98013569040742127499258774595746697580531873966623970350175806874696583479733} 55600449724165021875862220574771465991657936885485300239367818018589045778904}
Recovered master chain code: 0cf4ff3a87c4e39366a216dc50b3eff7d3ba886ff9545f77b61b8e30919a0ff7
Private key 7aecbd44fa854b56efdc8ec0d1d9f0951d3e0096f3f652e1885ddda5df7969d8

$ truffle exec step4.js 7aecbd44fa854b56efdc8ec0d1d9f0951d3e0096f3f652e1885ddda5df7969d8
Using network 'development'.

Loading private key: 7aecbd44fa854b56efdc8ec0d1d9f0951d3e0096f3f652e1885ddda5df7969d8

before bd account balance 1000000000000000000
before ganache account 1 balance 1000000000000000000000
after bd account balance 499931418659375000
after ganache account 1 balance 1000500000000000000000

```