const repository = require('./utils/repository')

module.exports = async function (parameters) {
    const locationsResponse = await repository.getLocationsAutocomplete(parameters);
    return locationsResponse.locations;
};
