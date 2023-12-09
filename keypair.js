// keypairs are used to encrypt and decrypt messages using public and private keys
// so that we can store the public key in a database instead of storing the password in a database

const { generateKeyPairSync } = require('crypto'); // import generateKeyPairSync() from crypto module

// generateKeyPairSync() is used to generate a key pair
// it takes two arguments: the algorithm and the options
// it returns an object with the public and private keys
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // the length of the key modulus in bits
    publicKeyEncoding: {
        type: 'spki', // recommended to use 'spki' for public key encoding
        format: 'pem', // recommended to use 'pem' for public key encoding
    },
    privateKeyEncoding:{
        type: 'pkcs8', // recommended to use 'pkcs8' for private key encoding
        format: 'pem', // recommended to use 'pem' for private key encoding
        // cypher: 'aes-256-cbc', // recommended to use 'aes-256-cbc' for private key encoding
        // passphrase: 'top secret', // passphrase used for private key encoding
    },
})

console.log(privateKey); // logs the private key
console.log(publicKey); // logs the public key

module.exports = { 
    privateKey, publicKey 
}; // export the public and private keys