import React from 'react';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from '@kiwicom/orbit-components/es/Button/index';
import styled from 'styled-components';

const FormGroup = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  height: 90px;
  width: 100%;
`;

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {origin: '', number_of_persons: null, departure_date: '', outward_date: ''}
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <InputField
                        name="origin"
                        label="Origin"
                        onChange={this.onSearchFormChange}
                    />
                    <InputField
                        name="number_of_persons"
                        label="Number of persons"
                        type="number"
                        placeholder="Number of persons"
                        onChange={this.onSearchFormChange}
                    />
                    <InputField
                        name="departure_date"
                        label="Departure date"
                        type="date"
                        onChange={this.onSearchFormChange}
                    />
                    <InputField
                        name="outward_date"
                        label="Outward date"
                        type="date"
                        onChange={this.onSearchFormChange}
                    />
                    <Button onClick={() => {
                        this.props.handleSearchForm(
                            {
                                origin: this.state.origin,
                                number_of_persons: this.state.number_of_persons,
                                departure_date: this.state.departure_date,
                                outward_date: this.state.outward_date
                            })
                        }}
                            block={false}
                            type="primary"
                            size="normal">
                        Search
                    </Button>
                </FormGroup>
            </div>
        );
    }

    onSearchFormChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
}

export default SearchForm;
