const { createHash } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = 'password123';
const hash1 = hash(password);
console.log(hash1);

password = 'password123';   // changed password
const hash2 = hash(password);   // hash2 will be different from hash1
const match = hash1 === hash2;  // false

console.log(match ? 'Passwords match' : 'Passwords don\'t match'); 