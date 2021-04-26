import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement('div', null, 'Hello React!'),
    document.body.appendChild(document.createElement('div')),
  );
});