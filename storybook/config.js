import { configure, addDecorator } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import containerDecorator from './container-decorator';
import viewports from './viewports.json';

const req = require.context('../src', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configureViewport({
  viewports,
  defaultViewport: 'fhd'
});

addDecorator(containerDecorator);
configure(loadStories, module);
