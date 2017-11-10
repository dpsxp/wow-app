import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import rxjsconfig from 'recompose/rxjsObservableConfig';
import { setObservableConfig } from 'recompose';
setObservableConfig(rxjsconfig)

const main = document.querySelector('#main')

function render(Component) {
  ReactDOM.render(<Component />, main);
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/app.js', () => {
    render(App)
  })
}
