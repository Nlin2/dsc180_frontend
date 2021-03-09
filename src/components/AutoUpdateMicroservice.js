import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AutoUpdateMicroservice extends Component {
    state = {
        password: '',
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://4jzevgh86d.execute-api.us-east-1.amazonaws.com/default/sheet_update", // get API Endpoints
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
            alert("Spreadsheet updated successfully!")
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