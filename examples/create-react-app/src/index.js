import React from 'react';
import { hydrate, render } from 'react-dom';
import { loadComponents } from "loadable-components";
import { getState } from "loadable-components/snap";
import Index from './pages/index';

window.snapSaveState = () => getState();

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  loadComponents().then(() => {
    hydrate(<Index />, rootElement);
  });
} else {
  render(<Index />, rootElement);
}
