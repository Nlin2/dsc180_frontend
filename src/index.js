import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import AutoUpdateMicroservice from './components/AutoUpdateMicroservice';
import ManholeGraph from './components/ManholeGraph';
import StatisticsTool from './components/StatisticsTool';
import { Row, Col } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    <div className = "toolContainer">
      <h3>RTL Research Tools</h3>
      <Row>
        <Col>
          <div className = "tool">
            <AutoUpdateMicroservice />
          </div>
          <br/>
          <div className = "tool">
            <StatisticsTool />
          </div>
        </Col>
        <br/>
        <Col>
          <div className = "tool">
            <ManholeGraph />
          </div>
        </Col>
      </Row>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
