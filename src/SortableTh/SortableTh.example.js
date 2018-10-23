// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SortableTh from '.';

storiesOf('SortableTh', module).add(
  'API',
  () => (
    <React.Fragment>
      <SortableTh active={false} isAsc={false}>
        children
      </SortableTh>
      <SortableTh active isAsc={false}>
        children
      </SortableTh>
      <SortableTh active isAsc>
        children
      </SortableTh>
    </React.Fragment>
  ),
  {
    info: {
      text: 'Default',
      inline: true,
      source: false,
    },
  },
);
