// @flow
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import decorator from './decorator';

setAddon(infoAddon);
addDecorator(decorator);
setDefaults({ inline: true });
setOptions({
  name: 'mcs-ui',
  url: 'https://github.com/Mediatek-Cloud/mcs-ui',
  sortStoriesByKind: true,
});

// $FlowFixMe
const context = require.context('../src/', true, /\.example\.js$/);
function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
