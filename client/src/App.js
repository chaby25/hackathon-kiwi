import React, { useState } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';
import SearchForm from './components/SearchForm/SearchForm';

const destinations = [{lat: 41.388973, lon: 2.091430, name: '1. Barcelona'}, {
    lat: 51.527450,
    lon: -0.352946,
    name: '2. London'
}];

function App() {
    const [geolocations, setGeolocations] = useState(0);

    console.log(geolocations)

    return (
        <div>
            <SearchForm handleSearchForm={(searchFormData) => {
                getGeolocations(searchFormData);
            }}/>
            <SelectorMap
                destinations={destinations}
                handleGeolocation={(geolocation) => {
                    setGeolocations(geolocations + 1)
                }}
            />
        </div>
    );
}

function getGeolocations(searchFormData) {
    console.log(searchFormData);
    fetch(`http://localhost:8080/api?origin=${searchFormData.origin}&number_of_persons=${searchFormData.number_of_persons}&departure_date=${searchFormData.departure_date}&outward_date=${searchFormData.outward_date}`)
        .then(res => res.json())
        .then((data) => {
                console.log(data)
            }
        );
}

export default App;
