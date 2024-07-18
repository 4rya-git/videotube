// The asyncHandler utility is used to handle asynchronous route handlers in Express. js. It ensures that any errors thrown within asynchronous functions are caught and forwarded to the error handling middleware.
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(
            (err) => next,
        );
    };
};

module.exports = {
    asyncHandler,
};