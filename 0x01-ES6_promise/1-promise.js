function successResponse(success) {
    status: 200,
    body: 'Success'
};

function errorResponse(error) {
    status: 500,
    body: 'Error'
    console.log('The fake API is not working currently');
};
getFullResponseFromAPI(success).then(successResponse, errorResponse);