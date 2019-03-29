
// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var getLocationsBox = require('./getLocationsBox');
var nomad = require('./nomad');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', async function(req, res) {
    //get Locations
    await getLocationsBox('1', '2',3,4);


    // once we have the locations, call nomad && multi_city




    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


(async function f() {
    const locations = await getLocationsBox(
        '36.27',
        '-13.44',
        '42.96',
        '5.15',
        5
    );

    console.log(locations.map((location) => location.code))
    nomad('HEL', '01/06/2019','25/06/2019',2, 'price',locations.map((location) => location.code));
    nomad('HEL', '01/06/2019','25/06/2019',2, 'quality',locations.map((location) => location.code));

    //nomad('BCN', '01/06/2019','15/06/2019',2, 'price');

})();
