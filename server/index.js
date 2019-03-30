// BASE SETUP
// =============================================================================

// call the packages we need

var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var getLocationsBox = require('./getLocationsBox');
var nomad = require('./nomad');
var getLocationInfo = require('./getLocationInfo');
var getLocationFullinformation = require('./getLocationFullinformation');

var helper = require('./utils/helper');
var moment = require('moment');

var port = process.env.PORT || 8080;        // set our port

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/autocomplete', async function (req, res) {
    var locations = await getLocationFullinformation({term: req.query.city, limit: 5, location_types: 'airport'});
    var response = [];
    locations.forEach((location) => {
        response.push({
            name: location.name,
            code: location.code
        })
    });
    res.json(response);
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', async function (req, res) {

    const locations = await getLocationsBox(
        req.query.low_lat,
        req.query.low_lon,
        req.query.high_lat,
        req.query.high_lon,
        5
    );

    const response = await Promise.all([
        extracted(locations, req, res, 'price'),
        extracted(locations, req, res, 'quality')
    ])

    res.json(response);
});

async function extracted(locations, req, res, sort) {
    const values = await nomad(
        req.query.origin,
        moment(req.query.departure_date),
        moment(req.query.outward_date),
        req.query.number_of_persons, sort, locations.map((location) => location.code)
    );
    const result2 = [];
    let i = 1;
    for (let route of values.route) {
        result2.push({
            "name": route.cityTo,
            "order": ++i,
            "geolocation": await getLocationInfo({term: route.flyTo,limit:1}),
        });
    }

    return {
        price: values.price,
        currency: values.currency,
        totalDuration: values.duration,
        deepLink: values.deep_link,
        totalDistance:
            values.route.reduce((sum, route) => {
                return route.distance + sum;
            }, 0),
        routes: result2,
    }
};

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
