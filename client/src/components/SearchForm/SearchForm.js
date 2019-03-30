import React, {useState} from 'react';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
import Button from '@kiwicom/orbit-components/es/Button/index';
import styled from 'styled-components';

const FormGroup = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100vw;
`;

function SearchForm({handleSearchForm}) {
    const [origin, setOrigin] = useState(null);
    const [numberOfPersons, setNumberOfPersons] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [outwardDate, setOutwardDate] = useState(null);

    return (

        <FormGroup>
            <InputGroup
                flex={[
                    '1 1 70%',
                    '1 0 100px',
                    '1 0 80px',
                    '1 0 80px',
                ]}
            >
                <InputField
                    name="origin"
                    label="Origin"
                    onChange={setOrigin}
                />
                <InputField
                    name="number_of_persons"
                    label="Number of persons"
                    type="number"
                    placeholder="Number of persons"
                    onChange={setNumberOfPersons}
                />
                <InputField
                    name="departure_date"
                    label="Departure date"
                    type="date"
                    onChange={setDepartureDate}
                />
                <InputField
                    name="outward_date"
                    label="Outward date"
                    type="date"
                    onChange={setOutwardDate}
                />

            </InputGroup>
            <Button onClick={
                () => {
                    handleSearchForm({
                        origin,
                        number_of_persons: numberOfPersons,
                        departure_date: departureDate,
                        outward_date: outwardDate
                    })
                }}
                type="primary"
                size="normal"
            >
                    Search
            </Button>
        </FormGroup>
    );
}

export default SearchForm;
