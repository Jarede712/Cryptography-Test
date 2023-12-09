// salt is a random string that is added to the password before hashing
// that way, even if two users have the same password, their hashed passwords will be different

const { scryptSync, randomBytes, timingSafeEqual } = require('crypto'); // import scryptSync(), randomBytes(), and timingSafeEqual() from crypto module

// create a users array to store users
let users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString('hex'); // 16 bytes is the recommended size for the salt
    const hashedPassword = scryptSync(password, salt, 64).toString('hex'); // 64 bytes is the recommended size for the key

    const user = { email, password: `${salt}:${hashedPassword}` }; // store the salt and hashed password in the database

    users.push(user); // add the user to the users array

    return user; // return the user
}

// create a users array to store users
function checkLogin(email, password) {
    const user = users.find(v => v.email === email); // find the user in the users array

    if (!user) {   
        return 'user not found!';
    }
    
    const [salt, key] = user.password.split(':'); // split the salt and hashed password
    const hashedBuffer = scryptSync(password, salt, 64); // scryptSync() returns a buffer

    // timingSafeEqual() is used to prevent timing attacks
    const keyBuffer = Buffer.from(key, 'hex');  // convert hex to buffer
    const match = timingSafeEqual(hashedBuffer, keyBuffer);  // compare the hashed password with the key

    // return 'login successful!' if the passwords match, otherwise return 'login failed!'
    if (match) {
        return 'login successful!'
    } else {
        return 'login failed!'
    }
}

let loginResult = checkLogin();
console.log(loginResult); // login successful!
