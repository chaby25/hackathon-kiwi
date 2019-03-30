const repository = require('./utils/repository')
const moment = require('moment');
const helper = require('./utils/helper');

module.exports = async function (origin, dateFrom, dateTo, adults, sort, cityCodes) {

    console.log(dateTo.diff(dateFrom, "days"));

    const via = cityCodes.filter( (cityCode) => cityCode !== origin ).map(
        (cityCode) => {
            return {
                "locations": [
                    cityCode
                ],
                "nights_range": [
                    2,
                    5
                ]
            }
        }
    )

    const nomadResponse = await repository.nomad({
            adults,
            sort,
            "date_from": dateFrom.format('DD/MM/YYYY'),
            "date_to": dateTo.format('DD/MM/YYYY'),
            "fly_from": origin,
            "fly_to": origin,
            "limit": 1,
        },
        {
            via
        });

    return nomadResponse.data[0];
};

