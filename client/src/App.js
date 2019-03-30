import React, { useState } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';
import ResultMap from "./components/Map/ResultMap/ResultMap";

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
    return (
        <div>
            <SelectorMap
                destinations={destinations}
            />
        </div>
    );
}

export default App;
