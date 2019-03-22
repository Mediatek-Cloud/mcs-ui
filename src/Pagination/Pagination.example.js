// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '.';

storiesOf('Pagination', module)
  .add(
    'API',
    () => <Pagination pages={10} value={1} onChange={action('onChange')} />,
    {
      info: {
        text: ``,
        inline: true,
        source: false,
      },
    },
  )
  .add(
    '1 page',
    () => <Pagination pages={1} value={1} onChange={action('onChange')} />,
    {
      info: {
        text: ``,
        inline: true,
        source: false,
      },
    },
  )
  .add(
    '5 pages',
    () => <Pagination pages={5} value={3} onChange={action('onChange')} />,
    {
      info: {
        text: ``,
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'useState',
    () => {
      const StatefulPagination = () => {
        const [value, setValue] = React.useState(1);
        const onChange = setValue;

        return <Pagination pages={10} value={value} onChange={onChange} />;
      };
      return <StatefulPagination />;
    },
    {
      info: {
        text: ``,
        inline: true,
        source: false,
      },
    },
  );
