const { ApiResponse } = require('../utils/ApiResponse.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

const healthCheck = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, "OK", "Health Check Passed"));
});


module.exports = {
    healthCheck,
};