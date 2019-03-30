import React from 'react';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from '@kiwicom/orbit-components/es/Button/index';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 100vw;
  height: 100vh;
`;

const FormGroup = styled.div`
  width: 600px;
`;

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {origin: '', number_of_persons: null, departure_date: '', outward_date: ''}
    }

    render() {
        return (
            <Page>
                <FormGroup>
                    <InputField
                        name="origin"
                        label="Origin"
                        onChange={this.onSearchFormChange}
                    />
                    <br/>
                    <InputField
                        name="number_of_persons"
                        label="Number of persons"
                        type="number"
                        placeholder="Number of persons"
                        onChange={this.onSearchFormChange}
                    />
                    <br/>
                    <InputField
                        name="departure_date"
                        label="Departure date"
                        type="date"
                        onChange={this.onSearchFormChange}
                    />
                    <br/>
                    <InputField
                        name="outward_date"
                        label="Outward date"
                        type="date"
                        onChange={this.onSearchFormChange}
                    />
                    <br/>

                    <Button onClick={() => {
                        this.props.handleSearchForm(
                            {
                                origin: this.state.origin,
                                number_of_persons: this.state.number_of_persons,
                                departure_date: this.state.departure_date,
                                outward_date: this.state.outward_date
                            })
                    }}
                            type="primary"
                            size="normal"
                            block={true}
                    >
                        Search
                    </Button>
                </FormGroup>
            </Page>
        );
    }

    onSearchFormChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
}

export default SearchForm;
