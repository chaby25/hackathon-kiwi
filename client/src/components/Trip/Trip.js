import React from 'react';
import styled from 'styled-components';
import DestinationCard from '@kiwicom/orbit-components/es/DestinationCard/index';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
`;

const destinationCard = {
    width: '150px',
    maxHeight: '150px',
}

class Trip extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.destinations)
    }

    render() {
        return (
            <Container>
                {this.props.destinations.map((destination, index) => {
                    if(index=== 0) return;
                    return (<DestinationCard
                        key={index}
                        style={destinationCard}
                        destinationCity={destination.name}
                        destinationCountry={destination.departure_hour}
                        image="united-kingdom"
                        outbound={{text: 'One-way'}}
                    />)
                })}

            </Container>
        );
    }
}

export default Trip;
