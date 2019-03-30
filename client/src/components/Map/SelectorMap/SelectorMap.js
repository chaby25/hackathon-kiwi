import ReactMapboxGl from "react-mapbox-gl";
import { Component } from 'react';
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

class SelectorMap extends Component {
    render() {
        return (
            <MapWrapper>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    zoom={[5]}
                    onClick={(map, event) => {console.log(event.lngLat)}}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    {this.props.destinations.map((destination) => {
                        return (
                            <Marker
                                key={destination.name}
                                coordinates={[destination.lon, destination.lat]}
                                anchor="bottom">
                                <KiwiMarker location={destination.name}/>
                            </Marker>
                        )
                    })}
                </Map>
            </MapWrapper>
        );
    }
}

export default SelectorMap
