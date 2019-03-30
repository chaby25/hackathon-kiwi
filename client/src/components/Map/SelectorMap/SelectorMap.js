import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import {useState} from 'react';
import React, {useRef, useEffect} from 'react'
import styled from "styled-components"
import Camera from "@kiwicom/orbit-components/lib/icons/Camera";

mapboxgl.accessToken =
    "pk.eyJ1Ijoic2VyZ2lueXUiLCJhIjoiY2p0dXA5YnRqMWFzYzQzbDgxYzZkdGc2NyJ9.Wxd6O5fgDCcAqdA1fwNqCg"

const MapWrapper = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
`;

const PositionCamera = styled.div`
  color: #00A991;
  position: absolute;
  transform: scale(1.5);
  padding-top: 10px;
`;

const Photo = styled.div`
    background: white;
    padding: 45px 45px 70px 45px;
    width: 100%;
    transform: rotate(2deg);
`;

function SelectorMap({handleGeolocation}) {
    const mapRef = useRef(null);
    const [mapObject, setMapObject] = useState();

    useEffect(() => {
        setMapObject(
            new mapboxgl.Map({
                container: mapRef.current,
                style: "mapbox://styles/mapbox/streets-v9",
                dragRotate: false,
                minZoom: 2,
                maxZoom: 10,
                zoom: 2,
                center: [2.1772,41.390]
            })
        )
    }, []);

    return (
        <Photo>
            <MapWrapper ref={mapRef} />
            <PositionCamera onClick={() => {
                const {_sw, _ne} = mapObject.getBounds();
                handleGeolocation(_sw.lat, _sw.lng, _ne.lat, _ne.lng);
            }}>
                <Camera size="large" />
            </PositionCamera>
        </Photo>
    );
}

export default SelectorMap
