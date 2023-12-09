const { createHmac } = require('crypto'); // import createHmac() from crypto module

// createHmac() is used to create a hash-based message authentication code (HMAC)
const key = 'super-secret!';
const message = 'Hello 👻';

// createHmac() takes two arguments: the algorithm and the key
const hmac = createHmac('sha256', key).update(message).digest('hex');  // hex is the output format

console.log(hmac);  // 0f2b...

// changing the key will change the output
const key2 = 'other-password';  // changed key
const hmac2 = createHmac('sha256', key2).update(message).digest('hex'); //  hex is the output format

console.log(hmac2);  // 1a2b...