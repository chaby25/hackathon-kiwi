const repository = require('./utils/repository')

module.exports = async function (low_lat, low_lon, high_lat, high_lon) {
    const locationsResponse = await repository.getLocationsBox({
        low_lat,
        low_lon,
        high_lat,
        high_lon,
        locale: 'en-US',
        location_types: 'city',
        sort: 'rank'
    });

    return locationsResponse.locations;
};
