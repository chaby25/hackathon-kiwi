import React, { Component } from 'react';
import './App.css';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from '@kiwicom/orbit-components/es/Button/index';

class App extends Component {
    constructor() {
        super();
        this.state = {origin: 'Barcelona', number_persons: '', departure_date: '', outward_date: ''};
    }

    render() {
        return (
            <div>
                <div className="form-group">
                        <InputField
                            label="Origin"
                        />
                        <InputField
                            label="Number of persons"
                            type="number"
                            placeholder="Number of persons"
                        />
                        <InputField
                            label="Departure date"
                            type="date"
                        />
                        <InputField
                            label="Outward date"
                            type="date"
                        />
                    <Button onClick={this.search}
                            block={false}
                            type="primary"
                            size="normal">
                        Search
                    </Button>
                </div>
            </div>
        );
    }

    search = () => {
        console.log('search')
    }
}

export default App;
