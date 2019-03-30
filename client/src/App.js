import React, { useState, useEffect } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';
import ResultMap from "./components/Map/ResultMap/ResultMap";
import SearchForm from './components/SearchForm/SearchForm';
import styled from 'styled-components';
import httpBuildQuery from "./httpBuildQuery";
import Trip from './components/Trip/Trip';

const Page = styled.div`
    display:flex;
`;


function App() {
    const [geolocations, setGeolocations] = useState([]);
    const [trips, setTrips] = useState(null);
    const [searchFormData, setSearchData] = useState(null);

    const addGeolocation = (lon, lat) => {
        setGeolocations(geolocations.concat({lon, lat}))
    };

    useEffect(() => {
        if (geolocations.length < 2 || searchFormData === null) {
            return undefined;
        }

        const query = httpBuildQuery({
            origin: searchFormData.origin,
            number_of_persons: searchFormData.number_of_persons,
            departure_date: searchFormData.departure_date,
            outward_date: searchFormData.outward_date,
            low_lat: geolocations[0].lat,
            low_lon: geolocations[0].lon,
            high_lat: geolocations[1].lat,
            high_lon: geolocations[1].lon
        });

        fetch(`http://localhost:8080/api${query}`)
            .then(res => res.json())
            .then((data) => {
                setTrips(data);
            });
    }, [searchFormData, geolocations]);

    if (searchFormData === null) {
        return (
            <SearchForm handleSearchForm={setSearchData} />
        )
    }

    if (trips !== null) {
        return (
            <Page>
                {trips.map((trip, index) => {
                    console.log(trip);
                    return (
                        <div key={index}>
                            <ResultMap destinations={trip.routes} />
                            <Trip destinations={trip.routes}/>
                        </div>
                    )
                })}}
            </Page>
        )
    }

    return (
        <Page>
            <SelectorMap
                handleGeolocation={addGeolocation}
            />
        </Page>
    );
}

export default App;
