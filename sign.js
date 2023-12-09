// signing gurantees that the message was not tampered with, and that the sender is who they say they are

const { createSign, createVerify } = require('crypto'); // import createSign() and createVerify() from crypto module
const { publicKey, privateKey } = require('./keypair'); // import the public and private keys from keypair.js

const message = 'this data must be signed';

/// SIGN 

const signer = createSign('rsa-sha256'); // create a signer using the rsa-sha256 algorithm

signer.update(message); // the data to be signed

const signature = signer.sign(privateKey, 'hex'); // sign the data using the private key

/// VERIFY

const verifier = createVerify('rsa-sha256'); // create a verifier using the rsa-sha256 algorithm

verifier.update(message); // the data to be verified

// if the signature is valid, the verify() method will return true, otherwise it will return false
// if the signature was forged or the message was tampered with, the verify() method will fail
const isVerified = verifier.verify(publicKey, signature, 'hex'); // verify the data using the public key   
