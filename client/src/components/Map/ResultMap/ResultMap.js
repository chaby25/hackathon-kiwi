import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import {useState} from 'react';
import React, {useRef, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"
import KiwiMarker from "@kiwicom/orbit-components/lib/Marker"

mapboxgl.accessToken =
    "pk.eyJ1Ijoic2VyZ2lueXUiLCJhIjoiY2p0dXA5YnRqMWFzYzQzbDgxYzZkdGc2NyJ9.Wxd6O5fgDCcAqdA1fwNqCg"

const MapWrapper = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
`


function SelectorMap({destinations}) {
    const mapRef = useRef(null)
    const [mapObject, setMapObject] = useState()

    useEffect(() => {
        setMapObject(
            new mapboxgl.Map({
                container: mapRef.current,
                style: "mapbox://styles/mapbox/streets-v9",
                dragRotate: false,
                minZoom: 5,
                maxZoom: 10,
                center: [44.723478511795065,6.718507093716255]
            })
        )
    }, [])

    useEffect(
        () => {
            if (!mapObject) {
                return undefined
            }

            const markers = destinations.map(destination => {
                const el = document.createElement("div")

                const marker = new mapboxgl.Marker(el)
                marker
                    .setLngLat(new mapboxgl.LngLat(
                        destination.geolocation.lon,
                        destination.geolocation.lat
                    ))
                    .setOffset(new mapboxgl.MercatorCoordinate(0,-25))
                    .addTo(mapObject);

                setTimeout(() => {
                    ReactDOM.render(
                        <div><KiwiMarker location={`${destination.order-1} - ${destination.name}`}/></div>,
                        el
                    )
                });

                return marker
            });

            const bounds = new mapboxgl.LngLatBounds()


            destinations.forEach(destination => {
                bounds.extend([
                    destination.geolocation.lon,
                    destination.geolocation.lat
                ])
            })

            mapObject.fitBounds(bounds, {
                padding: {top: 100, bottom: 100, left: 100, right: 100}
            })

            return () => {
                markers.forEach(marker => {
                    marker.remove()
                })
            }
        },
        [JSON.stringify(destinations), mapObject]
    );

    return <MapWrapper ref={mapRef}/>;
}

export default SelectorMap
