// create a middleware to make the name uppercase

export const formatMiddleware = (req, res, next) => {
    const { name } = req.params;
    req.params.name = name.toUpperCase();
    next();
}