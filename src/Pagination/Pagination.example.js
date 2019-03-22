// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '.';

storiesOf('Pagination', module)
  .add(
    '10 pages',
    () => (
      <div>
        <Pagination pages={10} value={1} onChange={action('onChange')} />
        <Pagination pages={10} value={2} onChange={action('onChange')} />
        <Pagination pages={10} value={3} onChange={action('onChange')} />
        <Pagination pages={10} value={4} onChange={action('onChange')} />
        <Pagination pages={10} value={5} onChange={action('onChange')} />
        <Pagination pages={10} value={6} onChange={action('onChange')} />
        <Pagination pages={10} value={7} onChange={action('onChange')} />
        <Pagination pages={10} value={8} onChange={action('onChange')} />
        <Pagination pages={10} value={9} onChange={action('onChange')} />
        <Pagination pages={10} value={10} onChange={action('onChange')} />
      </div>
    ),
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
    () => (
      <div>
        <Pagination pages={5} value={1} onChange={action('onChange')} />
        <Pagination pages={5} value={2} onChange={action('onChange')} />
        <Pagination pages={5} value={3} onChange={action('onChange')} />
        <Pagination pages={5} value={4} onChange={action('onChange')} />
        <Pagination pages={5} value={5} onChange={action('onChange')} />
      </div>
    ),
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
