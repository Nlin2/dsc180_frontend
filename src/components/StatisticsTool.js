import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';

class StatisticsTool extends Component {
    state = {
        password: '',
        method: 'prediction',
        rows: ''
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
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
 

        
        if (this.state['password'] === '') {
            alert("Please enter all fields!")
            return;
        }

        fetch("https://1bn84nmly5.execute-api.us-east-1.amazonaws.com/test/StatsAPI",//https://4jzevgh86d.execute-api.us-east-1.amazonaws.com/default/StatsAPI", // get API Endpoints + Access-Control-Allow-Origin
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state)
            }
        )
        .then(resp => resp.json())
        .then(obj => {
            //console.log(obj[0][0]);
            //console.log(obj[0][1]);

            if (this.state.method === 'prediction') {

                this.setState({
                    rows: obj.map(row => <tr key={row}>{row.map(col => <td key={col}>{col}</td>)}</tr>)
                });

                const Results = () => (
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Location</th>
                                    <th>Prediction</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state['rows']}
                            </tbody>
                        </Table>
                    </div>
                )
                ReactDOM.render(<Results />, document.querySelector("#tableContainer"))
            } else if (this.state.method === 'stats') {

                let buildings = Object.keys(obj).map(location => 
                    <tr key={location}>
                        <td key = "location">{location}</td>
                        <td key = "cases">{obj[location]}</td>
                    </tr>);

                const Results = () => (
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Location</th>
                                    <th># of Cases</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buildings}
                            </tbody>
                        </Table>
                    </div>
                )
                ReactDOM.render(<Results />, document.querySelector("#tableContainer"))

            } else if (this.state.method === 'autocorrelation') {
                
                let values = obj.map(row => <tr key = {row}><td key = "location">{row[1]}</td><td key = "autocorrelation">{row[0]}</td></tr>)

                const Results = () => (
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Location</th>
                                    <th>Autocorrelation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {values}
                            </tbody>
                        </Table>
                    </div>
                )
                ReactDOM.render(<Results />, document.querySelector("#tableContainer"))
            }



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
                    Statistics Tool
                </h4>

                <div className = "loginForms">
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
                </div>

                <div id='tableContainer'></div>
                
                      
            </React.Fragment>
        )
    }
}

export default StatisticsTool;