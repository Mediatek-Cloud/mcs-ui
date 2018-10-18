// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputRadio from '.';

class StatefulInputRadio extends React.Component<*, { value: boolean }> {
  state = { value: true };

  onChange = (value: boolean) => this.setState(() => ({ value }));

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return <InputRadio value={value} onChange={onChange} {...this.props} />;
  }
}

storiesOf('InputRadio', module)
  .add(
    'API',
    () => (
      <InputRadio value onChange={action('onChange')}>
        Radio
      </InputRadio>
    ),
    {
      info: {
        text: 'Controlled API',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With two radios',
    () => (
      <div>
        <InputRadio value onChange={action('onChange1')}>
          Radio1
        </InputRadio>
        <InputRadio value={false} onChange={action('onChange2')}>
          Radio2
        </InputRadio>
      </div>
    ),
    {
      info: {
        text: 'Controlled API',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With state',
    () => <StatefulInputRadio>Radio with state</StatefulInputRadio>,
    {
      info: {
        text: '',
        inline: true,
        source: false,
        propTables: [InputRadio],
      },
    },
  )
  .add('Without label', () => <StatefulInputRadio />, {
    info: {
      text: '',
      inline: true,
      source: false,
      propTables: [InputRadio],
    },
  })
  .add(
    'With custom style',
    () => <StatefulInputRadio style={{ height: 24 }}>Radio</StatefulInputRadio>,
    {
      info: {
        text: '',
        inline: true,
        source: false,
        propTables: [InputRadio],
      },
    },
  );
