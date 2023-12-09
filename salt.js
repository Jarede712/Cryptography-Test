const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` };

    users.push(user);

    return user;
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    // timingSafeEqual() is used to prevent timing attacks
    const keyBuffer = Buffer.from(key, 'hex');  // convert hex to buffer
    const match = timingSafeEqual(hashedBuffer, keyBuffer); 

    if (match) {
        return 'login successful!'
    } else {
        return 'login failed!'
    }
}
