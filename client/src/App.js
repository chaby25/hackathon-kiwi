import React, { Component } from 'react';
import './App.css';
import SelectorMap from './components/Map/SelectorMap';
import CustomDestinationCard from './components/DestinationCard/CustomDestinationCard';

class App extends Component {

    render() {
        return (
            <div>
                <CustomDestinationCard/>
            </div>
        );
    }
}

export default App;
