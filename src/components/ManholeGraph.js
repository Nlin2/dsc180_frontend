import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ManholeGraph extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>
                    Manhole Graph Visualizer
                </h3>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Your Microservice Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Graph Date</Form.Label>
                        <Form.Control type="date" name="graphDate"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mode</Form.Label>
                        <Form.Control type="text" name="graphMode" placeholder="i.e. update"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default ManholeGraph;