// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputOrder from '.';
import { type Value } from './Item';
import Checkbox from '../Checkbox';

class StatefulInputOrder extends React.Component<{}, { value: Array<Value> }> {
  state = { value: [] };

  onChange = (value: Array<Value>) => this.setState(() => ({ value }));

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return (
      <InputOrder
        value={value}
        items={[
          { value: 1, children: 'item name 1' },
          { value: 2, children: 'item name item name item name 2' },
          { value: 3, children: 'item name 3' },
          { value: 4, children: 'item name 4' },
          { value: 5, children: '5' },
          { value: 6, children: 'item name 6' },
          { value: 7, children: 'item name item name 7' },
          { value: 8, children: 'item name 7' },
          { value: 9, children: 'item name 7' },
          { value: 10, children: 'item name item nameitem name 7' },
          { value: 11, children: 'item name 7' },
          { value: 12, children: 'item name item nameitem name 7' },
          { value: 13, children: 'item name item name7' },
        ]}
        onChange={onChange}
        {...this.props}
      />
    );
  }
}

storiesOf('InputOrder', module)
  .add(
    'API',
    () => (
      <InputOrder
        value={[2, 1]}
        items={[
          { value: 1, children: 'item name 1' },
          { value: 2, children: 'item name item name item name 2' },
          { value: 3, children: 'item name 3' },
          { value: 4, children: 'item name 4' },
          { value: 5, children: '5' },
          { value: 6, children: 'item name 6' },
          { value: 7, children: 'item name item name 7' },
          { value: 8, children: 'item name 7' },
          { value: 9, children: 'item name 7' },
          { value: 10, children: 'item name item nameitem name 7' },
          { value: 11, children: 'item name 7' },
          { value: 12, children: 'item name item nameitem name 7' },
          { value: 13, children: 'item name item name7' },
        ]}
        onChange={action('onChange')}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With placeholder props',
    () => (
      <InputOrder
        value={[]}
        items={[]}
        onChange={action('onChange')}
        placeholder="Please choose a device first"
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With height props',
    () => (
      <InputOrder
        value={[]}
        items={[]}
        height={100}
        onChange={action('onChange')}
        placeholder="Please choose a device first"
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add('With state', () => <StatefulInputOrder />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add('With kind props', () => <StatefulInputOrder kind="error" />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add(
    'one item',
    () => (
      <InputOrder
        value={[1]}
        items={[{ value: 1, children: 'item name 1' }]}
        onChange={action('onChange')}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'two items',
    () => (
      <InputOrder
        value={[1]}
        items={[
          { value: 1, children: 'item name 1' },
          { value: 2, children: 'item name item name item name 2' },
        ]}
        onChange={action('onChange')}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'three items',
    () => (
      <InputOrder
        value={[1]}
        items={[
          { value: 1, children: 'item name 1' },
          { value: 2, children: 'item name item name item name 2' },
          { value: 3, children: 'item name item name item name 3' },
        ]}
        onChange={action('onChange')}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With custom itemRenderer props',
    () => (
      <InputOrder
        value={[1]}
        items={[
          { value: 1, children: 'item name 1' },
          { value: 2, children: 'item name item name item name 2' },
          { value: 3, children: 'item name item name item name 3' },
        ]}
        onChange={action('onChange')}
        itemRenderer={(item, props) => (
          <Checkbox value={props.value.includes(item.value)} size={18} />
        )}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
