import React, { useState, useEffect } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';
import ResultMap from "./components/Map/ResultMap/ResultMap";
import SearchForm from './components/SearchForm/SearchForm';
import styled from 'styled-components';
import httpBuildQuery from "./httpBuildQuery";
import Search from "@kiwicom/orbit-components/lib/icons/Search";

const Page = styled.div`
    display:flex;
    height: 100vh;
    background: black;
    padding: 60px 100px;
`;

const Loading = styled.div`
    position: fixed;
    top: 0;
    left:0;
    display:flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0,0,0,.6);
`;

const IconContainer = styled.div`
    color: #00A991;
    transition: 1s all;
    @keyframes leaves {
        0% {
            transform: scale(3);
        }
        100% {
            transform: scale(7);
        }
    }
    animation: leaves 2s infinite alternate;
`;

const FinalPage = styled.div`
    display:flex;
    height: 100vh;
    background: black;
    padding: 20px;
    justify-content: space-around;
`;


const Result = styled.div`
    background: white;
    flex: 0 0 45%;
    padding: 30px 30px 50px 30px;
    transform: ${(props) => `rotate(${-5+20*props.number}deg)`};
    transition: 1s all;
    transform: scale(.9);
    z-index: 1;
    :hover {
        transform: scale(1);
    }
`;

function App() {
    const [geolocations, setGeolocations] = useState(null);
    const [trips, setTrips] = useState(null);
    const [searchFormData, setSearchData] = useState(null);
    const [loading, setLoading] = useState(false);

    const addGeolocation = (low_lat, low_lon, high_lat, high_lon) => {
        setGeolocations({low_lat, low_lon, high_lat, high_lon})
    };

    useEffect(() => {
        if (geolocations === null || searchFormData === null) {
            return undefined;
        }
        setLoading(true);

        const {low_lat, low_lon, high_lat, high_lon} = geolocations;

        const query = httpBuildQuery({
            origin: searchFormData.origin,
            number_of_persons: searchFormData.number_of_persons,
            departure_date: searchFormData.departure_date,
            outward_date: searchFormData.outward_date,
            low_lat,
            low_lon,
            high_lat,
            high_lon
        });

        fetch(`http://localhost:8080/api${query}`)
            .then(res => res.json())
            .then((data) => {
                setTrips(data);
                setLoading(false);
            });
    }, [searchFormData, geolocations]);

    if (searchFormData === null) {
        return (
            <SearchForm handleSearchForm={setSearchData} />
        );
    }

    if (trips !== null) {
        return (
            <FinalPage>
                {trips.map((trip, index) => (
                    <Result key={index} number={index}>
                        <ResultMap destinations={trip.routes} number={index} />
                    </Result>
                ))}
            </FinalPage>
        )
    }

    return (
        <>
            <Page>
                <SelectorMap
                    handleGeolocation={addGeolocation}
                />
            </Page>
            {loading && (
                <Loading>
                    <IconContainer>
                        <Search size="large" />
                    </IconContainer>
                </Loading>
            )}
        </>
    );
}

export default App;
