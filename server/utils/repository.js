const fetch = require("node-fetch");
const httpBuildQuery = require("./httpBuildQuery");
const {apiKey, url} = require("./constants");

const headers = {
    apiKey
};

module.exports = {
    getLocationsBox: async function (parameters) {
        const query = httpBuildQuery(parameters);
        const response = await fetch(`${url}/locations/box${query}`, {
            headers
        });

        return response.json();
    },
    nomad: async function (parameters, body) {
        const query = httpBuildQuery(parameters);
        const response = await fetch(`${url}/v2/nomad${query}`, {
            method: 'POST',
            headers,
            body:JSON.stringify(body)
        });

        return response.json();
    },

    getLocationByCityId: async function (parameters) {
        const query = httpBuildQuery(parameters);
        const response = await fetch(`${url}/locations/query${query}`, {
            method: 'GET',
            headers
        });
        return response.json();
    }
};