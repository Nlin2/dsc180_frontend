import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class StatisticsTool extends Component {
    state = {
        password: '',
        method: 'prediction'
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
            method: this.state.method
        });
    }

    handleMethodChange = (e) => {
        this.setState({
            password: this.state.password,
            method: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        fetch("https://4jzevgh86d.execute-api.us-east-1.amazonaws.com/default/StatsAPI", // get API Endpoints + Access-Control-Allow-Origin
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state)
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <h3>
                    Statistics Tool
                </h3>
                
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Password 
                                </Form.Label>
                                <Form.Control onChange={this.handlePasswordChange} type="password" placeholder="Your Microservice Password" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Choose method</Form.Label>
                                <Form.Control as="select" onChange={this.handleMethodChange}>
                                    <option value="prediction">Predictions</option>
                                    <option value="stats">Statistics</option>
                                    <option value="autocorrelation">Autocorrelations</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default StatisticsTool;