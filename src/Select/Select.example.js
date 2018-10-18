// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '.';

class StatefulSelect extends React.Component<{}, { value: number }> {
  state = { value: 0 };

  onChange = (e: any) => this.setState({ value: parseFloat(e.target.value) });

  render() {
    const { value } = this.state;
    return (
      <Select
        value={value}
        onChange={this.onChange}
        placeholder="選擇資料通道"
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
          { value: 3, children: 'value 3', disabled: true },
        ]}
      />
    );
  }
}

storiesOf('Select', module)
  .add(
    'API - ReadOnly',
    () => (
      <Select
        value={2}
        readOnly
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    ),
    {
      info: {
        text: 'React controlled component',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With kind props',
    () => (
      <Select
        value={2}
        readOnly
        kind="warning"
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With required props',
    () => (
      <Select
        value={2}
        readOnly
        required
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  )
  .add('With disabled props', () => <StatefulSelect />, {
    info: {
      text: '',
      inline: true,
      source: false,
      propTables: [Select],
    },
  })
  .add(
    'With focus props',
    () => (
      <Select
        value={2}
        readOnly
        focus
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  );
