const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');    // import createCipheriv() and createDecipheriv() from crypto module

/// Cypher

// createCipheriv() is used to create a Cipher object
const message = 'Hello 👻 Again!!';

// randomizes output when encrypted so an identical sequence of text will never produce the same encrypted output (cypher text)
const key = randomBytes(32); // 32 bytes is the recommended size for the key
const iv = randomBytes(16); // 16 bytes is the recommended size for the initialization vector (iv)

const cypher = createCipheriv('aes256', key, iv); // createCipheriv() takes three arguments: the algorithm, the key, and the initialization vector (iv) and returns a Cipher object
// aes256 is the algorithm and it is used to encrypt the message

///Encrypt

const encryptedMessage = cypher.update(message, 'utf8', 'hex') + cypher.final('hex'); // cypher.final() is used to return any remaining cypher text

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv); // createDecipheriv() takes three arguments: the algorithm, the key, and the initialization vector (iv) and returns a Decipher object
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8'); // decipher.final() is used to return any remaining plain text  

// we use .tosString('utf8') to convert the buffer to a string
console.log(`Deciphered message: ${decryptedMessage.toString('utf8')}`); // Deciphered message: Hello 👻 Again!!