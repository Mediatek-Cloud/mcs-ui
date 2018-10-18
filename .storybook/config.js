// @flow
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import decorator from './decorator';

addDecorator(decorator);
addDecorator(withInfo({ inline: true }));
addDecorator(
  withOptions({
    name: 'mcs-ui',
    url: 'https://github.com/Mediatek-Cloud/mcs-ui',
    sortStoriesByKind: true,
  }),
);

// $FlowFixMe
const context = require.context('../src/', true, /\.example\.js$/);
function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
