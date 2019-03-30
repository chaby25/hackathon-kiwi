import ReactMapboxGl from "react-mapbox-gl";
import { useState } from 'react';
import React from 'react'
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"
import styled, { ThemeProvider } from "styled-components"
import { Marker } from "react-mapbox-gl";
import KiwiMarker from "@kiwicom/orbit-components/lib/Marker"

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoic2VyZ2lueXUiLCJhIjoiY2p0dXA5YnRqMWFzYzQzbDgxYzZkdGc2NyJ9.Wxd6O5fgDCcAqdA1fwNqCg",
    minZoom: 0,
    maxZoom: 7,
    dragPan: true
});

const MapWrapper = styled.div`
  position: absolute;
  top: 90px;
  display: block;
  height: calc(100% - 180px);
  width: 66%;
`;

function SelectorMap({handleGeolocation}) {
    return (
        <MapWrapper>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                zoom={[5]}
                onClick={(map, {lngLat}) => {
                    handleGeolocation({lat: lngLat.lat, lon: lngLat.lng})
                }}
                containerStyle={{
                    height: "100%",
                    width: "100vw"
                }}>
            </Map>
        </MapWrapper>
    );
}

export default SelectorMap
