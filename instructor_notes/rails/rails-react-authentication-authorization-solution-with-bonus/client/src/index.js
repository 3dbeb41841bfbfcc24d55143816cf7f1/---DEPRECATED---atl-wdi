import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
  body {
    background-color: ghostwhite;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`