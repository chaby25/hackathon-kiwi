import React, { Component } from 'react';
import DestinationCard from '@kiwicom/orbit-components/es/DestinationCard/index';

class CustomDestinationCard extends Component {

    render() {
        return (
            <div>
                <DestinationCard
                    departureCity="Prague"
                    destinationCity="Dubai"
                    destinationCountry="United Arab Emirates"
                    image="dubai_ae"
                    price="5,563 ?"
                    outbound={{text: 'One-way'}}
                />
            </div>
        );
    }
}

export default CustomDestinationCard;
