import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AutoUpdateMicroservice extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Auto-Update Microservice</h3>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Password:
                        </Form.Label>
                        <Form.Control type="password" placeholder="Your Microservice Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="aumFile" label="Excel File"></Form.File>
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