import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

function auth(req, res, next) {
    const userId = req.header('userId');
    if (!userId) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(userId, 'secret');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

export default auth;