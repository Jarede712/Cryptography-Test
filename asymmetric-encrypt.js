// asymmetric encryption is a type of encryption where a pair of keys (a public key and a private key) is used to encrypt and decrypt electronic data.
// you use asymmetric encryption when you want to encrypt data so that only the intended recipient can decrypt it. (used whenever you go to a website that starts with https://)
// the browser will automatically find the public key of the website (SSL certificate) and use it to encrypt the data before sending it to the website
// the public key will encrypt any data you send to the website, but only the private key can decrypt the data (can help prevent hackers from gaining access to your data)

const { publicEncrypt, privateDecrypt } = require('crypto'); // import publicEncrypt() and privateDecrypt() from crypto module
const { publicKey, privateKey } = require('./keypair'); // import the public and private keys from keypair.js

const message = 'this is a secret message!'

// publicEncrypt() is used to encrypt data using the public key
const encryptedData = publicEncrypt(
    publicKey, // the public key
    Buffer.from(message) // the data to be encrypted
);

console.log(encryptedData.toString('hex')); // logs the encrypted data


const decryptedData = privateDecrypt(
    privateKey, // the private key
    encryptedData // the encrypted data
);

console.log(decryptedData.toString('utf-8')); // logs the decrypted data