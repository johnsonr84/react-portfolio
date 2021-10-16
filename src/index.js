import React from 'react';
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

