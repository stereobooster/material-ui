import React from 'react';
import { hydrate, render } from 'react-dom';
import { loadComponents } from 'loadable-components';
import { getState } from 'loadable-components/snap';
import Index from './pages/index';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
const createGenerateClassName = () => {
  let counter = 0;
  return (rule, sheet) =>
    `c${Math.random()
      .toString(36)
      .substring(2, 4) +
      Math.random()
        .toString(36)
        .substring(2, 4)}-${rule.key}-${counter++}`;
};
const jss = create(preset());
// Custom Material-UI class name generator for better debug and performance.
jss.options.createGenerateClassName = createGenerateClassName;
const app = (
  <JssProvider jss={jss}>
    <Index />
  </JssProvider>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  loadComponents().then(() => {
    hydrate(app, rootElement);
  });
} else {
  render(app, rootElement);
}

window.snapSaveState = () => getState();
