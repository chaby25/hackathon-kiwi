import React, { Component, createRef } from 'react'
import Map from 'react-leaflet/es/Map';
import TileLayer from 'react-leaflet/es/TileLayer';
import Popup from 'react-leaflet/es/Popup';
import Marker from 'react-leaflet/es/Marker';
import './Map.css';

class SelectorMap extends Component {

    constructor() {
        super();
        this.state = {
            center: {
                lat: 41.933658,
                lng: 2.242182,
            },
            marker: {
                lat: 51.505,
                lng: -0.09,
            },
            zoom: 8,
            draggable: true
        }
    }

    toggleDraggable = () => {
        this.setState({ draggable: !this.state.draggable })
    }

    updatePosition = () => {
        const marker = this.refmarker.current
        if (marker != null) {
            this.setState({
                marker: marker.leafletElement.getLatLng(),
            })
        }
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng]
        const markerPosition = [this.state.marker.lat, this.state.marker.lng]

        return (
            <Map center={this.state.center} zoom={this.state.zoom} className="default-map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        )
    }
}

export default SelectorMap;
