import React, { useState, useEffect } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';
import ResultMap from "./components/Map/ResultMap/ResultMap";
import SearchForm from './components/SearchForm/SearchForm';
import styled from 'styled-components';
import httpBuildQuery from "./httpBuildQuery";
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane";
import Button from '@kiwicom/orbit-components/es/Button/index';
import Invoice from '@kiwicom/orbit-components/es/icons/Invoice';

const Page = styled.div`
    display:flex;
    height: 100vh;
    background: black;
    padding: 60px 100px;
`;

const FinalPage = styled.div`
    display:flex;
    height: 100vh;
    background: black;
    padding: 30px;
    justify-content: space-around;
    overflow: hidden;
`;


const Result = styled.div`
    background: white;
    flex: 0 0 45%;
    padding: 30px 30px 50px 30px;
    transition: 1s all;
    transform: scale(1) ${(props) => `rotate(${-5 + 20 * props.number}deg)`};
    z-index: 1;
    :hover {
        transform: scale(1.1) ${(props) => `rotate(${-10 + 15 * props.number}deg)`};
    }
`;

const TripInfo = styled.div`
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TequilaColor = {
    color: 'red'
};

function App() {
    const [geolocations, setGeolocations] = useState(null);
    const [trips, setTrips] = useState(null);
    const [searchFormData, setSearchData] = useState(null);

    const addGeolocation = (low_lat, low_lon, high_lat, high_lon) => {
        setGeolocations({low_lat, low_lon, high_lat, high_lon})
    };

    useEffect(() => {
        if (geolocations === null || searchFormData === null) {
            return undefined;
        }

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
            });
    }, [searchFormData, geolocations]);

    if (searchFormData === null) {
        return (
            <SearchForm handleSearchForm={setSearchData}/>
        )
    }

    if (trips !== null) {
        console.log(trips);
        return (
            <FinalPage>
                {trips.map((trip, index) => (
                    <Result key={index} number={index}>
                        <ResultMap destinations={trip.routes} number={index}/>
                        <TripInfo><div><Airplane style={TequilaColor}/>{trip.totalDistance} km</div>  <div>{trip.totalDuration}</div>  <div>{trip.price} {trip.currency}</div>

                            <Button
                                href={trip.deepLink}
                                external={false}
                                size="normal"
                                disabled={false}
                                bordered
                                iconLeft={<Invoice/>}
                            > &nbsp;&nbsp;
                                Buy now
                            </Button>
                        </TripInfo>
                    </Result>
                ))}
            </FinalPage>
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
