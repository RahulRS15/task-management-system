const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'your-secret-key';

exports.login = (req, res) => {
    const { username, password } = req.body;

    // Ensure that Validate username and password
    // This is a simplified example, you should hash and compare the password in a real application


    db.get('SELECT * FROM Users WHERE username = ?', [username], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        bcrypt.compare(password, user.password_hash, (err, result) => {
            if (result) {
                const token = jwt.sign({ username: username }, secret);
                res.json({ token: token });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        });
    });
};

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = exports;