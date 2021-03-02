import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AutoUpdateMicroservice from './components/AutoUpdateMicroservice';
import ManholeGraph from './components/ManholeGraph';
import StatisticsTool from './components/StatisticsTool';

ReactDOM.render(
  <React.StrictMode>
    <AutoUpdateMicroservice />
    <StatisticsTool />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
