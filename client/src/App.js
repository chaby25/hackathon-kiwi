import React, { useState } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';

const destinations =[{lat: 41.388973, lon: 2.091430, name: '1. Barcelona'},{ lat: 51.527450, lon: -0.352946, name: '2. London'}];

function App() {
    const [geolocations, setGeolocations] = useState(0);

    console.log(geolocations)

    return (
        <div>
            {geolocations}
            <SelectorMap
                destinations={destinations}
                handleGeolocation={(geolocation) => {
                    setGeolocations(geolocations + 1)
                }}
            />
        </div>
    );
}

export default App;
