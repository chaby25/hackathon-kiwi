import React, { Component } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap/SelectorMap';

class App extends Component {

    render() {
        return (
            <div>
                <SelectorMap destinations={[{lat: 41.388973, lon: 2.091430, name: '1. Barcelona'},{ lat: 51.527450, lon: -0.352946, name: '2. London'}]}/>
            </div>
        );
    }
}

export default App;
