// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import HTML from '.';

const html = `<p><em>這是斜體文字</em></p> <p><del>這是刪除文字</del></p>`;

storiesOf('HTML', module).add('API', () => <HTML html={html} />, {
  info: {
    text: 'user dangerouslySetInnerHTML',
    inline: true,
    source: false,
  },
});
