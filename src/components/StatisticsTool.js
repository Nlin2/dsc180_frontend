import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class StatisticsTool extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>
                    Statistics Tool
                </h3>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Password:
                        </Form.Label>
                        <Form.Control type="password" placeholder="Your Microservice Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Method: </Form.Label>
                        <Form.Control as="select">
                            <option>prediction</option>
                            <option>stats</option>
                            <option>autocorrelation</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default StatisticsTool;