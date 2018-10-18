// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';

storiesOf('Table', module).add(
  'API',
  () => (
    <Table style={{ backgroundColor: 'white' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>1</th>
          <td>Michael</td>
          <td>Hsu</td>
          <td>@evenchange4</td>
        </tr>
      </tbody>
    </Table>
  ),
  {
    info: {
      text: '',
      inline: true,
    },
  },
);
