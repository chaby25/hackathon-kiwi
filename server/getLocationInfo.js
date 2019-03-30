const repository = require('./utils/repository')

module.exports = async function (parameters) {
    const locationsResponse = await repository.getLocationByCityId(parameters);
    return locationsResponse.locations[0].location;
};
