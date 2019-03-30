import React from 'react';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from '@kiwicom/orbit-components/es/Button/index';
import styled from 'styled-components';
import {DateRangePicker} from "react-dates";

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
        this.state = {origin: '', number_of_persons: null, startDate: null, endDate: null}
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
                        onChange={this.onSearchFormChange}
                    />
                    <br/>

                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        block={true}
                    />
                    <br/>

                    <Button onClick={() => {
                        this.props.handleSearchForm(
                            {
                                origin: this.state.origin,
                                number_of_persons: this.state.number_of_persons,
                                departure_date: this.state.startDate.format('YYYY-MM-DD'),
                                outward_date: this.state.endDate.format('YYYY-MM-DD')
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
