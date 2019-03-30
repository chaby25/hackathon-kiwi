import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import {useState} from 'react';
import React, {useRef, useEffect} from 'react'
import styled from "styled-components"

mapboxgl.accessToken =
    "pk.eyJ1Ijoic2VyZ2lueXUiLCJhIjoiY2p0dXA5YnRqMWFzYzQzbDgxYzZkdGc2NyJ9.Wxd6O5fgDCcAqdA1fwNqCg"

const MapWrapper = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
`

function SelectorMap() {
    const mapRef = useRef(null);
    const [mapObject, setMapObject] = useState();

    useEffect(() => {
        console.log(mapRef.current)
        setMapObject(
            new mapboxgl.Map({
                container: mapRef.current,
                style: "mapbox://styles/mapbox/streets-v9",
            })
        )
    }, [])

    useEffect(
        () => {
            if (!mapObject) {
                return undefined
            }
        },
        [mapObject]
    )

    return <MapWrapper ref={mapRef}/>;
}

export default SelectorMap
