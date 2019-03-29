const repository = require('./utils/repository')

module.exports = async function (origin, dateFrom, dateTo) {
    const nomadResponse = await repository.nomad({
        adults: 1,
        "date_from": dateFrom,
        "date_to": dateTo,
        "fly_from": origin,
        "fly_to": origin,
    },
    {
        "via": [
            {
                "locations": [
                    "PRG"
                ],
                "nights_range": [
                    3,
                    5
                ]
            },
            {
                "locations": [
                    "PAR"
                ],
                "nights_range": [
                    3,
                    5
                ]
            },
            {
                "locations": [
                    "LON"
                ],
                "nights_range": [
                    3,
                    5
                ]
            }
        ]
    });

    console.log(nomadResponse)

    // return locationsResponse;
};
