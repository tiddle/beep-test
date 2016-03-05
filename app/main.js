/**
 * Created by Carlo on 02/03/16.
 */
import React from 'react';
import {render} from 'react-dom';
import Register from './components/register';

render(
    <Register url="/api/signup"/>,
    document.getElementById('content')
);