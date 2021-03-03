import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

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
        fetch("google.com", // get API Endpoints
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state)
            }
        )
        .then(resp => console.log(resp))
        .err(err => console.log(err))
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