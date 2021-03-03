import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ManholeGraph extends Component {
    state = {
        password: '',
        date: '',
        mode: 'update'
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
            date: this.state.date,
            mode: this.state.mode
        });
    }

    handleDateChange = (e) => {
        this.setState({
            password: this.state.password,
            date: e.target.value, // What does the date format have to be? D/MM?
            mode: this.state.mode
        })
    }

    handleModeChange = (e) => {
        this.setState({
            password: this.state.password,
            date: this.state.date,
            mode: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        fetch("https://4jzevgh86d.execute-api.us-east-1.amazonaws.com/default/traceAPI", // get API Endpoints + Access-Control-Allow-Origin
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
                <h4>
                    Manhole Graph Visualizer
                </h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Your Microservice Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Graph Date</Form.Label>
                        <Form.Control type="date" onChange={this.handleDateChange} name="graphDate"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mode</Form.Label>
                        <Form.Control type="text" name="graphMode" onChange={this.handleModeChange} placeholder="i.e. update"/>
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