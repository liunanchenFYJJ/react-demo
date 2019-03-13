import React from 'react';
import { render } from 'react-dom';
import APP from './APP'

const rootElement = document.querySelector('#app');

if (rootElement) {
    render(<APP />, rootElement);
}