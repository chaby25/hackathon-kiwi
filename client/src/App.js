import React, { useState } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';
import ResultMap from "./components/Map/ResultMap/ResultMap";
import SearchForm from './components/SearchForm/SearchForm';

const destinations = [
    {
        "name": "Palma, Majorca",
        "order": 2,
        "geolocation": {
            "lat": 39.551667,
            "lon": 2.738889
        }
    },
    {
        "name": "Madrid",
        "order": 3,
        "geolocation": {
            "lat": 40.493611,
            "lon": -3.566667
        }
    },
    {
        "name": "Porto",
        "order": 4,
        "geolocation": {
            "lat": 41.235556,
            "lon": -8.678056
        }
    },
    {
        "name": "Lisbon",
        "order": 5,
        "geolocation": {
            "lat": 38.774167,
            "lon": -9.134167
        }
    },
    {
        "name": "Barcelona",
        "order": 6,
        "geolocation": {
            "lat": 41.296944,
            "lon": 2.078333
        }
    }
];

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
