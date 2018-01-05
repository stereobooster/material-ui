import React from 'react';
import { hydrate, render } from 'react-dom';
import { loadComponents } from 'loadable-components';
import { getState } from 'loadable-components/snap';
import Index from './pages/index';

const app = <Index />;
const rootElement = document.getElementById('root');

loadComponents().then(() => {
  render(app, rootElement, () => {
    Array.from(document.querySelectorAll('[data-jss-snap]')).forEach(elem =>
      elem.parentNode.removeChild(elem),
    );
  });
});

window.snapSaveState = () => {
  Array.from(document.querySelectorAll('[data-jss]')).forEach(elem =>
    elem.setAttribute('data-jss-snap', ''),
  );
  return getState();
};
