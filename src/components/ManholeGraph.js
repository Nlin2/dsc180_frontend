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

        let date = e.target.value;

        this.setState({
            password: this.state.password,
            date: `${date.getMonth() + 1}/${date.getUTCDate()}/${date.getYear() - 100}`,
            mode: this.state.mode
        })
        console.log(this.state)
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
        fetch("https://1bn84nmly5.execute-api.us-east-1.amazonaws.com/test/traceAPI", // get API Endpoints + Access-Control-Allow-Origin
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
            alert("Graph updated successfully!")
        })
        .catch(error => {
            console.log(error);
            alert("Incorrect password. Please try again.");
        })
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
                        <Form.Control type="password" onChange={this.handlePasswordChange} placeholder="Your Microservice Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Graph Date</Form.Label>
                        <Form.Control type="date" onChange={this.handleDateChange} name="graphDate"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mode</Form.Label>
                        <Form.Control type="text" name="graphMode" onChange={this.handleModeChange} value="update" placeholder="i.e. update"/>
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