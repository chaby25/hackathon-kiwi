const repository = require('./utils/repository')

module.exports = async function (origin, dateFrom, dateTo, adults, sort, cityCodes) {

    const via = cityCodes.filter( (cityCode) => cityCode !== origin ).map(
        (cityCode) => {
            return {
                "locations": [
                    cityCode
                ],
                "nights_range": [
                    1,
                    10
                ]
            }
        }
    )

    const nomadResponse = await repository.nomad({
            adults,
            sort,
            "date_from": dateFrom,
            "date_to": dateTo,
            "fly_from": origin,
            "fly_to": origin,
            "limit": 1,
        },
        {
            via
        });

    console.log(nomadResponse.data[0])

    // return locationsResponse;
};
