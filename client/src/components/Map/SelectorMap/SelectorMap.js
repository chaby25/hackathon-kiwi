import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import {useState} from 'react';
import React, {useRef, useEffect} from 'react'
import styled from "styled-components"

mapboxgl.accessToken =
    "pk.eyJ1Ijoic2VyZ2lueXUiLCJhIjoiY2p0dXA5YnRqMWFzYzQzbDgxYzZkdGc2NyJ9.Wxd6O5fgDCcAqdA1fwNqCg"

const MapWrapper = styled.div`
  height: 100vh;
  width: 100vw;
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

    useEffect(
        () => {
            if (!mapObject) {
                return undefined
            }

            const onClick = ({lngLat}) => {
                handleGeolocation(lngLat.lng, lngLat.lat)
            };

            mapObject.on('click', onClick);

            return () => {
                mapObject.off('click', onClick);
            };
        },
        [mapObject, handleGeolocation]
    );

    return <MapWrapper ref={mapRef} />;
}

export default SelectorMap
