import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './Router/App';
import './Styles/main.scss';
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);