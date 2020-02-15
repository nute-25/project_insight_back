const jwt = require('jsonwebtoken');

exports.verify_token = (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        jwt.verify(token, process.env.JWT_KEY, (error, result) => {
            if (error) {
                res.status(403);
                res.json({ message: 'Accès refusé' });
            }
            else {
                next();
            }
        });
    }
    else {
        res.status(403);
        res.json({ message: 'Accès refusé' });
    }
};
