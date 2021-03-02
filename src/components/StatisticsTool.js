import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class StatisticsTool extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>
                    Statistics Tool
                </h3>
                
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Password 
                                </Form.Label>
                                <Form.Control type="password" placeholder="Your Microservice Password" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Choose method</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Prediction</option>
                                    <option>Stats</option>
                                    <option>Autocorrelation</option>
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