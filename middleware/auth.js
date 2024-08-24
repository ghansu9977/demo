import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

function auth(req, res, next) {
    const token = req.header('token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

export default auth;