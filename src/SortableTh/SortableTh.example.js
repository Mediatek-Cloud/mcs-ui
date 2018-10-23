// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SortableTh from '.';
import Table from '../Table';

storiesOf('SortableTh', module).add(
  'API',
  () => (
    <Table>
      <thead>
        <tr>
          <SortableTh active={false} isAsc={false}>
            children
          </SortableTh>
          <SortableTh active isAsc={false}>
            children
          </SortableTh>
          <SortableTh active isAsc>
            children
          </SortableTh>
        </tr>
      </thead>
    </Table>
  ),
  {
    info: {
      text: 'Default',
      inline: true,
      source: false,
    },
  },
);
