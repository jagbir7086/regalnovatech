module.exports = function (req, res, next) {
    // Requires auth middleware to be called first
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied: Admins only' });
    }
    next();
};
