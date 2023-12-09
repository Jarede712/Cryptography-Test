// createHash() method of crypto module is used to create hash digests of data.
const { createHash } = require('crypto');

// this function takes a string as input and returns a hashed string to the caller so that the caller can store the hashed string in a database
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

// this function takes a password as input and returns a hashed password to the caller so that the caller can store the hashed password in a database
let password = 'password123';
const hash1 = hash(password);
console.log(hash1);

password = 'password123';   // changed password
const hash2 = hash(password);   // hash2 will be different from hash1
const match = hash1 === hash2;  // false

// logs 'Passwords match' if the passwords match, otherwise logs 'Passwords don't match'
console.log(match ? 'Passwords match' : 'Passwords don\'t match'); 