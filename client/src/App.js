import React, { useState } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';
import ResultMap from "./components/Map/ResultMap/ResultMap";
import SearchForm from './components/SearchForm/SearchForm';
import styled from 'styled-components';

const Page = styled.div`
`;


function App() {
    const [geolocations, setGeolocations] = useState([]);

    const addGeolocation = (lon, lat) => {
        setGeolocations(geolocations.concat({lon, lat}))
    };

    if (geolocations.length === 2) {
        console.log(geolocations)
        return 'HAHA SALUDOS'
    }


    return (
        <Page>
            <SearchForm handleSearchForm={(searchFormData) => {
                getGeolocations(searchFormData);
            }}/>
            <SelectorMap
                handleGeolocation={addGeolocation}
            />
        </Page>
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
