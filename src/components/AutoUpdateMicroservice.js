import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AutoUpdateMicroservice extends Component {
    state = {
        password: '',
        date: ''
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
            date: this.state.date
        });
    }

    handleDateChange = (e) => {
        let date = new Date(e.target.value);

        this.setState({
            date: `${date.getMonth() + 1}/${date.getUTCDate()}/${date.getYear() - 100}`,
            password: this.state.password

        })
        

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch("https://1bn84nmly5.execute-api.us-east-1.amazonaws.com/test/sheet_update", // get API Endpoints
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state)
            }
        )
        .then(resp => resp.json())
        .then(obj => { 
            console.log(obj)
            alert("Spreadsheet updated successfully!");
        })
        .catch(error => {
            console.log(error)
            alert("Incorrect password. Please try again.");
        })
    }

    render() {
        return (
            <React.Fragment>
                <h4>Auto-Update Microservice</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control onChange={this.handlePasswordChange} type="password" placeholder="Your Microservice Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" onChange={this.handleDateChange} name="graphDate"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        );
    }
}

export default AutoUpdateMicroservice;