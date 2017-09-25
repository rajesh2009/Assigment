import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import FilterComponent from './src/filter';

// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors


var destination = document.getElementById('app');

ReactDOM.render(<FilterComponent/>, destination)